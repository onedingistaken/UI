import { FETCH_COMMENTS, ADD_COMMENT, DELETE_COMMENT, LIKE_COMMENT } from "../actions/comments";

const initialState = [];

export const commentsReducer = (state = initialState, action) => {
    // console.log(action); 
    let result = initialState;
    switch (action.type) {
        case FETCH_COMMENTS:
            result = [...action.json];
            break;

        case ADD_COMMENT:
            result = [...state, action.newComment];
            break;

        case DELETE_COMMENT:
            result = state.filter(c => c.id !== action.commentId);
            break;

        case LIKE_COMMENT:
            result = state.map(c => c.id === action.commentId ? (c.liked === true ? { ...c, liked: false } : { ...c, liked: true }) : c);
            break;

        default:
            result = state;
    }
    return result;
}