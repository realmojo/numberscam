import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import moment from "moment";
// import Link from "next/link";
import { Row, Col, Form, Input, Button, Divider, Typography } from "antd";
const { Title, Paragraph } = Typography;
import { Comments } from "../../components/Comment";
import { Recently } from "../../components/Recently";
import { Header } from "../../components/Header";
import { getTitle } from "../../utils";
import { AdsenseTop } from "../../components/AdsenseTop";
// import { AdsenseCategory } from "../../components/AdsenseCategory";
import { AdsenseComment } from "../../components/AdsenseComment";

export const NumberPage = ({ item, commentItems, geo }) => {
  const CODE = geo.country;
  const { number, content, ip, created, updated } = item;
  const [message, setMessage] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const [comments, setComments] = useState(commentItems);

  const [isView, setIsView] = useState(false);
  // console.log(isView);
  useEffect(() => {
    setComments(commentItems);
    setIsView(false);
    setTimeout(() => {
      setIsView(true);
    }, 4000);
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
          {/* <Paragraph className="text-right text-gray-400">{created}</Paragraph> */}
          <div className="text-center mb-2">
            {CODE === "JP" ? (
              <div>番号を確認してください</div>
            ) : CODE === "KR" ? (
              <div>번호를 확인해 보세요</div>
            ) : CODE === "BR" ? (
              <div>verifique o número</div>
            ) : (
              <div>Check the number</div>
            )}
          </div>

          {isView ? (
            <Title level={4}>
              {comments[0] !== undefined
                ? comments[0].message
                : CODE === "JP"
                ? "まだ登録されていない番号です。 最初のコメントが内容に入ります。"
                : CODE === "KR"
                ? "아직 등록되지 않은 번호 입니다. 첫 댓글이 내용으로 들어갑니다."
                : "This number has not been registered yet. The first comment enters the content."}
            </Title>
          ) : (
            // <div className="text-center mt-4">
            //   <Button size="large" className="w-full">
            //     <Link href={`/number/${number}/modal`} target="_blank">
            //       <a>
            //         {CODE === "JP"
            //           ? "確認"
            //           : CODE === "BR"
            //           ? "confirme"
            //           : CODE === "KR"
            //           ? "확인"
            //           : "Confirm"}
            //       </a>
            //     </Link>
            //   </Button>
            // </div>
            ""
          )}
          <AdsenseTop CODE={CODE} />

          <Divider style={{ margin: "8px 0" }} />
          <Form.Item>
            <div className="mb-2 text-xs">
              <span className="mr-2">👉</span>{" "}
              {CODE === "JP"
                ? "あなたの助けを借りて大きなダメージを防ぐことができます。"
                : CODE === "KR"
                ? "당신의 도움으로 큰 피해를 막을 수 있습니다."
                : CODE === "BR"
                ? "Com sua ajuda, grandes danos podem ser evitados."
                : "With your help, great damage can be prevented."}
            </div>
            <AdsenseComment CODE={CODE} />
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
                    : CODE === "BR"
                    ? "Por favor, me fale sobre este número."
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
              >
                {CODE === "JP"
                  ? "入力"
                  : CODE === "KR"
                  ? "등록"
                  : CODE === "BR"
                  ? "entrada"
                  : "Register"}
              </Button>
            </Input.Group>
          </Form.Item>
          {isComplete && (
            <div className="ml-2">
              {CODE === "JP"
                ? "登録が完了しました。"
                : CODE === "KR"
                ? "등록이 완료되었습니다."
                : CODE === "BR"
                ? "O registro está completo."
                : "Done."}
            </div>
          )}
          {isComment ? (
            comments.map((item, index) => (
              <Comments index={index} key={index} item={item} />
            ))
          ) : (
            <Button
              size="large"
              className="w-full"
              onClick={() => setIsComment(true)}
            >
              {CODE === "JP"
                ? "もっと見る"
                : CODE === "KR"
                ? "더보기"
                : CODE === "BR"
                ? "Veja mais"
                : "View more"}
            </Button>
          )}
        </Col>
        <Col
          className="px-4"
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 8 }}
        >
          {/* <AdsenseCategory CODE={CODE} /> */}
          <Recently number={number} CODE={CODE} />
        </Col>
      </Row>
    </>
  );
};
export default NumberPage;

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
  // const geoInfo = await geoip.lookup("37.19.205.175");
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
  console.log(
    `${number} / ${ip} / ${geo.country} / ${geo.timezone} / ${moment().format(
      "YYYY-MM-DD HH:mm:ss"
    )}`
  );
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
