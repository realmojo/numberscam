import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import moment from "moment";
import AdSense from "react-adsense";
import Link from "next/link";
import { useRouter } from "next/router";
import { Row, Col, Form, Input, Button, Divider, Typography } from "antd";
const { Title, Paragraph } = Typography;
import { Comments } from "../../components/Comment";
import { Recently } from "../../components/Recently";
import { Header } from "../../components/Header";
import { getTitle } from "../../utils";
import Modal from "react-modal";

export const NumberPage = ({ item, commentItems }) => {
  const router = useRouter();
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
    datePublished: "2022-05-15",
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

  const closeModal = () => {
    router.push(`/number/${number}`);
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

          <Link href={`/number/${number}?isModal=true`} target="_blank">
            <div className="text-center">
              <Button type="primary">
                <a>번호 확인하기</a>
              </Button>
            </div>
          </Link>
          <AdSense.Google
            style={{ display: "block" }}
            client="ca-pub-9130836798889522"
            slot="7832304740"
            format="auto"
            responsive="true"
          />
          <p className="content-wrap">
            {comments[0] !== undefined
              ? comments[0].message
              : "아직 등록되지 않은 번호 입니다. 첫 댓글이 내용으로 들어갑니다."}
          </p>
          <Divider style={{ margin: "8px 0" }} />
          <Form.Item>
            <div className="mb-2 text-xs">
              <span className="mr-2">👉</span> 당신의 도움으로 큰 피해를 막을 수
              있습니다.
            </div>
            <Input.Group compact>
              <Input
                style={{ width: "calc(100% - 80px)" }}
                value={message}
                status={isEmpty ? "error" : ""}
                onChange={onChange}
                placeholder="이 번호에 대해서 알려주세요."
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
                등록
              </Button>
            </Input.Group>
          </Form.Item>
          {isComplete && <div className="ml-2">등록이 완료되었습니다.</div>}
          <AdSense.Google
            style={{ display: "block" }}
            client="ca-pub-9130836798889522"
            slot="2634165992"
            format="auto"
            responsive="true"
          />
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
          <AdSense.Google
            style={{ display: "block" }}
            client="ca-pub-9130836798889522"
            slot="3419746008"
            format="auto"
            responsive="true"
          />
          <Recently number={number} />

          <Modal
            isOpen={!!router.query.isModal}
            onRequestClose={() => router.push(`/number/${number}`)}
            contentLabel="number modal"
            ariaHideApp={false}
          >
            <p>
              {comments[0] !== undefined
                ? comments[0].message
                : "아직 등록되지 않은 번호 입니다. 첫 댓글이 내용으로 들어갑니다."}
            </p>
            <Button onClick={() => closeModal()}>닫기</Button>
          </Modal>
        </Col>
      </Row>
    </>
  );
};
export default NumberPage;

export const getServerSideProps = async ({ params }) => {
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

    return { props: { item, commentItems } };
  } else {
    const {
      data: { ip },
    } = await axios.get(`https://api.ipify.org?format=json`);

    const { data } = await axios.post(`${process.env.BASE_URL}/api/phone`, {
      number,
      ip,
    });

    const item = data && data.number ? JSON.parse(JSON.stringify(data)) : {};
    return { props: { item, commentItems: [] } };
  }
};
