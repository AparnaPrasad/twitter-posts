import React from 'react';
import {  TweetsOuterLayout, TweetLayout } from '../';

export class DisplayTweets extends React.Component {
    render() {
        const { isListView, tweets } = this.props;
        return (<TweetsOuterLayout isListView={isListView} tweets={tweets}>
            <TweetLayout isListView={isListView} tweets={tweets}/>
        </TweetsOuterLayout>);
    }
}