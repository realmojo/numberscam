import React from "react";
import AdSense from "react-adsense";

export const AdsenseTop = ({ CODE }) => {
  return (
    <>
      {CODE === "JP" ? (
        <AdSense.Google
          style={{ display: "block" }}
          client="ca-pub-9130836798889522"
          slot="4974784375"
          format="auto"
          responsive="true"
        />
      ) : CODE === "BR" ? (
        <AdSense.Google
          style={{ display: "block" }}
          client="ca-pub-9130836798889522"
          slot="4541370224"
          format="auto"
          responsive="true"
        />
      ) : (
        <AdSense.Google
          style={{ display: "block" }}
          client="ca-pub-9130836798889522"
          slot="5557238304"
          format="auto"
          responsive="true"
        />
      )}
    </>
  );
};
