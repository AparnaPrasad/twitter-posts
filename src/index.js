import AppContainer from './containers/App'
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import * as Reducers from './reducers';
import './index.scss';
import './styles/bootstrap.scss';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    tweets: Reducers.TweetsReducer,
    filters: Reducers.TweetFiltersReducer,
    alerts: Reducers.AlertReducer,
    view: Reducers.TweetFormatterReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>
    , document.getElementById('root')
);
