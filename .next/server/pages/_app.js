(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(4722);
;// CONCATENATED MODULE: external "nextjs-progressbar"
const external_nextjs_progressbar_namespaceObject = require("nextjs-progressbar");
var external_nextjs_progressbar_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_progressbar_namespaceObject);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
;// CONCATENATED MODULE: ./pages/_app.js









const { Footer  } = external_antd_.Layout;
function MyApp({ Component , pageProps  }) {
    (0,external_react_.useEffect)(()=>{
        const ip = localStorage.getItem("ip");
        if (ip === null) {
            external_axios_default().get(`https://api.ipify.org?format=json`).then((res)=>{
                localStorage.setItem("ip", res.data.ip ? res.data.ip : "0.0.0.0");
            });
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_nextjs_progressbar_default()), {
                color: "#fff",
                startPosition: 0.3,
                stopDelayMs: 200,
                height: 1,
                showOnShallow: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Footer, {
                className: "mt-10 text-center w-full bottom-0",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-gray-400 text-xs mb-1",
                        children: [
                            "copyright\u24D2 2017 All rights reserved by ",
                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: "Phonebookup"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-gray-400 text-xs",
                        children: "\uAC8C\uC2DC\uAE00\uACFC \uB313\uAE00\uC758 \uAD8C\uB9AC \uBC0F \uCC45\uC784\uC740 \uC791\uC131\uC790\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4."
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 4722:
/***/ (() => {



/***/ }),

/***/ 5725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3072));
module.exports = __webpack_exports__;

})();