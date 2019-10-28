webpackHotUpdate("main",{

/***/ "./node_modules/axios-token-interceptor/index.js":
false,

/***/ "./node_modules/axios-token-interceptor/token-cache.js":
false,

/***/ "./node_modules/lock/index.js":
false,

/***/ "./src/services/Users.js":
/*!*******************************!*\
  !*** ./src/services/Users.js ***!
  \*******************************/
/*! exports provided: UserServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserServices\", function() { return UserServices; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Auth */ \"./src/services/Auth.js\");\n\n\n/*const tokenProvider = require('axios-token-interceptor');\r\naxios.interceptors.request.use(tokenProvider({\r\n  getToken: () => \r\n}));*/\n\naxios__WEBPACK_IMPORTED_MODULE_0___default.a.interceptors.request.use(function (config) {\n  var token = localStorage.get('token');\n  config.headers['authorization'] = \"Bearer \".concat(token);\n  return config;\n});\nvar UserServices = {\n  getAllBikers: function getAllBikers() {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"http://localhost:3005/api/users/getAllBikers\").then(function (res) {\n      return {\n        data: res.data\n      };\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/services/Users.js?");

/***/ })

})