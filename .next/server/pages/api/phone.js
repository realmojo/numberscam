"use strict";
(() => {
var exports = {};
exports.id = 932;
exports.ids = [932];
exports.modules = {

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


const PhoneSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    number: {
        type: String,
        require: true,
        index: {
            unique: true
        }
    },
    content: {
        type: String,
        default: ""
    },
    userId: {
        type: String,
        default: ""
    },
    ip: {
        type: String,
        default: ""
    },
    viewCount: {
        type: Number,
        default: 0
    },
    spamCount: {
        type: Number,
        default: 0
    },
    safeCount: {
        type: Number,
        default: 0
    },
    isDelete: {
        type: Boolean,
        default: false
    },
    created: {
        type: String,
        default: moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD HH:mm:ss")
    },
    updated: {
        type: String,
        default: moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD HH:mm:ss")
    }
});
const Phone = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Phone || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Phone", PhoneSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Phone);


/***/ }),

/***/ 5755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ phone)
});

// EXTERNAL MODULE: ./lib/mongodb.js
var mongodb = __webpack_require__(6198);
// EXTERNAL MODULE: ./models/Phone.js
var Phone = __webpack_require__(1145);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "xml-js"
const external_xml_js_namespaceObject = require("xml-js");
var external_xml_js_default = /*#__PURE__*/__webpack_require__.n(external_xml_js_namespaceObject);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/phone/index.js






const key = __webpack_require__(1195);
const jwtClient = new google.auth.JWT(key.client_email, null, key.private_key, [
    "https://www.googleapis.com/auth/indexing"
], null);
const updateSitemap = (number)=>{
    console.log("sitemap add number: ", number);
    const p =  true ? "/opt" : 0;
    const f =  true ? "/phonebookup/public" : 0;
    var json = external_fs_default().readFileSync(`${p}/sitemap.json`, "utf8");
    const d = JSON.parse(json);
    d.urlset.url.push({
        loc: {
            _text: `https://realcup.co.kr/number/${number}`
        },
        lastmod: {
            _text: external_moment_default()().format("YYYY-MM-DD")
        },
        priority: {
            _text: "1.0"
        }
    });
    var options = {
        compact: true,
        ignoreComment: true,
        spaces: 2
    };
    var result = external_xml_js_default().json2xml(JSON.stringify(d), options);
    external_fs_default().writeFile(`${p}/sitemap.json`, JSON.stringify(d), function(err) {
        if (err !== null) {
            console.log("sitemap fail");
        }
    });
    external_fs_default().writeFile(`${p}${f}/sitemap.xml`, result, function(err) {
        if (err !== null) {
            console.log("sitemap fail");
        }
    });
};
const googleIndexingApi = (number)=>{
    jwtClient.authorize(function(err1, tokens) {
        if (err1) {
            console.log(err1);
            return;
        }
        let params = {
            auth: {
                bearer: tokens.access_token
            },
            json: {
                url: `https://realcup.co.kr/number/${number}`,
                type: "URL_UPDATED"
            }
        };
        external_axios_default().post("https://indexing.googleapis.com/v3/urlNotifications:publish", params, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(()=>{
            console.log(`number indexing success!`);
        }).catch((err)=>{
            console.log(err);
        });
    });
};
const handler = async (req, res)=>{
    const { method  } = req;
    let { number , ip  } = req.body;
    if (!number) {
        throw "no number";
    }
    try {
        switch(method){
            case "POST":
                // 숫자만 들어가게끔 함.
                number = number.replace(/[^0-9]/g, "");
                const params = {
                    number,
                    ip
                };
                const newPhone = new Phone/* default */.Z(params);
                const item = await newPhone.save();
                // sitemap 등록
                updateSitemap(item.number);
                // googleindexing 등록
                googleIndexingApi(item.number);
                res.status(200).json(item || {});
                break;
        }
    } catch (e) {
        res.status(500).json({
            message: e
        });
    }
};
/* harmony default export */ const phone = ((0,mongodb/* default */.Z)(handler));


/***/ }),

