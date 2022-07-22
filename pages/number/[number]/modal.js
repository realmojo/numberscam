import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import moment from "moment";
import AdSense from "react-adsense";
import Link from "next/link";
import { useRouter } from "next/router";
import { Row, Col, Form, Input, Button, Divider, Typography } from "antd";
const { Title, Paragraph } = Typography;
import { Comments } from "../../../components/Comment";
import { Recently } from "../../../components/Recently";
import { Header } from "../../../components/Header";
import { getTitle, convertDashNumber } from "../../../utils";

import Modal from "react-modal";

export const NumberModalPage = ({ item, commentItems, geo }) => {
  const CODE = geo.country;
  const { number, content, ip, created, updated } = item;
  const [message, setMessage] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [comments, setComments] = useState(commentItems);

  useEffect(() => {
    setComments(commentItems);
  }, [commentItems]);
  const schemaData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "폰북업 - 이 번호 찾아줘",
    url: "http://www.phonebookup.com",
    image: "https://phonebookup.s3.ap-northeast-2.amazonaws.com/logo.png",
    description: `${getTitle(number)} 번호는 ${
      comments[0] ? `${comments[0].message} ` : ""
    }${created} 시간에 생성되어진 번호 입니다.`,
    brand: "Phonebookup",
    datePublished: `${created}`,
  };
  const submit = (number, message) => {
    if (!message) {
      setIsEmpty(true);
      setTimeout(() => {
        setIsEmpty(false);
      }, 2200);
      return;
    }
    setIsLoading(true);
    const params = {
      created: moment().format("YYYY-MM-DD HH:mm:ss"),
      number,
      message,
      ip: localStorage.getItem("ip"),
    };
    axios.post(`/api/phone/comment`, params).then((res) => {
      setComments([...comments, res.data.item]);
      setIsLoading(false);
      setMessage("");
      setIsComplete(true);
      setTimeout(() => {
        setIsComplete(false);
      }, 2000);
    });
  };
  const handleClickSubmit = () => {
    submit(number, message);
  };
  const handleSubmit = (e) => {
    if (e.keyCode === 13) {
      submit(number, message);
    }
  };
  const onChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  return (
    <>
      <Head>
        <title>
          {getTitle(number)} - {comments[0] ? `${comments[0].message} ` : ""} -
          이 번호 알려줘 | 폰북
        </title>
        <meta
          name="description"
          content={`${getTitle(number)} 번호는 ${
            comments[0] ? `${comments[0].message} ` : ""
          }${created} 시간에 생성되어진 번호 입니다.`}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
        />
        <meta property="og:title" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="http://phonebookup.com" />
        <meta
          property="og:image"
          content="https://phonebookup.s3.ap-northeast-2.amazonaws.com/logo.png"
        />
        <meta
          property="og:description"
          content={`${getTitle(number)} 번호는 ${
            comments[0] ? `${comments[0].message} ` : ""
          }${created} 시간에 생성되어진 번호 입니다.`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <Header />
      <Row className="pt-4 container-wrap">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 16 }}
          className="px-4"
        >
          <Title>{getTitle(number)}</Title>
          <Divider style={{ margin: "4px 0" }} />
          <Paragraph className="text-right text-gray-400">{created}</Paragraph>

          <div className="text-center mb-2">
            {CODE === "JP" ? (
              <div>番号を確認してください</div>
            ) : CODE === "KR" ? (
              <div>번호를 확인해 보세요</div>
            ) : (
              <div>Check the number</div>
            )}
          </div>

          <div className="text-center mt-4">
            <Button size="large" type="primary" className="w-full">
              <Link href={`/number/${number}/modal`} target="_blank">
                <a>{CODE === "JP" ? "スタート" : "START"}</a>
              </Link>
            </Button>
          </div>
          <Divider style={{ margin: "8px 0" }} />
          <Form.Item>
            <div className="mb-2 text-xs">
              <span className="mr-2">👉</span>{" "}
              {CODE === "JP"
                ? "あなたの助けを借りて大きなダメージを防ぐことができます。"
                : CODE === "KR"
                ? "당신의 도움으로 큰 피해를 막을 수 있습니다."
                : "With your help, great damage can be prevented."}
            </div>
            <Input.Group className="mt-2" compact>
              <Input
                style={{ width: "calc(100% - 80px)" }}
                value={message}
                status={isEmpty ? "error" : ""}
                onChange={onChange}
                placeholder={
                  CODE === "JP"
                    ? "この番号について教えてください。"
                    : CODE === "KR"
                    ? "이 번호에 대해 알려주세요."
                    : "Please tell me about this number."
                }
                onKeyDown={(e) => {
                  handleSubmit(e);
                }}
              />
              <Button
                htmlType="submit"
                loading={isLoading}
                onClick={(e) => handleClickSubmit(e)}
                type="primary"
              >
                {CODE === "JP" ? "入力" : CODE === "KR" ? "등록" : "Register"}
              </Button>
            </Input.Group>
          </Form.Item>
          {isComplete && (
            <div className="ml-2">
              {CODE === "JP"
                ? "登録が完了しました。"
                : CODE === "KR"
                ? "등록이 완료되었습니다."
                : "Done."}
            </div>
          )}
          {comments.map((item, index) => (
            <Comments index={index} key={index} item={item} />
          ))}
        </Col>
        <Col
          className="px-4"
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 8 }}
        >
          <Recently number={number} CODE={CODE} />

          <Modal
            isOpen={true}
            onRequestClose={() => router.push(`/number/${number}`)}
            contentLabel="number modal"
            ariaHideApp={false}
          >
            <p>
              {comments[0] !== undefined
                ? comments[0].message
                : CODE === "JP"
                ? "まだ登録されていない番号です。 最初のコメントが内容に入ります。"
                : CODE === "KR"
                ? "아직 등록되지 않은 번호 입니다. 첫 댓글이 내용으로 들어갑니다."
                : "This number has not been registered yet. The first comment enters the content."}
            </p>
            <Button onClick={() => closeModal()}>
              {CODE === "JP" ? "閉じる" : CODE === "KR" ? "닫기" : "Close"}
            </Button>
          </Modal>
        </Col>
      </Row>
    </>
  );
};
export default NumberModalPage;

export const getServerSideProps = async ({ req, params }) => {
  const geoip = require("fast-geoip");
  let { number } = params;
  number = number.replace(/[^0-9]/g, "");

  if (number === "") {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    };
  }

  const ip = req.headers["x-real-ip"] || req.connection.remoteAddress;
  const geoInfo = await geoip.lookup(ip);
  const geo =
    geoInfo !== null
      ? geoInfo
      : {
          range: [877527040, 877658111],
          country: "KR",
          region: "28",
          eu: "0",
          timezone: "Asia/Seoul",
          city: "Incheon",
          ll: [37.4562, 126.7288],
          metro: 0,
          area: 1000,
        };

  console.log(ip, geo.country, geo.timezone, "modal");
  const response = await axios.get(
    `${process.env.BASE_URL}/api/phone/${number}`
  );
  if (response.data) {
    const item =
      response.data && response.data.number
        ? JSON.parse(JSON.stringify(response.data))
        : {};

    const {
      data: { commentItems },
    } = await axios.get(
      `${process.env.BASE_URL}/api/phone/comments?number=${number}`
    );

    return { props: { item, commentItems, geo } };
  } else {
    const { data } = await axios.post(`${process.env.BASE_URL}/api/phone`, {
      number,
      ip,
    });

    const item = data && data.number ? JSON.parse(JSON.stringify(data)) : {};
    return { props: { item, commentItems: [], geo } };
  }
};
