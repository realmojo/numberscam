import React, { useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "antd/dist/antd.css";

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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
