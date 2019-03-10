import React from 'react';
import './Alert.scss';
import {ApiAlertStatus} from '../../actions';
export class Alert extends React.Component {

    render() {
        const {alertText, alertStatus, removeAlert} = this.props;
        const alertClass = alertStatus === ApiAlertStatus.SUCCESS ? 'alert-success': 'alert-danger';
        return (
            <div className="AlertComponent">
               <div className={`alert ${alertClass}`} role="alert">
                    Tweet successfully posted!
                    <button type="button" className="close" aria-label="Close" onClick={() => removeAlert()}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                {/*<div className="alert alert-danger" role="alert">
                    Error posting tweet!
                    <button type="button" className="close" aria-label="Close" >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>*/}
            </div>
        );
    }
}