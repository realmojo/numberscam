import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import moment from "moment";
import { Row, Col, Form, Input, Button, Divider, Typography } from "antd";
const { Title, Paragraph } = Typography;
import { Comments } from "../../components/Comment";
import { Recently } from "../../components/Recently";
import { Header } from "../../components/Header";
import { API_URL } from "../../config";
import { getTitle } from "../../utils";

export const NumberPage = ({ item }) => {
  const { number, content, ip, created, updated } = item;
  const [message, setMessage] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [comments, setComments] = useState([]);
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
    axios.post(`${API_URL}/api/phone/comment`, params).then((res) => {
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
  const handleSubmit = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        submit(number, message);
      }
    },
    [message]
  );
  const onChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };
  useEffect(() => {
    axios.get(`${API_URL}/api/phone/comments?number=${number}`).then((res) => {
      setComments(res.data.commentItems || []);
    });
  }, [number]);
  return (
    <>
      <Header />
      <Row className="pt-4 container-wrap">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 16 }}
          className="px-4"
        >
          <Title>{getTitle(number)}</Title>
          <Divider />
          <Paragraph className="text-right text-gray-400">{created}</Paragraph>
          <p className="content-wrap">
            {comments[0] !== undefined ? comments[0].message : ""}
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
          <Recently number={number} />
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
    `${process.env.API_URL}/api/phone/${number}`
  );
  if (response.data) {
    const item =
      response.data && response.data.number
        ? JSON.parse(JSON.stringify(response.data))
        : {};

    return { props: { item } };
  } else {
    const {
      data: { ip },
    } = await axios.get(`https://api.ipify.org?format=json`);

    const { data } = await axios.post(`${process.env.API_URL}/api/phone`, {
      number,
      ip,
    });

    const item = data && data.number ? JSON.parse(JSON.stringify(data)) : {};
    return { props: { item, commentItems: [] } };
  }
};
