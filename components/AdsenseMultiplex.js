import React from "react";
import AdSense from "react-adsense";

export const AdsenseMultiplex = ({ CODE }) => {
  return (
    <>
      {CODE === "JP" ? (
        <AdSense.Google
          style={{ display: "block" }}
          client="ca-pub-9130836798889522"
          slot="3334269767"
          format="autorelaxed"
        />
      ) : CODE === "BR" ? (
        <AdSense.Google
          style={{ display: "block" }}
          client="ca-pub-9130836798889522"
          slot="1829616402"
          format="autorelaxed"
        />
      ) : (
        <AdSense.Google
          style={{ display: "block" }}
          client="ca-pub-9130836798889522"
          slot="5717160021"
          format="autorelaxed"
        />
      )}
    </>
  );
};
