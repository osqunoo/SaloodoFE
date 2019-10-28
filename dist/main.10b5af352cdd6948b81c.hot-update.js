webpackHotUpdate("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: browserHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"browserHistory\", function() { return browserHistory; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _App_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App/index */ \"./src/App/index.js\");\n/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serviceWorker */ \"./src/serviceWorker.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store */ \"./src/store.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n/* harmony import */ var _src_reducers_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/reducers/index */ \"./src/reducers/index.js\");\n/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants/action-types */ \"./src/constants/action-types.js\");\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! history */ \"./node_modules/history/esm/history.js\");\n/* harmony import */ var enzyme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! enzyme */ \"./node_modules/enzyme/build/index.js\");\n/* harmony import */ var enzyme__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(enzyme__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var enzyme_adapter_react_16__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! enzyme-adapter-react-16 */ \"./node_modules/enzyme-adapter-react-16/build/index.js\");\n/* harmony import */ var enzyme_adapter_react_16__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(enzyme_adapter_react_16__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_15__);\n\n\n\n\n\n\n\n\n\n\n\n //const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);\n//const store = createStoreWithMiddleware(reducer);\n\n\n\n //import 'font-awesome/scss/font-awesome.scss';\n\n\nvar browserHistory = Object(history__WEBPACK_IMPORTED_MODULE_12__[\"createBrowserHistory\"])();\nvar token = localStorage.getItem('token');\nvar role = localStorage.getItem('role');\nvar userId = localStorage.getItem('userId');\nvar userName = localStorage.getItem('userName');\nObject(enzyme__WEBPACK_IMPORTED_MODULE_13__[\"configure\"])({\n  adapter: new enzyme_adapter_react_16__WEBPACK_IMPORTED_MODULE_14___default.a()\n});\n\nif (token) {\n  var obj = {};\n  obj.role = role;\n  obj.userName = userName;\n\n  if (role === '1') {\n    obj.MANAGERID = userId;\n  } else {\n    obj.BIKERID = userId;\n  }\n\n  _store__WEBPACK_IMPORTED_MODULE_8__[\"default\"].dispatch({\n    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_11__[\"AUTH_USER\"],\n    payload: obj\n  });\n}\n\nvar app = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n  store: _store__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"BrowserRouter\"], {\n  basename: _config__WEBPACK_IMPORTED_MODULE_9__[\"default\"].basename\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_index__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)));\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(app, document.getElementById('root')); // If you want your app to work offline and load faster, you can change\n// unregister() to register() below. Note this comes with some pitfalls.\n// Learn more about service workers: http://bit.ly/CRA-PWA\n\n_serviceWorker__WEBPACK_IMPORTED_MODULE_6__[\"unregister\"]();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

})