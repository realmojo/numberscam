"use strict";
(() => {
var exports = {};
exports.id = 696;
exports.ids = [696];
exports.modules = {

/***/ 6850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "NumberPage": () => (/* binding */ NumberPage),
  "default": () => (/* binding */ _number_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: external "react-adsense"
var external_react_adsense_ = __webpack_require__(6348);
var external_react_adsense_default = /*#__PURE__*/__webpack_require__.n(external_react_adsense_);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "moment/locale/ko"
var ko_ = __webpack_require__(4285);
// EXTERNAL MODULE: ./utils/index.js + 1 modules
var utils = __webpack_require__(2937);
;// CONCATENATED MODULE: ./components/Comment.js






const Comments = /*#__PURE__*/ external_react_default().memo(({ item , index  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Comment, {
                author: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    children: [
                        "(",
                        (0,utils/* convertIP */.kY)(item.ip),
                        ")"
                    ]
                }),
                avatar: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Avatar, {
                    src: "https://phonebookup.s3.ap-northeast-2.amazonaws.com/account.png",
                    alt: `Image ${index}`
                }),
                content: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: item.message
                }),
                datetime: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Tooltip, {
                    title: item.created,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: external_moment_default()(item.created).fromNow()
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Divider, {
                style: {
                    margin: "4px 0"
                }
            })
        ]
    });
});
Comments.displayName = "comments";


// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
;// CONCATENATED MODULE: ./components/Recently.js









const Recently = ({ number  })=>{
    const { 0: items , 1: setItems  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        external_axios_default().get(`/api/phone/comments/recently`).then((res)=>{
            setItems(res.data.recentlyItems || []);
        });
    }, [
        number
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Typography.Title, {
                level: 2,
                style: {
                    margin: 0
                },
                children: "\uCD5C\uADFC\uC5D0 \uB4F1\uB85D\uB41C \uC804\uD654\uBC88\uD638"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.List, {
                itemLayout: "horizontal",
                dataSource: items,
                renderItem: (item)=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.List.Item, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.List.Item.Meta, {
                            avatar: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: `tel: ${item.number}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                    shape: "circle",
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.PhoneOutlined, {}),
                                    size: "middle"
                                })
                            }),
                            title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: `/number/${item.number}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            style: {
                                                cursor: "pointer",
                                                color: "#1890ff"
                                            },
                                            children: item.number
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Tooltip, {
                                        title: item.created,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "ml-2",
                                            style: {
                                                fontSize: 12,
                                                color: "#bbb"
                                            },
                                            children: external_moment_default()(item.created).fromNow()
                                        })
                                    })
                                ]
                            }),
                            description: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    color: "#000"
                                },
                                children: item.message
                            })
                        })
                    })
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(292);
;// CONCATENATED MODULE: ./pages/number/[number].js







const { Title , Paragraph  } = external_antd_.Typography;




