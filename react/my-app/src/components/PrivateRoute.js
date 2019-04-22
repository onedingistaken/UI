import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
    render() {
        let content =  <Redirect to="/" />;
            if (this.props.loginStatus) {
                content = <Route {...this.props} />;
            }
        return (
            <span>{content}</span>
        )
    }
}

export default PrivateRoute;