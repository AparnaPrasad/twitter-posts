import React from 'react';
import AlertContainer from '../containers/Alert';
import TweetsContainer from '../containers/Tweets';

export class TweetsPage extends React.Component {
    render() {
        return (
            <div className="tweets container-fluid">
                <AlertContainer />
                <TweetsContainer />
            </div>
        );
    }
}
