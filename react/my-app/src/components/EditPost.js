import React, { Component } from 'react';

class EditPost extends Component {
    state = {
        post: {
            userId: this.props.post.userId,
            id: this.props.post.userId,
            title: this.props.post.title,
            body: this.props.post.body
        }
    }
    inputEditPost = (e) => {
        this.setState((prevState) => {
            return {
                post: {
                    ...prevState.post,
                    [e.target.name]: e.target.value
                }
            }
        })
        e.persist();
    }
    submitEditPost = (e) => {
        e.preventDefault();
        if (this.state.post.title && this.state.post.body) {
            this.props.editPost(this.state.post);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitEditPost}>
                    title: <input type="text" value={this.state.post.title} name="title" onChange={this.inputEditPost} />&nbsp;
                    post: <input type="text" value={this.state.post.body} name="body" onChange={this.inputEditPost} />&nbsp;
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default EditPost;