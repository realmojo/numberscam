import Phone from "../../models/Phone";
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "moment/locale/ko"; // 이줄 추가
import {
  Row,
  Col,
  List,
  Form,
  Input,
  Button,
  Avatar,
  Divider,
  Comment,
  Tooltip,
  Typography,
} from "antd";
const { TextArea } = Input;
const { Title, Paragraph } = Typography;
import { Header } from "../../components/Header";
import {
  API_URL,
  PHONE_START_NUMBER,
  LOCATION_START_NUMBER,
} from "../../config";

const data = [
  {
    title: "02-441-1213",
  },
  {
    title: "02-441-1213",
  },
  {
    title: "02-441-1213",
  },
  {
    title: "02-441-1213",
  },
  {
    title: "02-441-1213",
  },
  {
    title: "02-441-1213",
  },
];

const convertIP = (value) => {
  const s = value.split(".");
  return `${s[0]}.x.x.${s[3]}`;
};

const getTitle = (n) => {
  const length = n.length;
  let dashNumber = "";
  let d = n.split("");
  if (length === 8) {
    // 1544-3323
    d.splice(4, 0, "-");
    dashNumber = d.join("");
  } else if (
    // 010-xxxx-xxxx
    length === 11 &&
    PHONE_START_NUMBER.includes(`${n[0]}${n[1]}${n[2]}`)
  ) {
    d.splice(3, 0, "-");
    d.splice(8, 0, "-");
    dashNumber = d.join("");
  } else if (
    // 02-xxxx-xxxx
    length === 10 &&
    LOCATION_START_NUMBER.includes(`${n[0]}${n[1]}`)
  ) {
    d.splice(2, 0, "-");
    d.splice(7, 0, "-");
    dashNumber = d.join("");
  }

  return `${n} / ${dashNumber}`;
};

export const NumberPage = ({ item }) => {
  const { number, content, ip, created, updated } = item;
  const [message, setMessage] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [recently, setRecently] = useState([]);

  const handleSubmit = () => {
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
      setComments([res.data.item, ...comments]);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    axios.get(`${API_URL}/api/phone/comments?number=${number}`).then((res) => {
      setComments(res.data.commentItems || []);
    });
    axios.get(`${API_URL}/api/phone/comments/recently`).then((res) => {
      setRecently(res.data.recentlyItems || []);
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
            {content ? content : "처음으로 댓글로 번호에 대해서 알려주세요"}
          </p>
          <Form.Item>
            <div className="mb-2">
              <span className="mr-2">📌</span> 당신의 도움으로 큰 피해를 막을 수
              있습니다.
            </div>
            <TextArea
              rows={2}
              status={isEmpty ? "error" : ""}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder="이 번호에 대해서 알려주세요."
            />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              loading={isLoading}
              onClick={() => handleSubmit()}
              type="primary"
            >
              Add Comment
            </Button>
          </Form.Item>
          {comments.map((item, index) => (
            <React.Fragment key={index}>
              <Comment
                author={<a>({convertIP(item.ip)})</a>}
                avatar={
                  <Avatar
                    src="https://joeschmoe.io/api/v1/random"
                    alt="Han Solo"
                  />
                }
                content={<p>{item.message}</p>}
                datetime={
                  <Tooltip title={item.created}>
                    <span>{moment(item.created).fromNow()}</span>
                  </Tooltip>
                }
              />
              <Divider style={{ margin: "4px 0" }} />
            </React.Fragment>
          ))}
        </Col>
        <Col
          className="px-4"
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 8 }}
        >
          <List
            itemLayout="horizontal"
            dataSource={recently}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={<a href="https://ant.design">{item.number}</a>}
                  description={item.message}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};
export default NumberPage;

export const getServerSideProps = async ({ params }) => {
  let { number } = params;
  number = number.replace(/[^0-9]/g, "");
  const response = await Phone.findOne({ number });
  if (response) {
    const item =
      response && response.number ? JSON.parse(JSON.stringify(response)) : {};

    // console.log(item.id);

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
