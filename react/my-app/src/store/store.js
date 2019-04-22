import { createStore, combineReducers } from 'redux';
import { postsReducer } from './reducers/posts';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { commentsReducer } from './reducers/comments';

// const store = createStore(postsReducer, applyMiddleware(thunk));
const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;