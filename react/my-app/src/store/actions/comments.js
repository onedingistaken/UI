export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const fetchComments = () => {
    return (dispatch) => {
        return fetch("https://jsonplaceholder.typicode.com/comments")
            .then(data => data.json())
            .then(json => {
                dispatch({
                    type: FETCH_COMMENTS,
                    json
                });
                return json;
            });
    }
}

export const ADD_COMMENT = "ADD_COMMENT";
export const addComment = (newComment) => {
    return {
        type: ADD_COMMENT,
        newComment
    }
}

export const DELETE_COMMENT = "DELETE_COMMENT";
export const deleteComment = (commentId) => {
    return {
        type: DELETE_COMMENT,
        commentId
    }
}

export const LIKE_COMMENT = "LIKE_COMMENT";
export const likeComment = (commentId) => {
    return {
        type: LIKE_COMMENT,
        commentId
    }
}