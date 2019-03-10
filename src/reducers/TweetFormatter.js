import {  TOGGLE_LIST_VIEW, SET_TWEET_LENGTH_PREFERENCE } from '../actions';

const initialstate = {
    isListView: true
};

export function TweetFormatterReducer(state = initialstate, action){
    const { payload } = action;
    switch(action.type){
        case TOGGLE_LIST_VIEW: {
            return{
                ...state,
                isListView: !state.isListView
            }
        }
        case SET_TWEET_LENGTH_PREFERENCE: {
            return {
                ...state,
                tweetLengthPreference: payload
            }
        }
        default:
            return state;
    }
}