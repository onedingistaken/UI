import { DELETE_POST, LIKE_POST, EDIT_POST, ADD_POST, FETCH_POSTS } from '../actions/posts';

const initialState = [];

export const postsReducer = (state = initialState, action) => {
    // console.log(action);
    let result = initialState;
    switch (action.type) {
        case FETCH_POSTS:
            result = [...action.json];
            break;

        case DELETE_POST:
            result = state.filter(p => p.id !== action.postId);
            break;

        case LIKE_POST:
            result = state.map(p => p.id === action.postId ? (p.liked === true ? { ...p, liked: false } : { ...p, liked: true }) : p);
            break;

        case EDIT_POST:
            result = state.map(p => p.id === action.editedPost.id ? { ...p, ...action.editedPost } : p)
            break;

        case ADD_POST:
            result = [...state, action.newPost];
            break;

        default:
            result = state;
    }
    return result;
}