import React, { Component } from 'react';
import PanelBox from './PanelBox';
import { Link } from 'react-router-dom';
import '../App.css';
import { connect } from 'react-redux';
import { deletePost, fetchPosts, likePost, editPost } from '../store/actions/posts';
import EditPost from './EditPost';

class Alert extends Component {
    render() {
        let children = this.props.children;
        // children = 'hello world'
    }
}

class Posts extends Component {
    shouldComponentUpdate(newProps, newState) {
        function shadowCompare (a, b) {
            for (let key of Object.keys(a)) {
                if (!(key in b)) {
                    return false
                }
                if (a[key] !== b[key]) {
                    return false;
                }
            }
            for (let key of Object.keys(b)) {
                if (!(key in a)) {
                    return false
                }
            }
            return true;
        }
        if (shadowCompare(this.props, newProps) && shadowCompare(this.state, newState)) {
            return false
        }
        return true;
    }
    render() {
        const context = <div>Hello<br/><input /></div>;
        return <Alert context={context}> world</Alert>
    }
}

function map2Props(store) {
    return { posts: store.posts }
}

export default connect(map2Props)(Posts);
export default withRouter(Posts);