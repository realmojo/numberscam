"use strict";
exports.id = 198;
exports.ids = [198];
exports.modules = {

/***/ 6198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export dbInitConnect */
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

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
            cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI).then((mongoose2)=>{
                return mongoose2;
            });
        }
        cached.conn = await cached.promise;
        return handler(req, res);
    }
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);


/***/ })

};
;