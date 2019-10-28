webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/font-awesome/scss/font-awesome.scss":
false,

/***/ "./node_modules/css-loader/dist/runtime/api.js":
false,

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
false,

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.eot":
false,

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0":
false,

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0":
false,

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0":
false,

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0":
false,

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0":
false,

/***/ "./node_modules/font-awesome/scss/font-awesome.scss":
false,

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
false,

/***/ "./src/App/index.js":
/*!**************************!*\
  !*** ./src/App/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loadable */ \"./node_modules/react-loadable/lib/index.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_2__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './node_modules/font-awesome/scss/font-awesome.scss'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _layout_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/Loader */ \"./src/App/layout/Loader/index.js\");\n/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hoc/_Aux */ \"./src/hoc/_Aux/index.js\");\n/* harmony import */ var _layout_ScrollToTop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/ScrollToTop */ \"./src/App/layout/ScrollToTop/index.js\");\n/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../route */ \"./src/route.js\");\n/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-cookies */ \"./node_modules/react-cookies/build/cookie.js\");\n/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_Manager_Default__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Manager/Default */ \"./src/components/Manager/Default.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\n\n //const ManagerDashboard = React.lazy(() => import('../components/Manager/Default'));\n\nvar BikerDashboard = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(22)]).then(__webpack_require__.bind(null, /*! ../components/Biker/Default */ \"./src/components/Biker/Default.js\"));\n});\nvar Login = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ../components/Authentication/SignIn/Login */ \"./src/components/Authentication/SignIn/Login.js\"));\n});\nvar AdminLayout = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({\n  loader: function loader() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(7), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ./layout/AdminLayout */ \"./src/App/layout/AdminLayout/index.js\"));\n  },\n  loading: _layout_Loader__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      var menu = _route__WEBPACK_IMPORTED_MODULE_7__[\"default\"].map(function (route, index) {\n        return route.component ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n          key: index,\n          path: route.path,\n          exact: route.exact,\n          name: route.name,\n          render: function render(props) {\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(route.component, props);\n          }\n        }) : null;\n      });\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_ScrollToTop__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Suspense\"], {\n        fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_Loader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, menu, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n        path: \"/\",\n        component: AdminLayout\n      })))));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App/index.js?");

/***/ })

})