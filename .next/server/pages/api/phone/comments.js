"use strict";
(() => {
var exports = {};
exports.id = 227;
exports.ids = [227];
exports.modules = {

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


const PhoneCommentSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    // phoneId: { type: Schema.Types.ObjectId, ref: "Phone" },
    number: {
        type: String,
        require: true
    },
    message: {
        type: String,
        default: ""
    },
    ip: {
        type: String,
        default: ""
    },
    isDelete: {
        type: Boolean,
        default: false
    },
    created: {
        type: String,
        default: moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD HH:mm:ss")
    }
});
const PhoneComment = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.PhoneComment || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("PhoneComment", PhoneCommentSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhoneComment);


/***/ }),

/***/ 1996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6198);
/* harmony import */ var _models_PhoneComment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(973);


const handler = async (req, res)=>{
    const { method  } = req;
    const { number  } = req.query;
    switch(method){
        case "GET":
            const commentItems = await _models_PhoneComment__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find({
                number
            });
            res.status(200).json({
                commentItems
            });
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
var __webpack_exports__ = __webpack_require__.X(0, [198], () => (__webpack_exec__(1996)));
module.exports = __webpack_exports__;

})();