"use strict";
(() => {
var exports = {};
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 5058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ api)
});

;// CONCATENATED MODULE: external "mongoose"
const external_mongoose_namespaceObject = require("mongoose");
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_namespaceObject);
;// CONCATENATED MODULE: ./lib/mongodb.js

const MONGODB_URI = process.env.MONGODB_URI;
// if (!MONGODB_URI) {
//   console.log(typeof MONGODB_URI);
//   throw new Error(
//     "Please define the MONGODB_URI environment variable inside .env.local"
//   );
// }
/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */ let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    };
}
const dbInitConnect = async ()=>{
    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI).then((mongoose1)=>{
            return mongoose1;
        });
        cached.conn = await cached.promise;
    }
};
const dbConnect = (handler)=>async (req, res)=>{
        if (cached.conn) {
            return handler(req, res);
        }
        if (!cached.promise) {
            cached.promise = external_mongoose_default().connect(MONGODB_URI).then((mongoose2)=>{
                return mongoose2;
            });
        }
        cached.conn = await cached.promise;
        return handler(req, res);
    }
;
/* harmony default export */ const mongodb = (dbConnect);

;// CONCATENATED MODULE: ./pages/api/index.js

const handler = async (_, res)=>{
    res.status(500).json({
        message: "hello"
    });
};
/* harmony default export */ const api = (mongodb(handler));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5058));
module.exports = __webpack_exports__;

})();