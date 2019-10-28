webpackHotUpdate(5,{

/***/ "./src/App/layout/AdminLayout/Navigation/NavContent/index.js":
/*!*******************************************************************!*\
  !*** ./src/App/layout/AdminLayout/Navigation/NavContent/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-perfect-scrollbar */ \"./node_modules/react-perfect-scrollbar/lib/index.js\");\n/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-window-size */ \"./node_modules/react-window-size/index.js\");\n/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_window_size__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../hoc/_Aux */ \"./src/hoc/_Aux/index.js\");\n/* harmony import */ var _NavGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavGroup */ \"./src/App/layout/AdminLayout/Navigation/NavContent/NavGroup/index.js\");\n/* harmony import */ var _constants_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../constants/constant */ \"./src/constants/constant.js\");\n/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../constants/action-types */ \"./src/constants/action-types.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\nvar NavContent =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(NavContent, _Component);\n\n  function NavContent() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, NavContent);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavContent)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      scrollWidth: 0,\n      prevDisable: true,\n      nextDisable: false\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"scrollPrevHandler\", function () {\n      var wrapperWidth = document.getElementById('sidenav-wrapper').clientWidth;\n      var scrollWidth = _this.state.scrollWidth - wrapperWidth;\n\n      if (scrollWidth < 0) {\n        _this.setState({\n          scrollWidth: 0,\n          prevDisable: true,\n          nextDisable: false\n        });\n      } else {\n        _this.setState({\n          scrollWidth: scrollWidth,\n          prevDisable: false\n        });\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"scrollNextHandler\", function () {\n      var wrapperWidth = document.getElementById('sidenav-wrapper').clientWidth;\n      var contentWidth = document.getElementById('sidenav-horizontal').clientWidth;\n      var scrollWidth = _this.state.scrollWidth + (wrapperWidth - 80);\n\n      if (scrollWidth > contentWidth - wrapperWidth) {\n        scrollWidth = contentWidth - wrapperWidth + 80;\n\n        _this.setState({\n          scrollWidth: scrollWidth,\n          prevDisable: false,\n          nextDisable: true\n        });\n      } else {\n        _this.setState({\n          scrollWidth: scrollWidth,\n          prevDisable: false\n        });\n      }\n    });\n\n    return _this;\n  }\n\n  _createClass(NavContent, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var userType = 'general';\n\n      switch (this.props.role) {\n        case '1':\n          userType = 'manager';\n          break;\n\n        case '2':\n          userType = 'biker';\n          break;\n\n        default:\n          userType = 'general';\n          break;\n      }\n\n      var navItems = this.props.navigation.map(function (item) {\n        switch (item.type) {\n          case 'group':\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavGroup__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              layout: _this2.props.layout,\n              key: item.id,\n              group: item,\n              userType: userType\n            });\n\n          default:\n            return false;\n        }\n      });\n      var mainContent = '';\n\n      if (this.props.layout === 'horizontal') {\n        var prevClass = ['sidenav-horizontal-prev'];\n\n        if (this.state.prevDisable) {\n          prevClass = [].concat(_toConsumableArray(prevClass), ['disabled']);\n        }\n\n        var nextClass = ['sidenav-horizontal-next'];\n\n        if (this.state.nextDisable) {\n          nextClass = [].concat(_toConsumableArray(nextClass), ['disabled']);\n        }\n\n        mainContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"navbar-content sidenav-horizontal\",\n          id: \"layout-sidenav\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n          href: _constants_constant__WEBPACK_IMPORTED_MODULE_7__[\"default\"].BLANK_LINK,\n          className: prevClass.join(' '),\n          onClick: this.scrollPrevHandler\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          id: \"sidenav-wrapper\",\n          className: \"sidenav-horizontal-wrapper\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n          id: \"sidenav-horizontal\",\n          className: \"nav pcoded-inner-navbar sidenav-inner\",\n          onMouseLeave: this.props.onNavContentLeave,\n          style: {\n            marginLeft: '-' + this.state.scrollWidth + 'px'\n          }\n        }, navItems)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n          href: _constants_constant__WEBPACK_IMPORTED_MODULE_7__[\"default\"].BLANK_LINK,\n          className: nextClass.join(' '),\n          onClick: this.scrollNextHandler\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null)));\n      } else {\n        mainContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"navbar-content datta-scroll\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n          className: \"nav pcoded-inner-navbar\"\n        }, navItems)));\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, mainContent);\n    }\n  }]);\n\n  return NavContent;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    layout: state.layout,\n    collapseMenu: state.collapseMenu,\n    role: state.role\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    onNavContentLeave: function onNavContentLeave() {\n      return dispatch({\n        type: _constants_action_types__WEBPACK_IMPORTED_MODULE_8__[\"NAV_CONTENT_LEAVE\"]\n      });\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(react_window_size__WEBPACK_IMPORTED_MODULE_4___default()(NavContent))));\n\n//# sourceURL=webpack:///./src/App/layout/AdminLayout/Navigation/NavContent/index.js?");

/***/ })

})