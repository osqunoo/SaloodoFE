(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./src/Demo/UIElements/Basic/Badges.js":
/*!*********************************************!*\
  !*** ./src/Demo/UIElements/Basic/Badges.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/_Aux */ \"./src/hoc/_Aux/index.js\");\n/* harmony import */ var _App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../App/components/MainCard */ \"./src/App/components/MainCard.js\");\n/* harmony import */ var _App_components_UcFirst__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../App/components/UcFirst */ \"./src/App/components/UcFirst.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar Badges =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Badges, _Component);\n\n  function Badges() {\n    _classCallCheck(this, Badges);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Badges).apply(this, arguments));\n  }\n\n  _createClass(Badges, [{\n    key: \"render\",\n    value: function render() {\n      var buttonVariants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];\n      var buttonBadges = buttonVariants.map(function (variant, idx) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n          key: idx,\n          variant: variant\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_UcFirst__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          text: variant\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Badge\"], {\n          variant: \"light\",\n          className: \"ml-1\"\n        }, \"4\"));\n      });\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        title: \"Basic Badges\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Example heading \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Badge\"], {\n        variant: \"secondary\"\n      }, \"New\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Example heading \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Badge\"], {\n        variant: \"secondary\"\n      }, \"New\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Example heading \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Badge\"], {\n        variant: \"secondary\"\n      }, \"New\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Example heading \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Badge\"], {\n        variant: \"secondary\"\n      }, \"New\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"Example heading \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Badge\"], {\n        variant: \"secondary\"\n      }, \"New\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h6\", null, \"Example heading \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Badge\"], {\n        variant: \"secondary\"\n      }, \"New\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_components_MainCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        title: \"Button Badges\"\n      }, buttonBadges))));\n    }\n  }]);\n\n  return Badges;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Badges);\n\n//# sourceURL=webpack:///./src/Demo/UIElements/Basic/Badges.js?");

/***/ })

}]);