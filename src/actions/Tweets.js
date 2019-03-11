import { TweetService } from '../services/';
import { getCategories, addAlertInterface, ApiAlertStatus, addCategory } from '../actions/';
export const FETCH_TWEETS_BEGIN = 'FETCH_TWEETS_BEGIN';
export const FETCH_TWEETS_SUCCESS = 'FETCH_TWEETS_SUCCESS';
export const FETCH_TWEETS_FAILURE = 'FETCH_TWEETS_FAILURE';
export const ADD_TWEET = 'ADD_TWEET';

const fetchTweetsBegin = () => ({
    type: FETCH_TWEETS_BEGIN,
});

const fetchTweetsSuccess = tweets => ({
    type: FETCH_TWEETS_SUCCESS,
    payload: tweets,
});

const fetchTweetsFailure = error => ({
    type: FETCH_TWEETS_FAILURE,
    payload: error,
});

export const addTweet = tweet => ({
    type: ADD_TWEET,
    payload: tweet
});


export function fetchTweets() {
    return (dispatch) => {
        dispatch(fetchTweetsBegin());
        TweetService.getTweets().then((data)=>{
            dispatch(fetchTweetsSuccess(data));            
            dispatch(getCategories(data));            
        }).catch(()=>{
            dispatch(fetchTweetsFailure('error'));
            dispatch(addAlertInterface({alertStatus: ApiAlertStatus.FAILURE, alertText: 'Error loading tweets'}));
        });

    }
}

export function postTweet(tweet){
    return (dispatch) => {
        TweetService.postTweet(tweet).then((data) => {
            dispatch(addTweet(tweet));
            dispatch(addCategory(tweet.category));
            dispatch(addAlertInterface({alertStatus: ApiAlertStatus.SUCCESS, alertText: 'Success posting tweet'}));
        }).catch(() => {
            dispatch(addAlertInterface({alertStatus: ApiAlertStatus.FAILURE, alertText: 'Failed to posting tweet'}));
        });
    }
}


