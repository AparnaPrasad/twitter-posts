import React from 'react';
import './TweetLengthPreference.scss';
import { tweetLengthPreferences } from '../../actions';
export class TweetLengthPreference extends React.Component {

    render() {
        const { setTweetLengthPreference } = this.props;
        return (
            <div className="TweetLengthPreferenceComponent">
                <div className="row">
                    <div className="col-md-12">
                        {tweetLengthPreferences.map((tweetLength, index) => 
                            <button key={index} type="button" onClick={()=>{setTweetLengthPreference(tweetLength)}} className="btn btn-link">{tweetLength} characters</button>                        
                        )}
                    </div>
                </div>
            </div>
        );
    }
}