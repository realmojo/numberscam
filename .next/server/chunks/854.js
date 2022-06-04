"use strict";
exports.id = 854;
exports.ids = [854];
exports.modules = {

/***/ 292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);






const suffix = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.SearchOutlined, {
    style: {
        fontSize: 16,
        color: "#1890ff"
    }
});
const Header = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: number , 1: setNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const onSearch = ()=>{
        router.push(`/number/${number}`);
    };
    const onChange = (e)=>{
        const { value  } = e.target;
        // value의 값이 숫자가 아닐경우 빈문자열로 replace 해버림.
        const onlyNumber = value.replace(/[^0-9-]/g, "");
        setNumber(onlyNumber);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.PageHeader, {
            style: {
                background: "#1890ff"
            },
            className: "site-page-header",
            title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_4__.Space, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Avatar, {
                            style: {
                                cursor: "pointer",
                                width: 50,
                                height: 50
                            },
                            src: "https://phonebookup.s3.ap-northeast-2.amazonaws.com/logo.png"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Input.Group, {
                        compact: true,
                        style: {
                            minWidth: "400px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Input, {
                            size: "large",
                            value: number,
                            onChange: onChange,
                            placeholder: "\uC804\uD654\uBC88\uD638\uB97C \uAC80\uC0C9\uD558\uC138\uC694",
                            onPressEnter: ()=>onSearch()
                            ,
                            suffix: suffix
                        })
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 2937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "kY": () => (/* binding */ convertIP),
  "YQ": () => (/* binding */ getTitle)
});

// UNUSED EXPORTS: getRandomImageLink

;// CONCATENATED MODULE: ./config/index.js
const PHONE_START_NUMBER = [
    "010",
    "011",
    "016",
    "017",
    "018",
    "019",
    "050",
    "070",
    "080", 
];
const LOCATION_START_NUMBER = [
    "02",
    "031",
    "032",
    "033",
    "041",
    "042",
    "043",
    "044",
    "051",
    "052",
    "053",
    "054",
    "055",
    "061",
    "062",
    "063",
    "064", 
];

;// CONCATENATED MODULE: ./utils/index.js

const getRandomImageLink = ()=>{
    const random = Math.floor(Math.random() * 7) + 1;
    return `https://phonebookup.s3.ap-northeast-2.amazonaws.com/user_${random}.jpeg`;
};
const convertIP = (value)=>{
    const s = value.split(".");
    return `${s[0]}.x.x.${s[3]}`;
};
const getTitle = (n)=>{
    const length = n.length;
    let dashNumber = "";
    let d = n.split("");
    if (length === 8) {
        // 1544-3323
        d.splice(4, 0, "-");
        dashNumber = d.join("");
    } else if (length === 11 && PHONE_START_NUMBER.includes(`${n[0]}${n[1]}${n[2]}`)) {
        // 010-xxxx-xxxx
        d.splice(3, 0, "-");
        d.splice(8, 0, "-");
        dashNumber = d.join("");
    } else if (length === 12 && PHONE_START_NUMBER.includes(`${n[0]}${n[1]}${n[2]}`)) {
        // 0507-xxxx-xxxx
        d.splice(4, 0, "-");
        d.splice(9, 0, "-");
        dashNumber = d.join("");
    } else if (length === 9 && LOCATION_START_NUMBER.includes(`${n[0]}${n[1]}`)) {
        // 02-xxx-xxxx
        d.splice(2, 0, "-");
        d.splice(6, 0, "-");
        dashNumber = d.join("");
    } else if (length === 10 && LOCATION_START_NUMBER.includes(`${n[0]}${n[1]}`)) {
        // 02-xxxx-xxxx
        d.splice(2, 0, "-");
        d.splice(7, 0, "-");
        dashNumber = d.join("");
    } else if (length === 10 && LOCATION_START_NUMBER.includes(`${n[0]}${n[1]}${n[1]}`)) {
        // 031-xxxx-xxxx
        d.splice(3, 0, "-");
        d.splice(7, 0, "-");
        dashNumber = d.join("");
    } else {
        dashNumber = n;
    }
    return `${n} / ${dashNumber}`;
};


/***/ })

};
;