import { useState } from "react";
import { useRouter } from "next/router";
import { PageHeader, Input } from "antd";
const { Search } = Input;

export const Header = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSearch = (value) => {
    setIsLoading(true);
    router.push(`/number/${value}`);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };
  return (
    <>
      <PageHeader
        style={{ background: "#1890ff" }}
        className="site-page-header"
        title={
          <Search
            style={{ flex: 1 }}
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
