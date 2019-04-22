import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';

class Navigation extends Component {
    logout = () => {
        
    }
    state = {}
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="#">Post Board</Link>
                    </div>

                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><NavLink activeClassName="active" to="/" exact={true}>Home</NavLink></li>
                            <li><NavLink activeClassName="active" to="/posts" exact={true}>Posts</NavLink></li>
                            <li><NavLink activeClassName="active" to="/create">Add Post</NavLink></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><NavLink activeClassName="active" to="/login">Login</NavLink></li>
                            <li><NavLink activeClassName="active" to="/" onClick={this.logout}>Logout</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation;