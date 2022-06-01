"use strict";
(() => {
var exports = {};
exports.id = 544;
exports.ids = [544];
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

/***/ 3457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6198);
/* harmony import */ var _models_Phone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1145);


const handler = async (req, res)=>{
    const { method  } = req;
    let { number  } = req.query;
    number = number.replace(/[^0-9]/g, "");
    switch(method){
        case "GET":
            const item = await _models_Phone__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOne */ .Z.findOne({
                number
            });
            res.status(200).json(item || undefined);
            break;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(handler));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [198], () => (__webpack_exec__(3457)));
module.exports = __webpack_exports__;

})();