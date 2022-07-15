import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../lib/gtag";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <meta
            name="google-site-verification"
            content="1zQXdxFIylzLZ-URScUVzPG3jyOm-5cG-8qbRLJCdIQ"
          />
          <meta
            name="naver-site-verification"
            content="53fa8f20253ad18858123e101af204a3a07a2816"
          /> */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          ></script>
          <script
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
          />
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
