import React from "react";
import moment from "moment";
import "moment/locale/ko";
import { Avatar, Divider, Comment, Tooltip } from "antd";
import { convertIP } from "../utils";

const Comments = React.memo(({ item, index }) => {
  return (
    <>
      <Comment
        author={<a>({convertIP(item.ip)})</a>}
        avatar={
          <Avatar
            src="https://phonebookup.s3.ap-northeast-2.amazonaws.com/account.png"
            alt={`Image ${index}`}
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
    </>
  );
});

Comments.displayName = "comments";

export { Comments };
