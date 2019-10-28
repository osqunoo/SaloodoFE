
import { ASSIGN_ORDER,ASSIGN_OPEN_POPUP,ORDER_OPEN_POPUP,ORDER_UPDATE, AUTH_USER,
  GET_ALL_BIKERS,GET_ALL_SHIPMENTS,GET_RESERVED_ORDERS,SET_SHOW} from "../constants/action-types";

export function assignOrder(payload) {
    return { type: ASSIGN_ORDER , payload: payload}
  };
  export function toggleAssign(payload) {
 
    return { type: ASSIGN_OPEN_POPUP, shipmentId: payload  }
  };
  export function toggleOrderPopUp(payload) {
 
    return { type: ORDER_OPEN_POPUP, payload: payload  }
  };
  export function updateOrderAction(payload) {
 
    return { type: ORDER_UPDATE, payload: payload  }
  };
  export function loginAuth(payload) {
 
    return { type: AUTH_USER, payload: payload  }
  };
  export function getAllBikers(payload) {
    return { type: GET_ALL_BIKERS, payload: payload  }
    
  }
  export function getAllShipments(payload) {
    return { type: GET_ALL_SHIPMENTS, payload: payload  }
    
  }
  export function getReservedOrders(payload) {
    return { type: GET_RESERVED_ORDERS, payload: payload  }
    
  }
  export function setShow(payload) {
    return { type: SET_SHOW, payload: payload  }
    
  }
  
   