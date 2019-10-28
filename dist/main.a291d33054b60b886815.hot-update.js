webpackHotUpdate("main",{

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: assignOrder, toggleAssign, toggleOrderPopUp, updateOrderAction, loginAuth, getAllBikers, getAllShipments, getReservedOrders, setShow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assignOrder\", function() { return assignOrder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleAssign\", function() { return toggleAssign; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleOrderPopUp\", function() { return toggleOrderPopUp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateOrderAction\", function() { return updateOrderAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginAuth\", function() { return loginAuth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllBikers\", function() { return getAllBikers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllShipments\", function() { return getAllShipments; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getReservedOrders\", function() { return getReservedOrders; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setShow\", function() { return setShow; });\n/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/action-types */ \"./src/constants/action-types.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction assignOrder(payload) {\n  return {\n    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"ASSIGN_ORDER\"],\n    payload: payload\n  };\n}\n;\nfunction toggleAssign(payload) {\n  return {\n    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"ASSIGN_OPEN_POPUP\"],\n    shipmentId: payload\n  };\n}\n;\nfunction toggleOrderPopUp(payload) {\n  return {\n    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"ORDER_OPEN_POPUP\"],\n    payload: payload\n  };\n}\n;\nfunction updateOrderAction(payload) {\n  return {\n    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"ORDER_UPDATE\"],\n    payload: payload\n  };\n}\n;\nfunction loginAuth(payload) {\n  return {\n    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_USER\"],\n    payload: payload\n  };\n}\n;\nfunction getAllBikers(payload) {\n  return {\n    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_ALL_BIKERS\"],\n    payload: payload\n  };\n}\nfunction getAllShipments(payload) {\n  return {\n    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_ALL_SHIPMENTS\"],\n    payload: payload\n  };\n}\nfunction getReservedOrders(payload) {\n  return {\n    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_RESERVED_ORDERS\"],\n    payload: payload\n  };\n}\nfunction setShow(payload) {\n  return {\n    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__[\"SET_SHOW\"],\n    payload: payload\n  };\n}\n/*\r\nexport function getCategories(params) {\r\nreturn function (dispatch) {\r\n  return axios.get(`http://localhost:8081/categories?${querystring.stringify(params)}`)\r\n    .then((res) => {\r\n      const byId = keyBy(res.data, (category) => category.id);\r\n      dispatch({type: actionTypes.CATEGORIES_FETCH_SUCCESS, payload: {byId, params}});\r\n    })\r\n};\r\n}\r\nexport function createCategory(category) {\r\nreturn function (dispatch) {\r\n  return axios.post(`http://localhost:8081/categories`, category)\r\n    .then((res) => {\r\n      dispatch({type: actionTypes.CATEGORIES_CREATE_SUCCESS, payload: res.data});\r\n    })\r\n};\r\n}\r\nexport function updateCategory(category) {\r\nreturn function (dispatch) {\r\n  return axios.put(`http://localhost:8081/categories/${category.id}`, category)\r\n    .then((res) => {\r\n      dispatch({type: actionTypes.CATEGORIES_UPDATE_SUCCESS, payload: res.data});\r\n    })\r\n};\r\n}\r\nexport function deleteCategory(id) {\r\nreturn function (dispatch) {\r\n  return axios.delete(`http://localhost:8081/categories/${id}`)\r\n    .then((res) => {\r\n      dispatch({type: actionTypes.CATEGORIES_DELETE_SUCCESS, payload: id});\r\n    })\r\n};\r\n}\r\n*/\n\n//# sourceURL=webpack:///./src/actions/index.js?");

/***/ })

})