(window.webpackJsonp=window.webpackJsonp||[]).push([[22,23],{711:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(638),c=a(300),o=a(642),i=a(639),s=a(632),u=a(33),m=a(41),p=a(32),d=a(641),E=a(640),f=a(685),h=a.n(f),b=a(19),y=a(52);a(699),a(700);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function v(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function P(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=function(e){function t(e){var a,r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(a=!(n=g(t).call(this,e))||"object"!==O(n)&&"function"!=typeof n?T(r):n).handleSubmit=a.handleSubmit.bind(T(a)),a.handlePickDateChange=a.handlePickDateChange.bind(T(a)),a.handleDeliveredChange=a.handleDeliveredChange.bind(T(a)),a.state=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(a,!0).forEach((function(t){v(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.state),a}var a,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,e),a=t,(r=[{key:"handlePickDateChange",value:function(e){this.setState({PICKED_UP_DATE:e})}},{key:"handleDeliveredChange",value:function(e){this.setState({EXPECTED_DELIVER_DATE:e})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=""!=this.state.PICKED_UP_DATE?this.state.PICKED_UP_DATE.toUTCString():"",r=""!=this.state.EXPECTED_DELIVER_DATE?this.state.EXPECTED_DELIVER_DATE.toUTCString():"",n=this.props.shipmentSelected;y.a.updateOrder(n,this.props.BIKERID,b.a.PICKED_UP,a,r).then((function(e){t.props.updateOrderAction(e.data),t.props.toggleOrderPopUp()}))}},{key:"render",value:function(){return n.a.createElement(m.a,null,n.a.createElement(l.a,null,n.a.createElement(c.a,{md:12,xl:12},n.a.createElement(d.a,{show:this.props.OrderOpen,onHide:this.props.toggleOrderPopUp},n.a.createElement(d.a.Header,{closeButton:!0},n.a.createElement(d.a.Title,null,"PickUp Order Timestamp")),n.a.createElement(E.a,{onSubmit:this.handleSubmit},n.a.createElement(d.a.Body,null,n.a.createElement("h4",null,"Pick Up"),n.a.createElement("p",null,"If you pickup this order, Please select the pickup & expected Timestamp"),n.a.createElement(E.a.Group,{as:l.a,controlId:"PickUpTimestamp"},n.a.createElement(E.a.Label,{column:!0,sm:"6",md:"6",xl:"6"},"PickUp Timestamp "),n.a.createElement(h.a,{sm:"6",md:"6",xl:"6",selected:this.state.PICKED_UP_DATE,onChange:this.handlePickDateChange,name:"PICKED_UP_DATE",showTimeSelect:!0,timeFormat:"HH:mm",timeIntervals:15,timeCaption:"time",dateFormat:"MMMM d, yyyy h:mm aa",required:!0})),n.a.createElement(E.a.Group,{as:l.a,controlId:"DeliveredTimestamp"},n.a.createElement(E.a.Label,{column:!0,sm:"6"},"Delivered Timestamp "),n.a.createElement(h.a,{sm:"6",selected:this.state.EXPECTED_DELIVER_DATE,onChange:this.handleDeliveredChange,name:"EXPECTED_DELIVER_DATE",showTimeSelect:!0,timeFormat:"HH:mm",timeIntervals:15,timeCaption:"time",dateFormat:"MMMM d, yyyy h:mm aa",required:!0}))),n.a.createElement(d.a.Footer,null,n.a.createElement(s.a,{type:"submit",variant:"success"},"PickUp Order "),n.a.createElement(s.a,{variant:"danger",onClick:this.props.toggleOrderPopUp},"Close")))))))}}])&&P(a.prototype,r),o&&P(a,o),t}(n.a.Component);var w=Object(u.b)((function(e){return{BIKERID:e.BIKERID,BIKERS:e.AllBikers,shipments:e.AllOrders,shipmentSelected:e.shipmentSelected,OrderOpen:e.OrderOpen,BikesSelected:e.BikesSelected}}),(function(e){return{updateOrderAction:function(t){return e(Object(p.i)(t))},toggleOrderPopUp:function(t){return e(Object(p.h)(t))}}}))(I),_=a(165),k=a(2),j=a.n(k);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function A(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var K=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=U(this,x(t).call(this,e))).state=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach((function(t){B(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.state),y.a.getBikerOrders(a.props.BIKERID).then((function(e){a.props.getReservedOrders(e.data)})),a}var a,r,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,e),a=t,(r=[{key:"componentWillMount",value:function(){this.props.authenticated&&"2"==this.props.role||this.context.router.history.push("/auth/login")}},{key:"explicitDelivered",value:function(e){var t=this,a=(new Date).toUTCString();y.a.updateOrder(e,this.props.BIKERID,b.a.DELIVERED,"",a).then((function(e){t.props.updateOrderAction(e.data)}))}},{key:"render",value:function(){var e=this;return n.a.createElement(m.a,null,n.a.createElement(_.a,null),n.a.createElement(l.a,null,n.a.createElement(c.a,{md:12,xl:12},n.a.createElement("h3",null,"Welcome, ",this.props.userName)),n.a.createElement(c.a,{md:4,xl:4},n.a.createElement(o.a,null,n.a.createElement(o.a.Body,{className:"border-bottom"},n.a.createElement("div",{className:"row d-flex align-items-center"},n.a.createElement("div",{className:"col-auto"},n.a.createElement("i",{className:"feather icon-zap f-30 text-c-red"})),n.a.createElement("div",{className:"col"},n.a.createElement("h3",{className:"f-w-300"},this.props.totalAssigned),n.a.createElement("span",{className:"d-block text-uppercase"},"current assigned orders")))))),n.a.createElement(c.a,{md:4,xl:4},n.a.createElement(o.a,null,n.a.createElement(o.a.Body,null,n.a.createElement("div",{className:"row d-flex align-items-center"},n.a.createElement("div",{className:"col-auto"},n.a.createElement("i",{className:"feather icon-map-pin f-30 text-c-blue"})),n.a.createElement("div",{className:"col"},n.a.createElement("h3",{className:"f-w-300"},this.props.totalPickedUp),n.a.createElement("span",{className:"d-block text-uppercase"},"total picked-up orders")))))),n.a.createElement(c.a,{md:4,xl:4},n.a.createElement(o.a,null,n.a.createElement(o.a.Body,null,n.a.createElement("div",{className:"row d-flex align-items-center"},n.a.createElement("div",{className:"col-auto"},n.a.createElement("i",{className:"feather icon-check-square f-30 text-c-black"})),n.a.createElement("div",{className:"col"},n.a.createElement("h3",{className:"f-w-300"},this.props.totalDelivered),n.a.createElement("span",{className:"d-block text-uppercase"},"total Delivered orders")))))),n.a.createElement(c.a,{md:12,xl:12},n.a.createElement(o.a,{className:"Recent-Users"},n.a.createElement(o.a.Header,null,n.a.createElement(o.a.Title,{as:"h2"},"My Orders")),n.a.createElement(o.a.Body,{className:"px-0 py-2"},n.a.createElement(i.a,{responsive:!0,hover:!0,pagination:"true"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"#"),n.a.createElement("th",null,"Shipment"),n.a.createElement("th",null,"Status"),n.a.createElement("th",null,"PickUp Date"),n.a.createElement("th",null,"Expected Delivered Date"),n.a.createElement("th",null,"Valid Date"),n.a.createElement("th",null,"Actions"))),n.a.createElement("tbody",null,this.props.shipmentReserved.map((function(t,a){return n.a.createElement("tr",{key:a,className:"unread"},n.a.createElement("td",null,t.ID),n.a.createElement("td",null,n.a.createElement("h6",{className:"mb-1"},t.MAIN_TITLE),n.a.createElement("p",{className:"m-0"},"From:",t.ORIGIN," - To:",t.DESTINATION)),n.a.createElement("td",null,n.a.createElement("h6",{className:"text-muted"},"WAITING"==t.STATUS&&n.a.createElement("i",{className:"fa fa-circle text-c-green f-10 m-r-15"}),"ASSIGNED"==t.STATUS&&n.a.createElement("i",{className:"fa fa-circle text-c-red f-10 m-r-15"}),"PICKED_UP"==t.STATUS&&n.a.createElement("i",{className:"fa fa-circle text-c-blue f-10 m-r-15"}),"DELIVERED"==t.STATUS&&n.a.createElement("i",{className:"fa fa-circle text-c-black f-10 m-r-15"}),t.STATUS)),n.a.createElement("td",null,n.a.createElement("h6",{className:"text-muted"},t.PICKED_UP_DATE)),n.a.createElement("td",null,n.a.createElement("h6",{className:"text-muted"},t.EXPECTED_DELIVER_DATE)),n.a.createElement("td",null,n.a.createElement("h6",{className:"text-muted"},t.VALID_DATE)),n.a.createElement("td",null,"ASSIGNED"==t.STATUS&&n.a.createElement(s.a,{onClick:function(){return e.props.toggleOrderPopUp(t.ID)},variant:"primary"},"Picked Up"),"PICKED_UP"==t.STATUS&&n.a.createElement(s.a,{onClick:function(){return e.explicitDelivered(t.ID)},variant:"danger"},"Explicit Delivered")))})))))))),n.a.createElement(w,null))}}])&&A(a.prototype,r),u&&A(a,u),t}(n.a.Component);B(K,"contextTypes",{router:j.a.object});t.default=Object(u.b)((function(e){return{BIKERID:e.BIKERID,authenticated:e.authenticated,role:e.role,shipmentReserved:e.AssignedOrders,totalAssigned:e.totalAssigned,totalPickedUp:e.totalPickedUp,totalDelivered:e.totalDelivered,userName:e.userName}}),(function(e){return{toggleOrderPopUp:function(t){return e(Object(p.h)(t))},getReservedOrders:function(t){return e(Object(p.d)(t))},updateOrderAction:function(t){return e(Object(p.i)(t))}}}))(K)}}]);