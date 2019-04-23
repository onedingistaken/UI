import React, { Component } from 'react';
import PanelBox from './PanelBox';
import { Link } from 'react-router-dom';
import '../App.css';
import { connect } from 'react-redux';
import { deletePost, fetchPosts, likePost, editPost } from '../store/actions/posts';
import EditPost from './EditPost';

class Posts extends Component {
    state = {
        editPostStatus: {}
    }
    componentDidMount() {
        if (!this.props.posts.length) {
            this.props.dispatch(fetchPosts());
        }
    }
    deletePost = (postId) => {
        this.props.dispatch(deletePost(postId));
    }
    likePost = (postId) => {
        this.props.dispatch(likePost(postId));
    }
    editPostStatue = (postId) => {
        this.setState((prevState) => {
            return {
                editPostStatus: {
                    ...prevState.editPostStatus,
                    [postId]: !prevState.editPostStatus[postId]
                }
            }
        })
        // console.log(this.state.editPostStatus);
    }
    editPost = (editedPost) => {
        this.editPostStatue(editedPost.id);
        this.props.dispatch(editPost(editedPost));
    }
    // showThreadOnClick = (postId) => {
    // }
    render() {
        const content =
            (
                this.props.posts && this.props.posts.map((item, index) => (
                    <span key={item.id}>
                        <h5>{item.title}</h5>
                        <p>{item.body}</p>
                        <div className="btn-toolbar">
                            {/* <button className="btn btn-primary">Like</button> */}
                            <button className="btn btn-danger btn-sm" onClick={() => { this.deletePost(item.id) }}>Delete</button>
                            <button className="btn btn-primary btn-sm" onClick={() => this.editPostStatue(item.id)}>Edit</button>
                            <button className="btn btn-success btn-sm" onClick={() => { this.likePost(item.id) }}>{item.liked === true ? "Liked ❤" : "Like"}</button>
                            {/* <button className="btn btn-primary btn-sm" onClick={() => { this.showThreadOnClick(item.id) }}> */}
                            <button className="btn btn-primary btn-sm">
                                <Link to={"/posts/" + item.id} className="linkTag">Show Comments</Link>
                            </button>
                        </div>
                        {
                            this.state.editPostStatus[item.id] && (
                                <div>
                                    <br />
                                    <EditPost post={item} editPost={this.editPost} />
                                </div>
                            )
                        }
                        <hr />
                    </span>
                ))
            )
        return <PanelBox heading={"Posts"} content={content} />
    }
}

function map2Props(store) {
    return { posts: store.posts }
}

export default connect(map2Props)(Posts);