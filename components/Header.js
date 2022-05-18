import { useState } from "react";
import { PageHeader, Input } from "antd";
const { Search } = Input;

export const Header = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSearch = (value) => {
    setIsLoading(true);
    console.log(value);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <>
      <PageHeader
        // avatar={{
        //   src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
        //   width: 100,
        //   height: 100,
        // }}
        style={{ background: "#1890ff" }}
        className="site-page-header"
        title={
          <Search
            placeholder="전화번호를 검색하세요"
            allowClear
            // enterButton="Search"
            loading={isLoading ? true : false}
            size="large"
            onSearch={onSearch}
          />
        }
      />
    </>
  );
};
