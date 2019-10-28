import * as actionTypes from '../constants/action-types';
import ORDER_STATUS from '../constants/orderStatus';
import config from '../config';
 


const initialState = {
    isOpen: [], //for active default menu
    isTrigger: [], //for active default menu, set blank for horizontal
    ...config,
    isFullScreen: false, // static can't change
    AssignOpen: false,
    OrderOpen: false,
    AssignedOrders: [],
    AllOrders:[],
    AllBikers:[],
    shipmentSelected: 1,
    authenticated: false,
    role:'0',
    BIKERID: '1',
    MANAGERID: '1',
    userName: '',
    totalAssigned:0,
    totalPickedUp:0,
    totalDelivered:0,
    ToastOpen: false
};

const reducer = (state = initialState, action) => {
    let trigger = [];
    let open = [];
    
    switch (action.type) {
        
        case actionTypes.ORDER_OPEN_POPUP:
                return {
                    ...state,
                    shipmentSelected: Number(action.payload),
                    OrderOpen: !state.OrderOpen
                };
        case actionTypes.ASSIGN_ORDER:
            
                return {
                    ...state,
                    AllOrders: action.payload,
                    ToastOpen: true
                };
        case actionTypes.ASSIGN_OPEN_POPUP:
            return {
                ...state,
                shipmentSelected: Number(action.shipmentId),
                AssignOpen: !state.AssignOpen
            };
        case actionTypes.SET_SHOW:
            return {
                ...state,
                ToastOpen: !state.ToastOpen
            };
            
        case actionTypes.COLLAPSE_MENU:
            return {
                ...state,
                collapseMenu: !state.collapseMenu
            };
        case actionTypes.COLLAPSE_TOGGLE:
            if (action.menu.type === 'sub') {
                open = state.isOpen;
                trigger = state.isTrigger;

                const triggerIndex = trigger.indexOf(action.menu.id);
                if (triggerIndex > -1) {
                    open = open.filter(item => item !== action.menu.id);
                    trigger = trigger.filter(item => item !== action.menu.id);
                }

                if (triggerIndex === -1) {
                    open = [...open, action.menu.id];
                    trigger = [...trigger, action.menu.id];
                }
            } else {
                open = state.isOpen;
                const triggerIndex = (state.isTrigger).indexOf(action.menu.id);
                trigger = (triggerIndex === -1) ? [action.menu.id] : [];
                open = (triggerIndex === -1) ? [action.menu.id] : [];
            }

            return {
                ...state,
                isOpen: open,
                isTrigger: trigger
            };
        case actionTypes.NAV_CONTENT_LEAVE:
            return {
                ...state,
                isOpen: open,
                isTrigger: trigger,
            };
        case actionTypes.NAV_COLLAPSE_LEAVE:
            if (action.menu.type === 'sub') {
                open = state.isOpen;
                trigger = state.isTrigger;

                const triggerIndex = trigger.indexOf(action.menu.id);
                if (triggerIndex > -1) {
                    open = open.filter(item => item !== action.menu.id);
                    trigger = trigger.filter(item => item !== action.menu.id);
                }
                return {
                    ...state,
                    isOpen: open,
                    isTrigger: trigger,
                };
            }
            return {...state};
        case actionTypes.FULL_SCREEN :
            return {
                ...state,
                isFullScreen: !state.isFullScreen
            };
        case actionTypes.FULL_SCREEN_EXIT:
            return {
                ...state,
                isFullScreen: false
            };
        case actionTypes.CHANGE_LAYOUT:
            return {
                ...state,
                layout: action.layout
            };
        case actionTypes.OPEN_ASSIGN:
            return {
                ...state,
                AssignOpen: true
            };
        case actionTypes.CLOSE_ASSIGN:
            return {
                ...state,
                AssignOpen: false
            };
        case actionTypes.AUTH_USER:
            return { 
                ...state, 
                error: '', 
                authenticated: true , 
                role: action.payload  != undefined ? action.payload.role : '0',
                BIKERID: (action.payload  != undefined && action.payload.role == '2' ) ? action.payload.BIKERID : '1',
                MANAGERID: (action.payload  != undefined && action.payload.role == '1' ) ? action.payload.MANAGERID : '1',
                userName: (action.payload  != undefined ) ? action.payload.userName : ''   };
        case actionTypes.UNAUTH_USER:
            return { ...state, authenticated: false, role: '0' };
        case actionTypes.AUTH_ERROR:
            return { ...state, error: action.payload };
        case actionTypes.GET_ALL_BIKERS:
            return { ...state, AllBikers: action.payload };
        case actionTypes.GET_ALL_SHIPMENTS:
            return { ...state, AllOrders: action.payload };
        case actionTypes.GET_RESERVED_ORDERS:
            return { 
                ...state, 
                AssignedOrders: action.payload,
                totalAssigned: action.payload.filter(obj => obj.STATUS === ORDER_STATUS.ASSIGNED) != undefined ? action.payload.filter(obj => obj.STATUS === ORDER_STATUS.ASSIGNED).length : 0,
                totalPickedUp: action.payload.filter(obj => obj.STATUS === ORDER_STATUS.PICKED_UP) != undefined ? action.payload.filter(obj => obj.STATUS === ORDER_STATUS.PICKED_UP).length : 0,
                totalDelivered: action.payload.filter(obj => obj.STATUS === ORDER_STATUS.DELIVERED) != undefined ? action.payload.filter(obj => obj.STATUS === ORDER_STATUS.DELIVERED).length : 0
             };
        case actionTypes.ORDER_UPDATE:
            
                return {
                    ...state,
                    AssignedOrders: action.payload,
                    totalAssigned: action.payload.filter(obj => obj.STATUS === ORDER_STATUS.ASSIGNED) != undefined ? action.payload.filter(obj => obj.STATUS === ORDER_STATUS.ASSIGNED).length : 0,
                    totalPickedUp: action.payload.filter(obj => obj.STATUS === ORDER_STATUS.PICKED_UP) != undefined ? action.payload.filter(obj => obj.STATUS === ORDER_STATUS.PICKED_UP).length : 0,
                    totalDelivered: action.payload.filter(obj => obj.STATUS === ORDER_STATUS.DELIVERED) != undefined ? action.payload.filter(obj => obj.STATUS === ORDER_STATUS.DELIVERED).length : 0,
                    ToastOpen: true
                };
        default:
            return state;
    }
    return state;
};

export default reducer;