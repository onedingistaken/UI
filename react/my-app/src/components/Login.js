import React, { Component } from 'react';
import PanelBox from './PanelBox';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    loginOnClick = (e) => {
        e.preventDefault();
        // console.log(this.state);
        if (this.state.email === "admin" && this.state.password === "admin") {
            this.props.loginOnClick(this.state);
            this.props.history.push("/posts");
        } else {
            alert("invalid credentials!")
        }
    }
    inputOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        // e.persist();
    }
    render() {
        const content = (
            <form>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"
                        name="email" onChange={this.inputOnChange} value={this.state.email} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                        name="password" onChange={this.inputOnChange} value={this.state.password} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.loginOnClick}>Submit</button>
            </form>
        )
        return (
            <PanelBox heading={"Login"} content={content} />
        )
    }
}

export default withRouter(Login);