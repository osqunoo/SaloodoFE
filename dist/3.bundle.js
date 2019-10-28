(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/App/components/MainCard.js":
/*!****************************************!*\
  !*** ./src/App/components/MainCard.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-window-size */ \"./node_modules/react-window-size/index.js\");\n/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_window_size__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hoc/_Aux */ \"./src/hoc/_Aux/index.js\");\n/* harmony import */ var _constants_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constant */ \"./src/constants/constant.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar MainCard =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(MainCard, _Component);\n\n  function MainCard() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, MainCard);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MainCard)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      isOption: _this.props.isOption,\n      fullCard: false,\n      collapseCard: false,\n      loadCard: false,\n      cardRemove: false\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"cardReloadHandler\", function () {\n      _this.setState({\n        loadCard: true\n      });\n\n      setInterval(function () {\n        _this.setState({\n          loadCard: false\n        });\n      }, 3000);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"cardRemoveHandler\", function () {\n      _this.setState({\n        cardRemove: true\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(MainCard, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var fullScreenStyle, loader, cardHeaderRight, cardHeader;\n      var card = '';\n      var cardClass = [];\n\n      if (this.state.isOption) {\n        cardHeaderRight = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"card-header-right\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Dropdown\"], {\n          alignRight: true,\n          className: \"btn-group card-option\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Dropdown\"].Toggle, {\n          id: \"dropdown-basic\",\n          className: \"btn-icon\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"feather icon-more-horizontal\"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Dropdown\"].Menu, {\n          as: \"ul\",\n          className: \"list-unstyled card-option\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Dropdown\"].Item, {\n          as: \"li\",\n          className: \"dropdown-item\",\n          onClick: function onClick() {\n            _this2.setState(function (prevState) {\n              return {\n                fullCard: !prevState.fullCard\n              };\n            });\n          }\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: this.state.fullCard ? 'feather icon-minimize' : 'feather icon-maximize'\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n          href: _constants_constant__WEBPACK_IMPORTED_MODULE_4__[\"default\"].BLANK_LINK\n        }, \" \", this.state.fullCard ? 'Restore' : 'Maximize', \" \")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Dropdown\"].Item, {\n          as: \"li\",\n          className: \"dropdown-item\",\n          onClick: function onClick() {\n            _this2.setState(function (prevState) {\n              return {\n                collapseCard: !prevState.collapseCard\n              };\n            });\n          }\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: this.state.collapseCard ? 'feather icon-plus' : 'feather icon-minus'\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n          href: _constants_constant__WEBPACK_IMPORTED_MODULE_4__[\"default\"].BLANK_LINK\n        }, \" \", this.state.collapseCard ? 'Expand' : 'Collapse', \" \")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Dropdown\"].Item, {\n          as: \"li\",\n          className: \"dropdown-item\",\n          onClick: this.cardReloadHandler\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"feather icon-refresh-cw\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n          href: _constants_constant__WEBPACK_IMPORTED_MODULE_4__[\"default\"].BLANK_LINK\n        }, \" Reload \")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Dropdown\"].Item, {\n          as: \"li\",\n          className: \"dropdown-item\",\n          onClick: this.cardRemoveHandler\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"feather icon-trash\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n          href: _constants_constant__WEBPACK_IMPORTED_MODULE_4__[\"default\"].BLANK_LINK\n        }, \" Remove \")))));\n      }\n\n      cardHeader = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Title, {\n        as: \"h5\"\n      }, this.props.title), cardHeaderRight);\n\n      if (this.state.fullCard) {\n        cardClass = [].concat(_toConsumableArray(cardClass), ['full-card']);\n        fullScreenStyle = {\n          position: 'fixed',\n          top: 0,\n          left: 0,\n          right: 0,\n          width: this.props.windowWidth,\n          height: this.props.windowHeight\n        };\n      }\n\n      if (this.state.loadCard) {\n        cardClass = [].concat(_toConsumableArray(cardClass), ['card-load']);\n        loader = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"card-loader\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"pct-loader1 anim-rotate\"\n        }));\n      }\n\n      if (this.state.cardRemove) {\n        cardClass = [].concat(_toConsumableArray(cardClass), ['d-none']);\n      }\n\n      if (this.props.cardClass) {\n        cardClass = [].concat(_toConsumableArray(cardClass), [this.props.cardClass]);\n      }\n\n      card = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n        className: cardClass.join(' '),\n        style: fullScreenStyle\n      }, cardHeader, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Collapse\"], {\n        in: !this.state.collapseCard\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Body, null, this.props.children))), loader);\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, card);\n    }\n  }]);\n\n  return MainCard;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (react_window_size__WEBPACK_IMPORTED_MODULE_2___default()(MainCard));\n\n//# sourceURL=webpack:///./src/App/components/MainCard.js?");

/***/ }),

/***/ "./src/App/components/UcFirst.js":
/*!***************************************!*\
  !*** ./src/App/components/UcFirst.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar UcFirst =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(UcFirst, _React$Component);\n\n  function UcFirst() {\n    _classCallCheck(this, UcFirst);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(UcFirst).apply(this, arguments));\n  }\n\n  _createClass(UcFirst, [{\n    key: \"render\",\n    value: function render() {\n      var string = this.props.text;\n      return string.charAt(0).toUpperCase() + string.slice(1);\n    }\n  }]);\n\n  return UcFirst;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UcFirst);\n\n//# sourceURL=webpack:///./src/App/components/UcFirst.js?");

/***/ })

}]);