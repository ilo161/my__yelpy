import React from 'react';
import { Link, Route, Redirect, withRouter } from 'react-router';


class LoginForm extends React.Component {
    constructor(props){
        super(props)

        this.state = this.props.user;

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){

        // this.setState(this.props.user)

    }

    handleSubmit(e){
        e.preventDefault();

    this.props.action(this.state).then(this.props.history.push("/"));

    // this.props.action(this.state).then(<Route path="/login" render={() => <Redirect to="/" />} />);
    }


    update(field){
        return e => this.setState({ [field]: e.target.value})
    }

    render() {

        return (
            <div className="login-form">
                <form onSubmit={this.handleSubmit}>
                    <p className="top-login-form-text">Log in to Yelp</p>
                    <p className="sec-header-login-form">New to Yelp? Sign up</p> {/* add link here later */}
                    <p>By logging in, you agree to Yelp’s Terms of Service and <br/>Privacy Policy.</p>

                    <div className="button-logins-box">
                        <button type="text" disabled="true" className="facebook-button lb">Continue with Facebook</button> <br/>
                        <button type="text" disabled="true" className="google-button lb">Continue with Google</button> <br/>
                        <button type="text" disabled="true" className="apple-button lb">Continue with Apple</button> <br/>
                    </div>
                    <br/>
                    <label>
                        <input 
                        type="text"
                        value={this.state.username}
                        placeholder="Email"
                        onChange={this.update("username")}
                        />    
                    </label>
                    <br/>

                    <label>
                        <input 
                        type="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.update("password")}
                        />
                    </label>
                    <br/>
                    <p className="forgot-password-small">Forgot Password?</p>

                    <button className="red-login-button lb" >Login</button>
                    <div className="sub-text-box">
                        <p className="small-text">New to Yelp? <span className="sign-up-link">Sign up!</span></p>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(LoginForm);