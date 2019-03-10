import React from 'react';
import { connect } from 'react-redux';
import { Alert } from '../components';
import { ApiAlertStatus, removeAlert } from '../actions';

class AlertContainer extends React.Component {   
    render() {
        const {alertStatus, alertText, removeAlert} = this.props;
        return (
            <div>{alertStatus !== ApiAlertStatus.INIT && <Alert alertStatus={alertStatus} 
            alertText={alertText} removeAlert={removeAlert}/>}</div>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        alertStatus: store.alerts.alertStatus,
        alertText: store.alerts.alertText
    };
};

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        removeAlert: () => dispatch(removeAlert())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer);
