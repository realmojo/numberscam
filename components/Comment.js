import React from "react";
import moment from "moment";
import "moment/locale/ko";
import { Avatar, Divider, Comment, Tooltip } from "antd";
import { convertIP, getRandomImageLink } from "../utils";

const Comments = React.memo(({ item, index }) => {
  return (
    <>
      <Comment
        author={<a>({convertIP(item.ip)})</a>}
        avatar={<Avatar src={getRandomImageLink()} alt={`Image ${index}`} />}
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
