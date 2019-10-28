webpackHotUpdate("main",{

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/action-types */ \"./src/constants/action-types.js\");\n/* harmony import */ var _constants_orderStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/orderStatus */ \"./src/constants/orderStatus.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar initialState = _objectSpread({\n  isOpen: [],\n  //for active default menu\n  isTrigger: []\n}, _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  isFullScreen: false,\n  // static can't change\n  AssignOpen: false,\n  OrderOpen: false,\n  AssignedOrders: [],\n  AllOrders: [],\n  AllBikers: [],\n  shipmentSelected: 1,\n  authenticated: false,\n  role: '0',\n  BIKERID: '1',\n  MANAGERID: '1',\n  userName: '',\n  totalAssigned: 0,\n  totalPickedUp: 0,\n  totalDelivered: 0,\n  ToastOpen: false\n});\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var trigger = [];\n  var open = [];\n  debugger;\n\n  switch (action.type) {\n    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"ORDER_OPEN_POPUP\"]:\n      return _objectSpread({}, state, {\n        shipmentSelected: Number(action.payload),\n        OrderOpen: !state.OrderOpen\n      });\n\n    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"ASSIGN_ORDER\"]:\n      debugger;\n      return _objectSpread({}, state, {\n        AllOrders: action.payload,\n        ToastOpen: true\n      });\n\n    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"ASSIGN_OPEN_POPUP\"]:\n      return _objectSpread({}, state, {\n        shipmentSelected: Number(action.shipmentId),\n        AssignOpen: !state.AssignOpen\n      });\n\n    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"ASSIGN_OPEN_POPUP\"]:\n      return _objectSpread({}, state, {\n        setShow: !state.setShow\n      });\n\n    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"COLLAPSE_MENU\"]:\n      return _objectSpread({}, state, {\n        collapseMenu: !state.collapseMenu\n      });\n\n    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"COLLAPSE_TOGGLE\"]:\n      if (action.menu.type === 'sub') {\n        open = state.isOpen;\n        trigger = state.isTrigger;\n        var triggerIndex = trigger.indexOf(action.menu.id);\n\n        if (triggerIndex > -1) {\n          open = open.filter(function (item) {\n            return item !== action.menu.id;\n          });\n          trigger = trigger.filter(function (item) {\n            return item !== action.menu.id;\n          });\n        }\n\n        if (triggerIndex === -1) {\n          open = [].concat(_toConsumableArray(open), [action.menu.id]);\n          trigger = [].concat(_toConsumableArray(trigger), [action.menu.id]);\n        }\n      } else {\n        open = state.isOpen;\n\n        var _triggerIndex = state.isTrigger.indexOf(action.menu.id);\n\n        trigger = _triggerIndex === -1 ? [action.menu.id] : [];\n        open = _triggerIndex === -1 ? [action.menu.id] : [];\n      }\n\n      return _objectSpread({}, state, {\n        isOpen: open,\n        isTrigger: trigger\n      });\n\n    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"NAV_CONTENT_LEAVE\"]:\n      return _objectSpread({}, state, {\n        isOpen: open,\n        isTrigger: trigger\n      });\n\n    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"NAV_COLLAPSE_LEAVE\"]:\n      if (action.menu.type === 'sub') {\n        open = state.isOpen;\n        trigger = state.isTrigger;\n\n        var _triggerIndex2 = trigger.indexOf(action.menu.id);\n\n        if (_triggerIndex2 > -1) {\n          open = open.filter(function (item) {\n            return item !== action.menu.id;\n          });\n          trigger = trigger.filter(function (item) {\n            return item !== action.menu.id;\n          });\n        }\n\n        return _objectSpread({}, state, {\n          isOpen: open,\n          isTrigger: trigger\n        });\n      }\n\n      return _objectSpread({}, state);\n\n    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"FULL_SCREEN\"]:\n      return _objectSpread({}, state, {\n        isFullScreen: !state.isFullScreen\n      });\n\n    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"FULL_SCREEN_EXIT\"]:\n      return _objectSpread({}, state, {\n        isFullScreen: false\n      });\n\n    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_LAYOUT\"]:\n      return _objectSpread({}, state, {\n        layout: action.layout\n      });\n\n    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"OPEN_ASSIGN\"]:\n      return _objectSpread({}, state, {\n        AssignOpen: true\n      });\n\n    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"CLOSE_ASSIGN\"]:\n      return _objectSpread({}, state, {\n        AssignOpen: false\n      });\n\n    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_USER\"]:\n      return _objectSpread({}, state, {\n        error: '',\n        authenticated: true,\n        role: action.payload != undefined ? action.payload.role : '0',\n        BIKERID: action.payload != undefined && action.payload.role == '2' ? action.payload.BIKERID : '1',\n        MANAGERID: action.payload != undefined && action.payload.role == '1' ? action.payload.MANAGERID : '1',\n        userName: action.payload != undefined ? action.payload.userName : ''\n      });\n\n    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"UNAUTH_USER\"]:\n      return _objectSpread({}, state, {\n        authenticated: false,\n        role: '0'\n      });\n\n    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_ERROR\"]:\n      return _objectSpread({}, state, {\n        error: action.payload\n      });\n\n    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_ALL_BIKERS\"]:\n      return _objectSpread({}, state, {\n        AllBikers: action.payload\n      });\n\n    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_ALL_SHIPMENTS\"]:\n      return _objectSpread({}, state, {\n        AllOrders: action.payload\n      });\n\n    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_RESERVED_ORDERS\"]:\n      return _objectSpread({}, state, {\n        AssignedOrders: action.payload,\n        totalAssigned: action.payload.filter(function (obj) {\n          return obj.STATUS === _constants_orderStatus__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ASSIGNED;\n        }) != undefined ? action.payload.filter(function (obj) {\n          return obj.STATUS === _constants_orderStatus__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ASSIGNED;\n        }).length : 0,\n        totalPickedUp: action.payload.filter(function (obj) {\n          return obj.STATUS === _constants_orderStatus__WEBPACK_IMPORTED_MODULE_1__[\"default\"].PICKED_UP;\n        }) != undefined ? action.payload.filter(function (obj) {\n          return obj.STATUS === _constants_orderStatus__WEBPACK_IMPORTED_MODULE_1__[\"default\"].PICKED_UP;\n        }).length : 0,\n        totalDelivered: action.payload.filter(function (obj) {\n          return obj.STATUS === _constants_orderStatus__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DELIVERED;\n        }) != undefined ? action.payload.filter(function (obj) {\n          return obj.STATUS === _constants_orderStatus__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DELIVERED;\n        }).length : 0\n      });\n\n    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"ORDER_UPDATE\"]:\n      debugger;\n      return _objectSpread({}, state, {\n        AssignedOrders: action.payload,\n        totalAssigned: action.payload.filter(function (obj) {\n          return obj.STATUS === _constants_orderStatus__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ASSIGNED;\n        }) != undefined ? action.payload.filter(function (obj) {\n          return obj.STATUS === _constants_orderStatus__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ASSIGNED;\n        }).length : 0,\n        totalPickedUp: action.payload.filter(function (obj) {\n          return obj.STATUS === _constants_orderStatus__WEBPACK_IMPORTED_MODULE_1__[\"default\"].PICKED_UP;\n        }) != undefined ? action.payload.filter(function (obj) {\n          return obj.STATUS === _constants_orderStatus__WEBPACK_IMPORTED_MODULE_1__[\"default\"].PICKED_UP;\n        }).length : 0,\n        totalDelivered: action.payload.filter(function (obj) {\n          return obj.STATUS === _constants_orderStatus__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DELIVERED;\n        }) != undefined ? action.payload.filter(function (obj) {\n          return obj.STATUS === _constants_orderStatus__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DELIVERED;\n        }).length : 0,\n        ToastOpen: true\n      });\n\n    default:\n      return state;\n  }\n\n  return state;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n//# sourceURL=webpack:///./src/reducers/index.js?");

/***/ })

})