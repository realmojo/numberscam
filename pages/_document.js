import Document, { Html, Head, Main, NextScript } from "next/document";
// import { GA_TRACKING_ID } from "/common/gtag";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="keywords"
            content="currency, convert, coin, exchange, money, conversion, 환율, 주가, 코인, 변환"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://getcurrencyconvert.com" />
          <meta property="og:title" content="이 번호 뭐야" />
          <meta
            property="og:image"
            content="https://getcurrencyconvert.com/logo.png"
          />
          <meta
            property="og:description"
            content="모르는 전화번호를 검색해보세요."
          />
          <meta property="og:site_name" content="전화번호부" />
          <meta property="og:locale" content="kr_KO" />
          {/* <meta
            name="google-site-verification"
            content="1zQXdxFIylzLZ-URScUVzPG3jyOm-5cG-8qbRLJCdIQ"
          />
          <meta
            name="naver-site-verification"
            content="53fa8f20253ad18858123e101af204a3a07a2816"
          /> */}
          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          ></script> */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          /> */}
        </Head>
        <body>
          <div id="root">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}
