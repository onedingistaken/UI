import React, { Component } from 'react';
import PanelBox from './PanelBox';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../store/actions/posts';
import { fetchComments, addComment, deleteComment, likeComment } from '../store/actions/comments';
import EmptyInput from './EmptyInput';

class Comments extends Component {
    state = {
        comment: {
            postId: null,
            id: null,
            name: "",
            email: "",
            body: ""
        },
        warnings: {
            name: false,
            email: false,
            body: false
        }
    }
    componentDidMount() {
        if (!this.props.posts.length) {
            this.props.dispatch(fetchPosts());
        }
        if (!this.props.comments.length) {
            this.props.dispatch(fetchComments());
        }
    }
    navigate2Posts = () => {
        // console.log(this.props.posts);
        this.props.history.push("/posts");
    }
    inputNewComment = (e) => {
        this.setState((prevState) => {
            return {
                comment: {
                    ...prevState.comment,
                    postId: this.props.match.params.postId,
                    id: this.props.comments.slice(-1)[0].id + 1,
                    [e.target.name]: e.target.value
                }
            }
        })
        e.persist();
    }
    submitNewComment = (e) => {
        e.preventDefault();
        // console.log(this.state.comment);
        const warnings = {};
        if (!this.state.comment.name) {
            warnings.name = true;
        } else {
            warnings.name = false;
        }
        if (!this.state.comment.email) {
            warnings.email = true;
        } else {
            warnings.email = false;
        }
        if (!this.state.comment.body) {
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
        if (this.state.comment.name && this.state.comment.email && this.state.comment.body) {
            this.props.dispatch(addComment(this.state.comment));
            this.setState({
                comment: {
                    postId: null,
                    id: null,
                    name: "",
                    email: "",
                    body: ""
                }
            });
            console.log(this.state.comment);
            this.props.history.push("/posts/" + this.props.match.params.postId)
        }
    }
    deleteComment = (commentId) => {
        this.props.dispatch(deleteComment(commentId))
    }
    likeComment = (commentId) => {
        this.props.dispatch(likeComment(commentId))
    }
    render() {
        const pId = this.props.match.params.postId;
        const post = this.props.posts.filter(p => ("" + p.id) === pId);
        const comments = this.props.comments.filter(c => ("" + c.postId) === pId);
        const content = (
            <div>
                {
                    post && post.map((item, index) => (
                        <span key={index}>
                            <h5>{item.title}</h5>
                            <p>{item.body}</p>
                            <div className="btn-toolbar">
                                <button className="btn btn-primary btn-sm" onClick={this.navigate2Posts}>Back to Posts</button>
                            </div>
                            <hr />
                            {/* add a new comment */}
                            <h5>Add Comment:</h5>
                            <form onSubmit={this.submitNewComment}>
                                <span className="form-inline">
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Your Name.." name="name" value={this.state.comment.name}
                                            onChange={this.inputNewComment} />
                                    </div>&emsp;
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Your Email.." name="email" value={this.state.comment.email}
                                            onChange={this.inputNewComment} />
                                    </div>&emsp;
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Your Comment.." name="body" value={this.state.comment.body}
                                            onChange={this.inputNewComment} />
                                    </div>&emsp;
                                    <button type="submit" className="btn btn-success btn-sm">Submit</button>
                                </span>
                            </form>
                            {
                                this.state.warnings.name && (
                                    <EmptyInput target="Name" />
                                )
                            }
                            {
                                this.state.warnings.email && (
                                    <EmptyInput target="Email" />
                                )
                            }
                            {
                                this.state.warnings.body && (
                                    <EmptyInput target="Comment" />
                                )
                            }
                            <hr />
                            {/* all comments for the post */}
                            <div>
                                {
                                    comments && comments.map((item, index) => (
                                        <span key={item.id}>
                                            <span className="bs-callout bs-callout-info">
                                                <h6>{item.name + " | " + item.email.toString().toLowerCase()}</h6>
                                                <p>{item.body}</p>
                                            </span>
                                            <div className="btn-toolbar">
                                                <button className="btn btn-default btn-xs" onClick={() => { this.deleteComment(item.id) }}>Delete</button>
                                                <button className="btn btn-default btn-xs" onClick={() => { this.likeComment(item.id) }}>{item.liked === true ? "Liked ❤" : "Like"}</button>
                                            </div>
                                            <hr />
                                        </span>
                                    ))
                                }
                            </div>
                        </span>
                    ))
                }
            </div>
        )
        return <PanelBox heading={"Post #" + ("000" + pId).slice(-3) + " All Comments"} content={content} />
    }
}

function map2Props(store) {
    return {
        posts: store.posts,
        comments: store.comments
    }
}

export default connect(map2Props)(withRouter(Comments));