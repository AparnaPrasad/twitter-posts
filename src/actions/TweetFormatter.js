export const TOGGLE_LIST_VIEW = 'TOGGLE_LIST_VIEW';
export const SET_TWEET_LENGTH_PREFERENCE = 'SET_TWEET_LENGTH_PREFERENCE';

export const tweetLengthPreferences = [5, 30, 50, 100, 280];

export const toggleView = () => ({
    type: TOGGLE_LIST_VIEW
});

export const setTweetLengthPreference = (length) => ({
    type: SET_TWEET_LENGTH_PREFERENCE,
    payload: length
});