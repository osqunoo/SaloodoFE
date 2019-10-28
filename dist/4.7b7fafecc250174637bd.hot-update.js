webpackHotUpdate(4,{

/***/ "./src/components/Biker/Default.js":
/*!*****************************************!*\
  !*** ./src/components/Biker/Default.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hoc/_Aux */ \"./src/hoc/_Aux/index.js\");\n/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/index */ \"./src/actions/index.js\");\n/* harmony import */ var _OrderPopUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OrderPopUp */ \"./src/components/Biker/OrderPopUp.js\");\n/* harmony import */ var _shared_myToast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/myToast */ \"./src/components/shared/myToast.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _services_Shipments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/Shipments */ \"./src/services/Shipments.js\");\n/* harmony import */ var _constants_orderStatus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants/orderStatus */ \"./src/constants/orderStatus.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar BikerDashboard =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(BikerDashboard, _React$Component);\n\n  function BikerDashboard(props) {\n    var _this;\n\n    _classCallCheck(this, BikerDashboard);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(BikerDashboard).call(this, props));\n    _this.state = _objectSpread({}, _this.state);\n    _services_Shipments__WEBPACK_IMPORTED_MODULE_8__[\"ShipmentsServices\"].getBikerOrders(_this.props.BIKERID).then(function (res) {\n      _this.props.getReservedOrders(res.data);\n    });\n    return _this;\n  }\n\n  _createClass(BikerDashboard, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      if (!this.props.authenticated || this.props.role != '2') {\n        this.context.router.history.push('/auth/login');\n      }\n    }\n  }, {\n    key: \"explicitDelivered\",\n    value: function explicitDelivered(shipmentId) {\n      var _this2 = this;\n\n      var EXPECTED_DELIVER_DATE = new Date().toUTCString();\n      _services_Shipments__WEBPACK_IMPORTED_MODULE_8__[\"ShipmentsServices\"].updateOrder(shipmentId, this.props.BIKERID, _constants_orderStatus__WEBPACK_IMPORTED_MODULE_9__[\"default\"].DELIVERED, '', EXPECTED_DELIVER_DATE).then(function (res) {\n        _this2.props.updateOrderAction(res.data);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_myToast__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        md: 4,\n        xl: 4\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Body, {\n        className: \"border-bottom\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row d-flex align-items-center\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-auto\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n        className: \"feather icon-zap f-30 text-c-red\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n        className: \"f-w-300\"\n      }, this.props.totalAssigned), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"d-block text-uppercase\"\n      }, \"current assigned orders\")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        md: 4,\n        xl: 4\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row d-flex align-items-center\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-auto\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n        className: \"feather icon-map-pin f-30 text-c-blue\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n        className: \"f-w-300\"\n      }, this.props.totalPickedUp), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"d-block text-uppercase\"\n      }, \"total picked-up orders\")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        md: 4,\n        xl: 4\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row d-flex align-items-center\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-auto\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n        className: \"feather icon-check-square f-30 text-c-black\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n        className: \"f-w-300\"\n      }, this.props.totalDelivered), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"d-block text-uppercase\"\n      }, \"total Delivered orders\")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        md: 12,\n        xl: 12\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n        className: \"Recent-Users\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Title, {\n        as: \"h5\"\n      }, \"My Orders\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Body, {\n        className: \"px-0 py-2\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Table\"], {\n        responsive: true,\n        hover: true,\n        pagination: \"true\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"#\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Shipment\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Status\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"PickUp Date\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Expected Delivered Date\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Valid Date\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Actions\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, this.props.shipmentReserved.map(function (val, index) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n          key: index,\n          className: \"unread\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, val.ID), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h6\", {\n          className: \"mb-1\"\n        }, val.MAIN_TITLE), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n          className: \"m-0\"\n        }, val.SUB_TITLE)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h6\", {\n          className: \"text-muted\"\n        }, val.STATUS == 'WAITING' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"fa fa-circle text-c-green f-10 m-r-15\"\n        }), val.STATUS == 'ASSIGNED' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"fa fa-circle text-c-red f-10 m-r-15\"\n        }), val.STATUS == 'PICKED_UP' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"fa fa-circle text-c-blue f-10 m-r-15\"\n        }), val.STATUS == 'DELIVERED' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"fa fa-circle text-c-black f-10 m-r-15\"\n        }), val.STATUS)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h6\", {\n          className: \"text-muted\"\n        }, val.PICKED_UP_DATE)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h6\", {\n          className: \"text-muted\"\n        }, val.EXPECTED_DELIVER_DATE)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h6\", {\n          className: \"text-muted\"\n        }, val.VALID_DATE)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, val.STATUS == 'ASSIGNED' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n          onClick: function onClick() {\n            return _this3.props.toggleOrderPopUp(val.ID);\n          },\n          variant: \"primary\"\n        }, \"Picked Up\"), val.STATUS == 'PICKED_UP' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n          onClick: function onClick() {\n            return _this3.explicitDelivered(val.ID);\n          },\n          variant: \"danger\"\n        }, \"Explicit Delivered\")));\n      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OrderPopUp__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n    }\n  }]);\n\n  return BikerDashboard;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n_defineProperty(BikerDashboard, \"contextTypes\", {\n  router: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object\n});\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    toggleOrderPopUp: function toggleOrderPopUp(id) {\n      return dispatch(Object(_actions_index__WEBPACK_IMPORTED_MODULE_4__[\"toggleOrderPopUp\"])(id));\n    },\n    getReservedOrders: function getReservedOrders(obj) {\n      return dispatch(Object(_actions_index__WEBPACK_IMPORTED_MODULE_4__[\"getReservedOrders\"])(obj));\n    },\n    updateOrderAction: function updateOrderAction(obj) {\n      return dispatch(Object(_actions_index__WEBPACK_IMPORTED_MODULE_4__[\"updateOrderAction\"])(obj));\n    }\n  };\n}\n\nfunction mapStateToProps(state) {\n  return {\n    BIKERID: state.BIKERID,\n    authenticated: state.authenticated,\n    role: state.role,\n    shipmentReserved: state.AssignedOrders,\n    totalAssigned: state.totalAssigned,\n    totalPickedUp: state.totalPickedUp,\n    totalDelivered: state.totalDelivered\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(BikerDashboard));\n\n//# sourceURL=webpack:///./src/components/Biker/Default.js?");

/***/ })

})