import { FETCH_TWEETS_BEGIN, FETCH_TWEETS_FAILURE, 
    FETCH_TWEETS_SUCCESS, ADD_TWEET } from '../actions';
const initialstate = {
    tweets: [],
    loading: false,
    error: null,
    searchText: undefined
};

export function TweetsReducer(state = initialstate, action){
    const { payload } = action;
    switch(action.type){
        case FETCH_TWEETS_BEGIN: {            
            return {...state,
                loading: true
            }
        }
        case FETCH_TWEETS_SUCCESS: {
            return {
                ...state,
                tweets: payload,
                loading: false
            }
        }
        case FETCH_TWEETS_FAILURE: {
            return {
                ...state,
                error: payload
            }
        }
        case ADD_TWEET: {
            return {
                ...state,
                tweets: [
                    ...state.tweets,
                    payload
                ]
            }
        }
        default:
            return state;
    }
}