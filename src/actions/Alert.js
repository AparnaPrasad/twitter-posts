export const ADD_ALERT = 'ADD_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

const addAlert = ({alertStatus, alertText}) => ({
        type: ADD_ALERT,
        alertStatus,
        alertText
    }
);

export const removeAlert = () => ({
    type: REMOVE_ALERT
})

export const addAlertInterface = ({alertStatus, alertText}) => {   
    return (dispatch) => {
    dispatch(addAlert({alertStatus, alertText}));
        setTimeout(()=>{
            dispatch(removeAlert());
        }, 5000);
    }
};

export const ApiAlertStatus = {
    INIT: 'init',
    SUCCESS: 'success',
    FAILURE: 'failure'
}
