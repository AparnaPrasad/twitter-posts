import React from 'react';
import { connect } from 'react-redux';
import { App } from '../components/';
import { fetchTweets } from '../actions';

class AppContainer extends React.Component {
    
    componentDidMount(){
        const { fetchTweets } = this.props;
        fetchTweets();
    }

    render() {
        return (
            <App/>            
        );
    }
}

const mapStateToProps = function (store) {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTweets: () => dispatch(fetchTweets())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
