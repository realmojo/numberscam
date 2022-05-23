import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { List, Button, Tooltip } from "antd";
import moment from "moment";
import "moment/locale/ko";
import { PhoneOutlined } from "@ant-design/icons";

export const Recently = ({ number }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`/api/phone/comments/recently`).then((res) => {
      setItems(res.data.recentlyItems || []);
    });
  }, [number]);
  return (
    <List
      itemLayout="horizontal"
      dataSource={items}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <a href={`tel: ${item.number}`}>
                <Button shape="circle" icon={<PhoneOutlined />} size="middle" />
              </a>
            }
            title={
              <>
                <Link href={`/number/${item.number}`}>
                  <span style={{ cursor: "pointer", color: "#1890ff" }}>
                    {item.number}
                  </span>
                </Link>
                <Tooltip title={item.created}>
                  <span
                    className="ml-2"
                    style={{ fontSize: 12, color: "#bbb" }}
                  >
                    {moment(item.created).fromNow()}
                  </span>
                </Tooltip>
              </>
            }
            description={<div style={{ color: "#000" }}>{item.message}</div>}
          />
        </List.Item>
      )}
    />
  );
};
