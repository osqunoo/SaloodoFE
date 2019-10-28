webpackHotUpdate(5,{

/***/ "./src/services/Auth.js":
/*!******************************!*\
  !*** ./src/services/Auth.js ***!
  \******************************/
/*! exports provided: Auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Auth\", function() { return Auth; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\n\naxios__WEBPACK_IMPORTED_MODULE_0___default.a.interceptors.response.use(function (response) {\n  return response;\n}, function (error) {\n  if (error.status == 401) {\n    Auth.logout();\n  }\n});\nvar Auth = {\n  authenticated: function authenticated() {\n    return !!localStorage.getItem('token');\n  },\n  login: function login(_ref) {\n    var username = _ref.username,\n        password = _ref.password;\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].apiUrl, \"/users/signin\"), {\n      username: username,\n      password: password\n    }).then(function (res) {\n      var _res$data = res.data,\n          data = _res$data.data,\n          role = _res$data.role,\n          token = _res$data.token,\n          userId = _res$data.userId,\n          userName = _res$data.userName;\n      localStorage.setItem('token', token);\n      localStorage.setItem('role', role);\n      localStorage.setItem('userId', userId);\n      localStorage.setItem('userName', userName);\n\n      if (role == '0') {\n        return {\n          data: data,\n          role: role,\n          userId: userId\n        };\n      } else {\n        return {\n          role: role,\n          userId: userId,\n          userName: userName\n        };\n      }\n    });\n  },\n  logout: function logout() {\n    localStorage.removeItem('role');\n    localStorage.removeItem('token');\n    localStorage.removeItem('userId');\n    localStorage.removeItem('userName');\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.interceptors.request.use(function (config) {\n      delete config.headers['authorization'];\n      return config;\n    });\n    window.location = '/auth/login';\n  }\n};\n\n//# sourceURL=webpack:///./src/services/Auth.js?");

/***/ })

})