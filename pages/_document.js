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
          <meta
            property="og:title"
            content="환율 계산기 - 실시간 각국 통화 변환기"
          />
          <meta
            property="og:image"
            content="https://getcurrencyconvert.com/logo.png"
          />
          <meta
            property="og:description"
            content="180여개의 각국의 나라의 통화를 변환하여 보여줍니다. 환율 정보는 매일 업데이트 되어 실시간으로 확인을 할 수 있습니다. 달러, 원화, 엔화, USD, JYP, EUR, AUD, Currency, Convert"
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
