(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./src/Demo/UIElements/Basic/Typography.js":
/*!*************************************************!*\
  !*** ./src/Demo/UIElements/Basic/Typography.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/_Aux */ \"./src/hoc/_Aux/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar BasicTypography =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(BasicTypography, _Component);\n\n  function BasicTypography() {\n    _classCallCheck(this, BasicTypography);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(BasicTypography).apply(this, arguments));\n  }\n\n  _createClass(BasicTypography, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        sm: 12\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Title, {\n        as: \"h5\"\n      }, \"Headings\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"This is a Heading 1\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n        className: \"text-muted mb-4\"\n      }, \"Suspendisse vel quam malesuada, aliquet sem sit amet, fringilla elit. Morbi tempor tincidunt tempor. Etiam id turpis viverra, vulputate sapien nec, varius sem. Curabitur ullamcorper fringilla eleifend. In ut eros hendrerit est consequat posuere et at velit.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"This is a Heading 2\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n        className: \"text-muted mb-4\"\n      }, \"In nec rhoncus eros. Vestibulum eu mattis nisl. Quisque viverra viverra magna nec pulvinar. Maecenas pellentesque porta augue, consectetur facilisis diam porttitor sed. Suspendisse tempor est sodales augue rutrum tincidunt. Quisque a malesuada purus.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"This is a Heading 3\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n        className: \"text-muted mb-4\"\n      }, \"Vestibulum auctor tincidunt semper. Phasellus ut vulputate lacus. Suspendisse ultricies mi eros, sit amet tempor nulla varius sed. Proin nisl nisi, feugiat quis bibendum vitae, dapibus in tellus.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"This is a Heading 4\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n        className: \"text-muted mb-4\"\n      }, \"Nulla et mattis nunc. Curabitur scelerisque commodo condimentum. Mauris blandit, velit a consectetur egestas, diam arcu fermentum justo, eget ultrices arcu eros vel erat.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"This is a Heading 5\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n        className: \"text-muted mb-4\"\n      }, \"Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus elementum. Suspendisse molestie ullamcorper ornare.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h6\", null, \"This is a Heading 6\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n        className: \"text-muted mb-4\"\n      }, \"Donec ultricies, lacus id tempor condimentum, orci leo faucibus sem, a molestie libero lectus ac justo. ultricies mi eros, sit amet tempor nulla varius sed. Proin nisl nisi, feugiat quis bibendum vitae, dapibus in tellus.\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Title, {\n        as: \"h5\"\n      }, \"Display Headings\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n        className: \"display-1\"\n      }, \"Display 1\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n        className: \"display-2\"\n      }, \"Display 2\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n        className: \"display-3\"\n      }, \"Display 3\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n        className: \"display-4\"\n      }, \"Display 4\")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        md: 6\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Title, {\n        as: \"h5\"\n      }, \"Inline Text Elements\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n        className: \"lead m-t-0\"\n      }, \"Your title goes here\"), \"You can use the mark tag to\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"mark\", null, \"highlight\"), \" text.\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"del\", null, \"This line of text is meant to be treated as deleted text.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ins\", null, \"This line of text is meant to be treated as an addition to the document.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"rendered as bold text\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"em\", null, \"rendered as italicized text\")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        md: 6\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Title, {\n        as: \"h5\"\n      }, \"Contextual Text Colors\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n        className: \"text-muted mb-1\"\n      }, \"Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n        className: \"text-primary mb-1\"\n      }, \"Nullam id dolor id nibh ultricies vehicula ut id elit.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n        className: \"text-success mb-1\"\n      }, \"Duis mollis, est non commodo luctus, nisi erat porttitor ligula.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n        className: \"text-info mb-1\"\n      }, \"Maecenas sed diam eget risus varius blandit sit amet non magna.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n        className: \"text-warning mb-1\"\n      }, \"Etiam porta sem malesuada magna mollis euismod.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n        className: \"text-danger mb-1\"\n      }, \"Donec ullamcorper nulla non metus auctor fringilla.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n        className: \"text-dark mb-1\"\n      }, \"Nullam id dolor id nibh ultricies vehicula ut id elit.\")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        md: 6,\n        xl: 4\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Title, {\n        as: \"h5\"\n      }, \"Unordered\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Lorem ipsum dolor sit amet\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Consectetur adipiscing elit\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Integer molestie lorem at massa\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Facilisis in pretium nisl aliquet\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Nulla volutpat aliquam velit\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Phasellus iaculis neque\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Purus sodales ultricies\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Vestibulum laoreet porttitor sem\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Ac tristique libero volutpat at\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Faucibus porta lacus fringilla vel\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Aenean sit amet erat nunc\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Eget porttitor lorem\"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        md: 6,\n        xl: 4\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Title, {\n        as: \"h5\"\n      }, \"Ordered\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ol\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Lorem ipsum dolor sit amet\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Consectetur adipiscing elit\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Integer molestie lorem at massa\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Facilisis in pretium nisl aliquet\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Nulla volutpat aliquam velit\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Phasellus iaculis neque\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Purus sodales ultricies\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Vestibulum laoreet porttitor sem\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Ac tristique libero volutpat at\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Faucibus porta lacus fringilla vel\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Aenean sit amet erat nunc\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Eget porttitor lorem\"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        md: 6,\n        xl: 4\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Title, {\n        as: \"h5\"\n      }, \"Unstyled\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: \"list-unstyled\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Lorem ipsum dolor sit amet\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Integer molestie lorem at massa\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Phasellus iaculis neque\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Faucibus porta lacus fringilla vel\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Eget porttitor lorem\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"Inline\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: \"list-inline m-b-0\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: \"list-inline-item\"\n      }, \"Lorem ipsum\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: \"list-inline-item\"\n      }, \"Phasellus iaculis\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: \"list-inline-item\"\n      }, \"Nulla volutpat\"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        md: 6\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Title, {\n        as: \"h5\"\n      }, \"Blockquotes\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n        className: \"text-muted m-b-30\"\n      }, \"Your awesome text goes here.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"blockquote\", {\n        className: \"blockquote\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n        className: \"mb-2\"\n      }, \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", {\n        className: \"blockquote-footer\"\n      }, \"Someone famous in \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"cite\", {\n        title: \"Source Title\"\n      }, \"Source Title\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n        className: \"text-muted m-b-15 m-t-20\"\n      }, \"Add \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"code\", null, \".text-right\"), \" for a blockquote with right-aligned content.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"blockquote\", {\n        className: \"blockquote text-right\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n        className: \"mb-2\"\n      }, \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", {\n        className: \"blockquote-footer\"\n      }, \"Someone famous in \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"cite\", {\n        title: \"Source Title\"\n      }, \"Source Title\")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        md: 6\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Title, {\n        as: \"h5\"\n      }, \"Horizontal Description\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dl\", {\n        className: \"dl-horizontal row\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dt\", {\n        className: \"col-sm-3\"\n      }, \"Description lists\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dd\", {\n        className: \"col-sm-9\"\n      }, \"A description list is perfect for defining terms.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dt\", {\n        className: \"col-sm-3\"\n      }, \"Euismod\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dd\", {\n        className: \"col-sm-9\"\n      }, \"Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dd\", {\n        className: \"col-sm-9\"\n      }, \"Donec id elit non mi porta gravida at eget metus.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dt\", {\n        className: \"col-sm-3\"\n      }, \"Malesuada porta\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dd\", {\n        className: \"col-sm-9\"\n      }, \"Etiam porta sem malesuada magna mollis euismod.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dt\", {\n        className: \"col-sm-3 text-truncate\"\n      }, \"Truncated term is truncated\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"dd\", {\n        className: \"col-sm-9\"\n      }, \"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.\")))))));\n    }\n  }]);\n\n  return BasicTypography;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BasicTypography);\n\n//# sourceURL=webpack:///./src/Demo/UIElements/Basic/Typography.js?");

/***/ })

}]);