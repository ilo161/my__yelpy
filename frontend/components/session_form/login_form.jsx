import React from 'react';
import { Link } from "react-router-dom";
import { Route, Redirect, withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { closeModal } from '../../actions/modal_actions';


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
        const {isModal, openModal, closeModal, closeModalDiv, renderSignForm} = this.props;
        const pathToSignUp = (<Link to="/signup" />)
        // const exSym = <FontAwesomeIcon className="exit-x-content" icon={faTimes} size="1x" />
        // const closeModalDiv = (<div onClick={() => closeModal()} className="exit-x-box">
        //                           <div className="exit-x-author">
        //                           {exSym}
        //                           </div>
        //                         </div>)
        debugger
        return (
            // <div className={this.props.isModal ? "login-form-modal-container" : "login-form"}>
            //     <form className={this.props.isModal ? "login-form-modal" : null} onSubmit={this.handleSubmit}>
            <div className="login-form-modal-container max-w-400">
                {/* {closeModalDiv} */}
                {isModal ? closeModalDiv : null}
                <form className="login-form-modal" onSubmit={this.handleSubmit}>
                    <div className="login-form-text-container">
                        
                            <p className="top-login-form-text">Log in to Yelp</p>
                        <div className="mt-8">
                            <p className="sec-header-login-form">New to Yelp? <span onClick={isModal ? () => renderSignForm() : null } className="sign-up-link">Sign up!</span></p>
                        </div>
                        <div className="mt-8">
                            <p>By logging in, you agree to Yelp’s Terms of Service and Privacy Policy.</p>
                        </div>
                    </div>
                    <div className="button-logins-box">
                        {/* <div className="block"> */}
                        <button type="text" disabled={true} className="facebook-button lb block-99">Continue with Facebook</button> 
                        {/* </div> */}
                        <button type="text" disabled={true} className="google-button lb block-99">Continue with Google</button>
                        <button type="text" disabled={true} className="apple-button lb block-99">Continue with Apple</button>
                    </div>

                    <div className="hr-with-text">
                        <p className="hr-text" >or</p>
                    </div>

                    <label className="block-99">
                        <input 
                        className="credentials-input"
                        type="text"
                        value={this.state.username}
                        placeholder="Email"
                        onChange={this.update("username")}
                        />    
                    </label>


                    <label className="block-99">
                        <input 
                        className="credentials-input"
                        type="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.update("password")}
                        />
                    </label>

                    <p className="forgot-password-small">Forgot Password?</p>

                    <button className="red-login-button lb block-99" >Login</button>
                    <div className="sub-text-box">
                        <p className="small-text">New to Yelp? 
                        {isModal ? <span onClick={isModal ? () => renderSignForm() : null}
                         className="sign-up-link"> Sign up!</span>  
                         : 
                         <Link to="/signup" ><span className="sign-up-link"> Sign up!</span> </Link>}  </p>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(LoginForm);