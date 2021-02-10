import React from 'react';
import { Link } from "react-router-dom";
 import { withRouter } from 'react-router';


class SignUpForm extends React.Component {
    
    constructor(props){
        super(props)

        this.state = this.props.user;

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){

    }

    handleSubmit(e){
        e.preventDefault();

        const url = this.props.location.pathname;
        const parts = url.split("/")

        if (!parts.includes("signup")){
            this.props.action(this.state).then(() => this.props.closeModal());
        } else {
            this.props.action(this.state).then(this.props.history.push("/"));
        }
    }

    update(field){
        return e => this.setState({ [field]: e.target.value})
    }

    render() {
        const {isModal, closeModalDiv, renderLoginForm} = this.props;
        //  const closeModalDiv = (<div onClick={() => closeModal()} className="exit-x-box">
        //                           <div className="exit-x-author">
        //                           {exSym}
        //                           </div>
        //                         </div>)

        return (

            <div className="login-form-modal-container max-w-400">
                {isModal ? closeModalDiv : null}

                <form className="login-form-modal" onSubmit={this.handleSubmit}>
                    <div className="login-form-text-container">                        
                            <p className="top-login-form-text bold">Sign Up for Yelp</p>
                        <div className="mt-8 legal-font">
                            <p>By continuing in, you agree to Yelp’s Terms of Service <br/>and Privacy Policy.</p>
                        </div>
                    </div>

                     <div className="button-logins-box">
                        {/* <div className="block"> */}
                        <button type="text" disabled={true} className="facebook-button lb block-99">Continue with Facebook</button> 
                        {/* </div> */}
                        <button type="text" disabled={true} className="google-button lb block-99">Continue with Google</button>
                        <button type="text" disabled={true} className="apple-button lb block-99">Continue with Apple</button>
                    </div>
                    
                    <div className="input-row">
                     <label className="mr-5">
                        <input 
                        className="credentials-input"
                        type="text"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={this.update("firstName")}
                        />
                    </label>

                    <label className="">
                        <input 
                        className="credentials-input"
                        type="text"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={this.update("lastName")}
                        />
                    </label>
                    </div>
                    
                    <label className="">
                        <input 
                        className="credentials-input"
                        type="text"
                        value={this.state.username}
                        placeholder="Username"
                        onChange={this.update("username")}
                        />    
                    </label>

                    <label className="">
                        <input 
                        className="credentials-input"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.update("password")}
                        />
                    </label>
                    
                    {/* Email */}
                    <label className="">
                        <input 
                        className="credentials-input"
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.update("email")}
                        />
                    </label>
                    

                    <label className="">
                        <input
                        className="credentials-input"
                        type="text"
                        placeholder="Zip Code"
                        value={this.state.zipCode}
                        onChange={this.update("zipCode")}
                        />
                    </label>

                    <button className="red-login-button lb block-99" >Sign Up</button>

                    <div className="sub-text-box">
                        <p className="small-text">Already a Member? 
                        {isModal ? <span onClick={isModal ? () => renderLoginForm() : null}
                         className="sign-up-link"> Login!</span>  
                         : 
                         <Link to="/login" ><span className="sign-up-link"> Login!</span> </Link>}  </p>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(SignUpForm);