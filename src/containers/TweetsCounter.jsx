import React from 'react';
import { connect } from 'react-redux';

class TweetsCounterContainer extends React.Component {

    render() {
        const { tweetLength } = this.props;
        return (
            <div className="float-right">
                <span className="badge badge-light">{tweetLength} Tweets</span>
            </div>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        tweetLength: store.tweets.tweets.length
    };
};

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TweetsCounterContainer);
