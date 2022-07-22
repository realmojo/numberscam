import React from "react";
import AdSense from "react-adsense";

export const AdsenseCategory = ({ CODE }) => {
  return (
    <>
      {CODE === "JP" ? (
        <AdSense.Google
          style={{ display: "block" }}
          client="ca-pub-9130836798889522"
          slot="2348621032"
          format="auto"
          responsive="true"
        />
      ) : CODE === "BR" ? (
        <AdSense.Google
          style={{ display: "block" }}
          client="ca-pub-9130836798889522"
          slot="5688034585"
          format="auto"
          responsive="true"
        />
      ) : (
        <AdSense.Google
          style={{ display: "block" }}
          client="ca-pub-9130836798889522"
          slot="9304911621"
          format="auto"
          responsive="true"
        />
      )}
    </>
  );
};
