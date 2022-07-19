import dbConnect from "../../../lib/mongodb";
import Phone from "../../../models/Phone";
import PhoneComment from "../../../models/PhoneComment";
import fs from "fs";
import convert from "xml-js";
import moment from "moment";
import request from "request";
const { google } = require("googleapis");
const key = require("../indexing.json");
const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ["https://www.googleapis.com/auth/indexing"],
  null
);

const updateSitemap = (number) => {
  console.log("sitemap add number: ", number);
  const p = process.env.NODE_ENV === "production" ? "/opt" : ".";
  const f = process.env.NODE_ENV === "production" ? "/phonebookup/public" : "";
  var json = fs.readFileSync(`${p}/sitemap.json`, "utf8");
  const d = JSON.parse(json);

  d.urlset.url.push({
    loc: {
      _text: `https://realcup.co.kr/number/${number}`,
    },
    lastmod: { _text: moment().format("YYYY-MM-DD") },
    priority: { _text: "1.0" },
  });

  var options = { compact: true, ignoreComment: true, spaces: 2 };
  var result = convert.json2xml(JSON.stringify(d), options);
  fs.writeFile(`${p}/sitemap.json`, JSON.stringify(d), function (err) {
    if (err !== null) {
      console.log("sitemap fail");
    }
  });
  fs.writeFile(`${p}${f}/sitemap.xml`, result, function (err) {
    if (err !== null) {
      console.log("sitemap fail");
    }
  });
};

const googleIndexingApi = (number) => {
  jwtClient.authorize(function (err, tokens) {
    if (err) {
      console.log(err);
      return;
    }
    let options = {
      url: "https://indexing.googleapis.com/v3/urlNotifications:publish",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      auth: { bearer: tokens.access_token },
      json: {
        url: `https://realcup.co.kr/number/${number}`,
        type: "URL_UPDATED",
      },
    };
    request(options, function (error, response, body) {
      console.log(body);
    });
  });
};

const bingIndexApi = (number) => {
  let options = {
    url: "https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=9aaec2c0fcd94b57b24035a8b07aac72",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      charset: "utf-8",
    },
    json: {
      siteUrl: "https://realcup.co.kr",
      urlList: [`https://realcup.co.kr/number/${number}`],
    },
  };
  request(options, function (error, response, body) {
    if (error) {
      console.log(error);
    }
    console.log(`bing indexing api success: ${number}, ${body}`);
  });
};

const fakeIp = () => {
  return `${Math.floor(Math.random() * 255) + 1}.${Math.floor(
    Math.random() * 255
  )}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
};

const handler = async (req, res) => {
  const { method } = req;
  let { number, ip, message } = req.body;

  if (!number) {
    throw "no number";
  }
  try {
    switch (method) {
      case "POST":
        // 숫자만 들어가게끔 함.
        number = number.replace(/[^0-9]/g, "");
        const phoneInfo = await Phone.findOne({ number });
        if (phoneInfo) {
          if (message) {
            const commentParams = {
              created: moment().format("YYYY-MM-DD HH:mm:ss"),
              number,
              message,
              ip: fakeIp(),
            };
            const newPhoneComment = new PhoneComment(commentParams);
            await newPhoneComment.save();
            console.log("comment add");
            res.status(200).json(phoneInfo);
            break;
          } else {
            res.status(200).send("already");
            break;
          }
        }

        if (!ip) {
          ip = fakeIp();
        }

        const params = {
          number,
          ip,
          created: moment().format("YYYY-MM-DD HH:mm:ss"),
          updated: moment().format("YYYY-MM-DD HH:mm:ss"),
        };

        const newPhone = new Phone(params);
        const item = await newPhone.save();

        if (message) {
          const commentParams = {
            created: moment().format("YYYY-MM-DD HH:mm:ss"),
            number,
            message,
            ip: fakeIp(),
          };
          const newPhoneComment = new PhoneComment(commentParams);
          await newPhoneComment.save();
        }

        // sitemap 등록
        updateSitemap(item.number);

        // googleindexing 등록
        googleIndexingApi(item.number);

        // bingIndexing 등록
        bingIndexApi(item.number);

        res.status(200).json(item || {});
        break;
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

export default dbConnect(handler);
