import { SET_SEARCH_TEXT, CLEAR_SEARCH_TEXT, 
    GET_CATEGORIES, SET_CATEGORY, ADD_CATEGORY } from '../actions';
const initialstate = {  
    searchText: '',
    categories: ['All'],
    selectedCategory: 'All'
};

export function TweetFiltersReducer(state = initialstate, action){
    const { payload } = action;
    switch(action.type){
        case SET_SEARCH_TEXT: {
            return{
                ...state,
                searchText: payload
            }
        }
        case CLEAR_SEARCH_TEXT: {
            return{
                ...state,
                searchText: ''
            }
        }
        case GET_CATEGORIES: {
            return {
                ...state,
                categories: state.categories.concat(payload.map(tweet => tweet.category).filter((elem, pos,arr) => arr.indexOf(elem) === pos))

            }
        }
        case SET_CATEGORY: {
            return {
                ...state,
                selectedCategory: payload
            }
        }
        case ADD_CATEGORY: {
            const formatted_payload  = payload.charAt(0).toUpperCase() + payload.substr(1).toLowerCase();
            return state.categories.indexOf(formatted_payload) === -1 ? {
                ...state,
                categories: [
                    ...state.categories,
                    formatted_payload
                ]
            } : state;
             

        }
        default:
            return state;
    }
}