const NumberPage = ({ item: item1 , commentItems  })=>{
    const { number: number1 , content , ip , created , updated  } = item1;
    const { 0: message1 , 1: setMessage  } = (0,external_react_.useState)("");
    const { 0: isEmpty , 1: setIsEmpty  } = (0,external_react_.useState)(false);
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    const { 0: isComplete , 1: setIsComplete  } = (0,external_react_.useState)(false);
    const { 0: comments , 1: setComments  } = (0,external_react_.useState)(commentItems);
    const schemaData = {
        "@context": "http://schema.org",
        "@type": "Organization",
        name: "\uD3F0\uBD81\uC5C5 - \uC774 \uBC88\uD638 \uCC3E\uC544\uC918",
        url: "http://www.phonebookup.com",
        image: "https://phonebookup.s3.ap-northeast-2.amazonaws.com/logo.png",
        description: `${(0,utils/* getTitle */.YQ)(number1)} 번호는 ${comments[0] ? `${comments[0].message} ` : ""}${created} 시간에 생성되어진 번호 입니다.`,
        brand: "Phonebookup",
        datePublished: "2022-05-15"
    };
    const submit = (number, message)=>{
        if (!message) {
            setIsEmpty(true);
            setTimeout(()=>{
                setIsEmpty(false);
            }, 2200);
            return;
        }
        setIsLoading(true);
        const params = {
            created: external_moment_default()().format("YYYY-MM-DD HH:mm:ss"),
            number,
            message,
            ip: localStorage.getItem("ip")
        };
        external_axios_default().post(`/api/phone/comment`, params).then((res)=>{
            setComments([
                ...comments,
                res.data.item
            ]);
            setIsLoading(false);
            setMessage("");
            setIsComplete(true);
            setTimeout(()=>{
                setIsComplete(false);
            }, 2000);
        });
    };
    const handleClickSubmit = ()=>{
        submit(number1, message1);
    };
    const handleSubmit = (e)=>{
        if (e.keyCode === 13) {
            submit(number1, message1);
        }
    };
    const onChange = (e)=>{
        const { value  } = e.target;
        setMessage(value);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            (0,utils/* getTitle */.YQ)(number1),
                            " - ",
                            comments[0] ? `${comments[0].message} ` : "",
                            " - \uC774 \uBC88\uD638 \uC54C\uB824\uC918 | \uD3F0\uBD81"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: `${(0,utils/* getTitle */.YQ)(number1)} 번호는 ${comments[0] ? `${comments[0].message} ` : ""}${created} 시간에 생성되어진 번호 입니다.`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: "http://phonebookup.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: "https://phonebookup.s3.ap-northeast-2.amazonaws.com/logo.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: `${(0,utils/* getTitle */.YQ)(number1)} 번호는 ${comments[0] ? `${comments[0].message} ` : ""}${created} 시간에 생성되어진 번호 입니다.`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(schemaData)
                        }
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* Header */.h, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Row, {
                className: "pt-4 container-wrap",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Col, {
                        xs: {
                            span: 24
                        },
                        sm: {
                            span: 24
                        },
                        lg: {
                            span: 16
                        },
                        className: "px-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                                children: (0,utils/* getTitle */.YQ)(number1)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Divider, {
                                style: {
                                    margin: "4px 0"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                                className: "text-right text-gray-400",
                                children: created
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_adsense_default()).Google, {
                                style: {
                                    display: "block"
                                },
                                client: "ca-pub-9130836798889522",
                                slot: "7832304740",
                                format: "auto",
                                responsive: "true"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "content-wrap",
                                children: comments[0] !== undefined ? comments[0].message : "\uC544\uC9C1 \uB4F1\uB85D\uB418\uC9C0 \uC54A\uC740 \uBC88\uD638 \uC785\uB2C8\uB2E4. \uCCAB \uB313\uAE00\uC774 \uB0B4\uC6A9\uC73C\uB85C \uB4E4\uC5B4\uAC11\uB2C8\uB2E4."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Divider, {
                                style: {
                                    margin: "8px 0"
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Form.Item, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mb-2 text-xs",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "mr-2",
                                                children: "\uD83D\uDC49"
                                            }),
                                            " \uB2F9\uC2E0\uC758 \uB3C4\uC6C0\uC73C\uB85C \uD070 \uD53C\uD574\uB97C \uB9C9\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Input.Group, {
                                        compact: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                                style: {
                                                    width: "calc(100% - 80px)"
                                                },
                                                value: message1,
                                                status: isEmpty ? "error" : "",
                                                onChange: onChange,
                                                placeholder: "\uC774 \uBC88\uD638\uC5D0 \uB300\uD574\uC11C \uC54C\uB824\uC8FC\uC138\uC694.",
                                                onKeyDown: (e)=>{
                                                    handleSubmit(e);
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                                htmlType: "submit",
                                                loading: isLoading,
                                                onClick: (e)=>handleClickSubmit(e)
                                                ,
                                                type: "primary",
                                                children: "\uB4F1\uB85D"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            isComplete && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "ml-2",
                                children: "\uB4F1\uB85D\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."
                            }),
                            comments.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Comments, {
                                    index: index,
                                    item: item
                                }, index)
                            )
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Col, {
                        className: "px-4",
                        xs: {
                            span: 24
                        },
                        sm: {
                            span: 24
                        },
                        lg: {
                            span: 8
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Recently, {
                            number: number1
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const _number_ = (NumberPage);
const getServerSideProps = async ({ params  })=>{
    let { number  } = params;
    number = number.replace(/[^0-9]/g, "");
    if (number === "") {
        return {
            redirect: {
                permanent: false,
                destination: "/"
            },
            props: {}
        };
    }
    const response = await external_axios_default().get(`${process.env.BASE_URL}/api/phone/${number}`);
    if (response.data) {
        const item = response.data && response.data.number ? JSON.parse(JSON.stringify(response.data)) : {};
        const { data: { commentItems  } ,  } = await external_axios_default().get(`${process.env.BASE_URL}/api/phone/comments?number=${number}`);
        return {
            props: {
                item,
                commentItems
            }
        };
    } else {
        const { data: { ip  } ,  } = await external_axios_default().get(`https://api.ipify.org?format=json`);
        const { data  } = await external_axios_default().post(`${process.env.BASE_URL}/api/phone`, {
            number,
            ip
        });
        const item = data && data.number ? JSON.parse(JSON.stringify(data)) : {};
        return {
            props: {
                item,
                commentItems: []
            }
        };
    }
};


/***/ }),

/***/ 7066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 4285:
/***/ ((module) => {

module.exports = require("moment/locale/ko");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6348:
/***/ ((module) => {

module.exports = require("react-adsense");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,854], () => (__webpack_exec__(6850)));
module.exports = __webpack_exports__;

})();