import React, { Component } from 'react';
import EmptyInput from './EmptyInput';

class EditPost extends Component {
    state = {
        post: this.props.post,
        warnings: {
            title: false,
            body: false
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
        const warnings = {};
        if (!this.state.post.title) {
            warnings.title = true;
        } else {
            warnings.title = false;
        }
        if (!this.state.post.body) {
            warnings.body = true;
        } else {
            warnings.body = false;
        }
        this.setState((prevState) => {
            return {
                warnings: {
                    ...prevState.warnings,
                    ...warnings
                }
            }
        })
        e.preventDefault();
        if (this.state.post.title && this.state.post.body) {
            this.props.editPost(this.state.post);
        }
    }
    render() {
        // const post = this.props.post;
        return (
            <div>
                <form onSubmit={this.submitEditPost}>
                    <span className="form-inline">
                        <div className="form-group">
                            <label className="control-label">Title:&nbsp;</label>
                            <input type="text" className="form-control" value={this.state.post.title} name="title" onChange={this.inputEditPost} />&emsp;
                        </div>
                        <div className="form-group">
                            <label className="control-label">Content:&nbsp;</label>
                            <input type="text" className="form-control" value={this.state.post.body} name="body" onChange={this.inputEditPost} />&emsp;
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success btn-sm">Submit</button>
                        </div>
                    </span>
                    {
                        this.state.warnings.title && (
                            <EmptyInput target="Title" />
                        )
                    }
                    {
                        this.state.warnings.body && (
                            <EmptyInput target="Content" />
                        )
                    }

                </form>
            </div>
        )
    }
}

export default EditPost;