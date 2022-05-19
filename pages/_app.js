import React, { useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "antd/dist/antd.css";
import NextNProgress from "nextjs-progressbar";
import { Layout } from "antd";
const { Footer } = Layout;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const ip = localStorage.getItem("ip");
    if (ip === null) {
      axios.get(`https://api.ipify.org?format=json`).then((res) => {
        localStorage.setItem("ip", res.data.ip ? res.data.ip : "0.0.0.0");
      });
    }
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9130836798889522"
          crossorigin="anonymous"
        ></script> */}
      </Head>
      <NextNProgress
        color="#fff"
        startPosition={0.3}
        stopDelayMs={200}
        height={1}
        showOnShallow={true}
      />
      <Component {...pageProps} />
      <Footer className="mt-10 text-center w-full bottom-0">
        <div className="text-gray-400 text-xs mb-1">
          copyrightⓒ 2017 All rights reserved by <strong>Phonebookup</strong>
        </div>
        <div className="text-gray-400 text-xs">
          게시글과 댓글의 권리 및 책임은 작성자에게 있습니다.
        </div>
      </Footer>
    </>
  );
}

export default MyApp;
