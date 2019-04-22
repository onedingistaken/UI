import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import Create from './components/Create';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Navigation from './components/Navigation';
import Comments from './components/Comments';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import checkLoginStatus from './services/Auth';

class App extends Component {
  state = {
    // postCount: this.state.posts.slice(-1)[0].id,
    loginStatus: checkLoginStatus()
  }
  // showThreadOnClick = (postId) => {
  //   console.log("Show Comments for " + postId);
  // }
  // createNewPostOnClick = (newPost) => {
  //   this.setState((prevState) => {
  //     // console.log(prevState);
  //     return {
  //       posts: [
  //         ...prevState.posts,
  //         newPost
  //       ]
  //     }
  //   });
  // }
  loginOnClick = () => {
    // console.log(this.state.loginStatus);
    this.setState(() => {
      return {
        loginStatus: true
      }
    })
  }
  render() {
    return (
      <div className="container">
        <Navigation loginStatus={this.state.loginStatus} />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <PrivateRoute loginStatus={this.state.loginStatus} path="/posts/:postId" render={() => {
            return <Comments />
          }} />
          <PrivateRoute loginStatus={this.state.loginStatus} path="/posts" render={() => {
            return <Posts />
          }} exact={true} />
          <PrivateRoute loginStatus={this.state.loginStatus} path="/create" render={() => {
            return <Create />
          }} />
          <Route path="/login" render={() => {
            return <Login loginOnClick={this.loginOnClick} loginStatus={this.state.loginStatus} />
          }} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
