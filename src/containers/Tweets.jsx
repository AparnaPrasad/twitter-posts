import React from 'react';
import { connect } from 'react-redux';
import { Tweets, PostTweet, TweetLayoutPreference, TweetLengthPreference } from '../components';
import { setSearchText, clearSearchText, setCategory,
     postTweet, toggleView, setTweetLengthPreference } from '../actions/';

class TweetsContainer extends React.Component {
    
    render() {
        const { tweets, loading, error, 
            setSearchText, searchText, clearSearchText,
            categories, setCategory, postTweet,
            alertStatus, toggleView, isListView, setTweetLengthPreference, 
            tweetLengthPreference} = this.props;
            
        return (
            <div >
                <TweetLengthPreference setTweetLengthPreference={setTweetLengthPreference} />
                <TweetLayoutPreference toggleView={toggleView}
                    isListView={isListView} />
                <Tweets tweets={ tweets } 
                    loading={ loading }
                    error={error}
                    setSearchText={setSearchText} 
                    searchText={searchText}   
                    clearSearchText={clearSearchText} 
                    categories={categories}
                    setCategory={setCategory}  
                    isListView={isListView}             
                />
                <PostTweet postTweet={postTweet} alertStatus={alertStatus} 
                    tweetLengthPreference={tweetLengthPreference}/>
            </div >
        );
    }
}
const searchFilteredTweets = (tweets, searchText) => {
    return tweets.filter((tweet) => tweet.name.toLowerCase().includes(searchText.toLowerCase()));
}

const categoryFilteredTweets = (tweets, category) => {
    return category === 'All' ? tweets : tweets.filter((tweet) => tweet.category.toLowerCase() === category.toLowerCase());
    //TODO move all to constants
}

const mapStateToProps =  (store) => {
    return {
        tweets: categoryFilteredTweets(searchFilteredTweets(store.tweets.tweets, store.filters.searchText), store.filters.selectedCategory),
        loading: store.tweets.loading,
        error: store.tweets.error,
        searchText: store.filters.searchText,
        categories: store.filters.categories,
        alertStatus: store.alerts.alertStatus,
        isListView: store.view.isListView,
        tweetLengthPreference: store.view.tweetLengthPreference
    };
};

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
       setSearchText: (text) => dispatch(setSearchText(text)),
       clearSearchText: () => dispatch(clearSearchText()),
       setCategory: (category) => dispatch(setCategory(category)),
       postTweet: (tweet) => dispatch(postTweet(tweet)),
       toggleView: () => dispatch(toggleView()),
       setTweetLengthPreference: (length) => dispatch(setTweetLengthPreference(length))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TweetsContainer);
