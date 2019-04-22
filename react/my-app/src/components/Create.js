import React, { Component } from 'react';
import PanelBox from './PanelBox';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts, addPost } from '../store/actions/posts';
import EmptyInput from './EmptyInput';

class Create extends Component {
    state = {
        post: {
            id: null,
            title: "",
            body: ""
        },
        warnings: {
            title: false,
            body: false
        }
    }
    componentDidMount() {
        if (!this.props.posts.length) {
            this.props.dispatch(fetchPosts());
        }
    }
    inputNewPost = (e) => {
        this.setState((prevState) => {
            return {
                post: {
                    ...prevState.post,
                    id: this.props.posts.slice(-1)[0].id + 1,
                    [e.target.name]: e.target.value
                }
            }
        })
        e.persist();
    }
    submitNewPost = (e) => {
        e.preventDefault();
        const warnings = {};
        // prevent empty submit for title
        if (!this.state.post.title) {
            warnings.title = true;
        } else {
            warnings.title = false;
        }
        // prevent empty submit for body
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
        // success case
        if (this.state.post.title && this.state.post.body) {
            this.props.dispatch(addPost(this.state.post));
            this.props.history.push("/posts");
        }
    }

    render() {
        const content = (
            <form onSubmit={this.submitNewPost}>
                <div className="form-group">
                    <label className="control-label">Post Title: &nbsp;</label><br />
                    <input className="form-control" type="text" palceholder="title" name="title"
                        onChange={this.inputNewPost} />
                    {
                        this.state.warnings.title && (
                            <EmptyInput target="Title" />
                        )
                    }
                </div>
                <div className="form-group">
                    <label className="control-label">Post Body: &nbsp;</label><br />
                    <textarea className="form-control" palceholder="body" name="body"
                        onChange={this.inputNewPost} />
                    {
                        this.state.warnings.body && (
                            <EmptyInput target="Content" />
                        )
                    }
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
        return <PanelBox heading={"Create"} content={content} />
    }
}

function map2Props(store) {
    return { posts: store.posts }
}

export default connect(map2Props)(withRouter(Create));