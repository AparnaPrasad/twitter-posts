import { ADD_ALERT, ApiAlertStatus, REMOVE_ALERT } from "../actions/";

const initialstate = {
    alertStatus: ApiAlertStatus.INIT,
    alertText: ''
};

export function AlertReducer(state = initialstate, action){
    const { alertStatus, alertText} = action;
    switch(action.type){
        case ADD_ALERT: {            
            return {
                ...state,
                alertStatus,
                alertText
            }
        }

        case REMOVE_ALERT: {
            return {
                ...state,
                alertStatus: ApiAlertStatus.INIT,
                alertText: ''
            }

        }
        default:
            return state;
    }
}