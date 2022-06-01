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

/***/ 2382:
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
;// CONCATENATED MODULE: ./pages/api/phone/index.js





const updateSitemap = (number)=>{
    console.log("sitemap add number: ", number);
    const p =  true ? "/opt" : 0;
    const f =  true ? "/phonebookup/public" : 0;
    var json = external_fs_default().readFileSync(`${p}/sitemap.json`, "utf8");
    const d = JSON.parse(json);
    d.urlset.url.push({
        loc: {
            _text: `https://phonebookup.com/number/${number}`
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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [198], () => (__webpack_exec__(2382)));
module.exports = __webpack_exports__;

})();