webpackHotUpdate("main",{

/***/ "./src/services/Shipments.js":
/*!***********************************!*\
  !*** ./src/services/Shipments.js ***!
  \***********************************/
/*! exports provided: ShipmentsServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShipmentsServices\", function() { return ShipmentsServices; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar token = localStorage.getItem('token');\nvar options = {\n  headers: {\n    'authorization': \"Bearer \".concat(token)\n  }\n};\nvar ShipmentsServices = {\n  getAllShipments: function getAllShipments() {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"http://localhost:3005/api/shipments/getAllShipments\", options).then(function (res) {\n      return {\n        data: res.data\n      };\n    });\n  },\n  getBikerOrders: function getBikerOrders(BikerId) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"http://localhost:3005/api/shipments/getBikerOrders\", {\n      BikerId: BikerId\n    }, options).then(function (res) {\n      return {\n        data: res.data\n      };\n    });\n  },\n  assignOrder: function assignOrder(BikerId, ShipmentId) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"http://localhost:3005/api/shipments/assignOrder\", {\n      BikerId: BikerId,\n      ShipmentId: ShipmentId\n    }, options).then(function (res) {\n      return {\n        data: res.data\n      };\n    });\n  },\n  updateOrder: function updateOrder(ShipmentId, BikerId, Status, PickUpDate, DeliveredDate) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"http://localhost:3005/api/shipments/updateOrder\", {\n      ShipmentId: ShipmentId,\n      BikerId: BikerId,\n      Status: Status,\n      PickUpDate: PickUpDate,\n      DeliveredDate: DeliveredDate\n    }, options).then(function (res) {\n      return {\n        data: res.data\n      };\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/services/Shipments.js?");

/***/ })

})