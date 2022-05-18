// import Phone from "../../models/Phone";
import React, { useState } from "react";
// import axios from "axios";
import { Comment, Tooltip } from "antd";
import moment from "moment";
import { Row, Col, List, Avatar, Divider, Typography } from "antd";
import { Header } from "../../components/Header";
const { Title, Paragraph } = Typography;
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
export const NumberPage = ({ item }) => {
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
          <Title>01081261326 / 010-8126-1326</Title>
          <Divider />
          <Paragraph className="text-right text-gray-400">
            2022.02.23 13:33:42
          </Paragraph>
          <p className="content-wrap">현대카드 보험광고 현대카드 보험광고</p>

          {[1, 2, 3, 4].map((item) => (
            <Comment
              author={<a>(58.32.x.x)</a>}
              avatar={
                <Avatar
                  src="https://joeschmoe.io/api/v1/random"
                  alt="Han Solo"
                />
              }
              content={<p>거지같은 보험전화</p>}
              datetime={
                <Tooltip title={moment().format("2022-03-02 14:12:22")}>
                  <span>2일전</span>
                </Tooltip>
              }
            />
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
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="광고광고광고"
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

// export const getServerSideProps = async ({ params }) => {
//   const { number } = params;
//   const response = await Phone.findOne({ number });
//   if (response) {
//     const item =
//       response && response.number ? JSON.parse(JSON.stringify(response)) : {};
//     return { props: { item } };
//   } else {
//     const {
//       data: { ip },
//     } = await axios.get(`https://api.ipify.org?format=json`);

//     const { data } = await axios.post(`${process.env.API_URL}/api/phone`, {
//       number,
//       ip,
//     });
//     const item = data && data.number ? JSON.parse(JSON.stringify(data)) : {};
//     return { props: { item } };
//   }
// };