/***/ 1195:
/***/ ((module) => {

module.exports = JSON.parse('{"type":"service_account","project_id":"feisty-audio-355700","private_key_id":"8a61b336ba46aae9d73973a269b29e932452df92","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC4882XoEc2nftu\\nWGVpZd2sNQdD4omLMgDzXyi3kkB+s35RlWJiox4w1UeNSm8/1KY9+Rc9wziM8Ofi\\nOfWaX5oGwyEf2jIKUcYS+QvAvj9gLP6Y3ZIpHMmNji9+f+dl7HFr9fADLSqgDVUN\\nd+GLCbB2YIpdECdf8CCP/gqvj7gCFB4mG91zOT0A9tjRpfkmGt5BmTl6GhEgtG5/\\n2u4aPIpixkum0uZ0xwiEIPbi29H+ZAbG7TV5kZA14B/ubpv3wskfpDA8kuzfSc1J\\nOK5i0mFEIqd91P8jAj3lrxX/qW+Ab+xxk10FkaDbdeZPh988JahtIt5kbPEUOa4I\\n8HbXUJC3AgMBAAECggEATF4a24tKLFKiMWddhF4T4FnLBKxC988vVk5J/TZt3AMY\\nWu5wP+MzgZ1nHH+KHRScigVSo+V6cbO9Q4uEDniAHF+wyzqoo9stCsN7p1vGxlr9\\nyzfd9IzW6lS15qlAbjTphlb4Ag/BxHGM13FTFzpqew6UwyV65KG9iEcwuVoB9BUP\\nHnNunew8tQ3xGqUAiqV14xrJoDoHYT7UjAgk6RVqLFP7mC2RaKf5UZ51FJ1b5yyt\\nQLKpuJ+BYFc1CxY8GrYvLQSNp1QO4a5HEa6mnQENk5qgrb0mctCRt0nFJXrPLD5D\\nufFTveXB2ovXA2oDvxDOQI469zGCqfOAwTMt1CbSjQKBgQDs+OQF/an+B0IuV0v9\\nYLjCZOaW3dDNFyXx3dNVJ8T6NntD2opw7p46BSHACezEsVTXOJ6WRet5Zkyrpp4n\\nC5eBBezuLCVSziNun+tcENfFaRRsINkdYvL8Iv+alluSZhfcpZyazYg6enwHJyD2\\n66RKgRll1BH5gLzNHETRmpYbEwKBgQDHzZytm7lFptA1Qm0QKBKpOzHlwTVNtm1V\\n0suuaQ2oWLK8HTuv1wDcXmOzEde7cNxq97gYaK+Lbxb7TLUU4xDHm+WKdv/O+xd7\\nTX9TaVNJ6y72OCIMLhBIdHo53Qg/rbZPYJlAYQ1B4M+gUfmVOpEC3QYQpyGWS+Bp\\nvLi/Z+1kTQKBgGh1WkaNx9Zzqqe00Ylyjl8ajU7pnnYZgx938gVyj3DgfTuu5SHc\\n/aCDzJnThiw6IzTv/3AsiB0ujBOKUeLSSEmWrBddHGLA/XtxQRWHUyXxKRB09l/u\\n0z9zygqBxwHkwRYBZuQSP7/PaEba57wQqY4yFFj/v6ClMBSWJnvi0dJDAoGAGcxU\\npJ3syC+Hxriy+FkUP8Gi6bWOumAJsgErx3NNDiWVvnBP2p56P/n4CZEON+eUrkMa\\nBBzQPcK0RvJalz3SVtOsSbqfwQvutj8FZ7G7zVmOkMAitUvlUlWnynzdqcs2NP2W\\nDBf77Duo01yCS2BqhOIg/Fl4Hr3hVgXGHQDASCkCgYAcl8fwcaOLmBXFZaJOerq6\\nXMRm2yhwNGrB/fwCuM32oPAv8+PK08gMEJdr5qfAt1xoNfVppbAkS4O9nC1HmjNT\\nu5QBLEntcy+THpDz2qol8ZGdDMRbUkdGFoksvASvp/9jzky6doNtCDi+F8DbBf4z\\noRNg9DWy7G+1mjpHa/rfKw==\\n-----END PRIVATE KEY-----\\n","client_email":"phonebookup@feisty-audio-355700.iam.gserviceaccount.com","client_id":"116596146250141487828","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/phonebookup%40feisty-audio-355700.iam.gserviceaccount.com"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [198], () => (__webpack_exec__(5755)));
module.exports = __webpack_exports__;

})();