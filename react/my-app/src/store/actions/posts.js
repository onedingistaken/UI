export const DELETE_POST = "DELETE_POST";
export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId
    }
}

export const LIKE_POST = "LIKE_POST";
export const likePost = (postId) => {
    return {
        type: LIKE_POST,
        postId
    }
}

export const EDIT_POST = "EDIT_PORT";
export const editPost = (editedPost) => {
    return {
        type: EDIT_POST,
        editedPost
    }
}

export const ADD_POST = "ADD_POST";
export const addPost = (newPost) => {
    return {
        type: ADD_POST,
        newPost
    }
}

export const FETCH_POSTS = "FETCH_POSTS";
export const fetchPosts = () => {
    return (dispatch) => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(data => data.json())
            .then(json => {
                dispatch({
                    type: FETCH_POSTS,
                    json
                });
                return json;
            });
    }
}