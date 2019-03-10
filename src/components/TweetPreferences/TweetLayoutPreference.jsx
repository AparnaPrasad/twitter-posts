import React from 'react';
import './TweetLayoutPreference.scss';
export class TweetLayoutPreference extends React.Component {

    render() {
        const { isListView, toggleView } = this.props;
        return (
            <div className="TweetLayoutPreferenceComponent">
                <div className="row">
                    <div className="col-md-12">
                        <button type="button" className="btn btn-link" onClick = {()=>{toggleView()}}>Show as {isListView? 'Card' : 'List'}</button>               
                    </div>
                </div>
            </div>
        );
    }
}