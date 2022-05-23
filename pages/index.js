import { Header } from "../components/Header";
import { Row, Col, Card, Skeleton } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/ko";
import Link from "next/link";
import { convertIP } from "../utils";

const SkeletonComponent = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
        <Col
          key={item}
          className="mb-4"
          xs={{ span: 24 }}
          sm={{ span: 12 }}
          lg={{ span: 6 }}
        >
          <Skeleton />
        </Col>
      ))}
    </>
  );
};
const ItemsComponent = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <Col
          key={index}
          className="mb-4"
          xs={{ span: 24 }}
          sm={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <Card
            type="inner"
            title={<Link href={`/number/${item.number}`}>{item.number}</Link>}
          >
            <p>{item.message}</p>
            <span style={{ fontSize: 12, color: "#bbb" }}>
              {moment(item.created).fromNow()}
            </span>
            <span style={{ fontSize: 12, color: "#bbb" }}>
              ({convertIP(item.ip)})
            </span>
          </Card>
        </Col>
      ))}
    </>
  );
};
const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`/api/phone/comments/recently`).then((res) => {
      setItems(res.data.recentlyItems || []);
    });
  }, []);
  return (
    <>
      <Header />
      <Row gutter={16} className="pt-4 container-wrap">
        {items.length === 0 ? (
          <SkeletonComponent />
        ) : (
          <ItemsComponent items={items} />
        )}
      </Row>
    </>
  );
};

export default Home;
