import React from "react";
import AdSense from "react-adsense";

export const AdsenseComment = ({ CODE }) => {
  return (
    <>
      {CODE === "JP" ? (
        <AdSense.Google
          client="ca-pub-9130836798889522"
          slot="5798433960"
          style={{ display: "block", textAlign: "center" }}
          layout="in-article"
          format="fluid"
        />
      ) : // <AdSense.Google
      //   client="ca-pub-9130836798889522"
      //   slot="8656924809"
      //   style={{ display: "block" }}
      //   format="fluid"
      //   responsive="true"
      //   layoutKey="-gw-3+1f-3d+2z"
      // />
      CODE === "BR" ? (
        <AdSense.Google
          client="ca-pub-9130836798889522"
          slot="2513795075"
          style={{ display: "block", textAlign: "center" }}
          layout="in-article"
          format="fluid"
        />
      ) : (
        // <AdSense.Google
        //   client="ca-pub-9130836798889522"
        //   slot="6234829497"
        //   style={{ display: "block" }}
        //   format="fluid"
        //   responsive="true"
        //   layoutKey="-gw-3+1f-3d+2z"
        // />
        <AdSense.Google
          client="ca-pub-9130836798889522"
          slot="8340836825"
          style={{ display: "block", textAlign: "center" }}
          layout="in-article"
          format="fluid"
        />
        // <AdSense.Google
        //   client="ca-pub-9130836798889522"
        //   slot="3259760911"
        //   style={{ display: "block" }}
        //   format="fluid"
        //   responsive="true"
        //   layoutKey="-gw-3+1f-3d+2z"
        // />
      )}
    </>
  );
};
