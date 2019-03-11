import React from 'react';
import { connect } from 'react-redux';
import { Welcome } from '../components';

export class WelcomeContainer extends React.Component {
    render() {
        return (
            <Welcome />
        );
    }
}

const mapStateToProps = function (store) {
    return {
    };
};

const mapDispatchToProps = function (dispatch, ownProps) {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeContainer);
