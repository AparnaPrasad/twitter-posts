export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export const CLEAR_SEARCH_TEXT = 'CLEAR_SEARCH_TEXT';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const SET_CATEGORY = 'SET_CATEGORY';
export const ADD_CATEGORY = 'ADD_CATEGORY';


export const setSearchText = text => ({
    type: SET_SEARCH_TEXT,
    payload: text,
});

export const clearSearchText = () => ({
    type: CLEAR_SEARCH_TEXT
});

export const getCategories = (tweets) => ({
    type: GET_CATEGORIES,
    payload: tweets
});

export const setCategory = (category) => ({
    type: SET_CATEGORY,
    payload: category
});

export const addCategory = (category) => ({
    type: ADD_CATEGORY,
    payload: category
});


