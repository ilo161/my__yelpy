import React from 'react';
import {Link} from 'react-router-dom';
// import { requestLogin } from '../../actions/session_actions';

import SignUpFormContainer from "../session_form/sign_up_form_container"
import LoginFormContainer from "../session_form/login_form_container"
import { requestLogin } from '../../actions/session_actions';
import  OrderInContainer  from "../nav_header/order_in_header_container";

// JumboTron
import GreetingJumboTronContainer from "./greeting_jumbotron_container"



class Greeting extends React.Component {

    constructor(props){
        super(props)


        //signLogin is an Array containing two Components
        // depending on which button the user clicks on triggers a render
        this.state = {
            signLogin: null,
            orderInNav: true
        }

    
    }

    switchRender(idx){
        this.setState({signLogin: idx })
    }

    componentDidMount(){

    }



    render() {

        
        const {currentUser, requestLogout, requestLogin, errors} = this.props;


        const signLoginArray = [<SignUpFormContainer/>, <LoginFormContainer/>];

        let listOErrors = [];

        if (errors.base){
            if (errors.base.length > 0){
                listOErrors = errors.base
            }
        }

        const sessionLinks = () => {
            return (
            <div className="session-links-container">
                {this.state.orderInNav ? <OrderInContainer/> : null}

                <p>In Greeting Component - Session</p>
                <p>{errors ? listOErrors[0] : null}</p>
                <nav className="login-signup">
                    <ul>
                        <li><Link to="/login">Login!</Link></li>
                        <li><Link to="/signup">Sign Up!</Link></li>
                        {/* <li> <button onClick={() => this.switchRender(1)}>Login!</button></li>
                        <li> <button onClick={() => this.switchRender(0)}>Sign UP</button></li> */}
                        <li> <button onClick={() => requestLogin({username: "DemoUser", password:"123456"}) }>Demo User - Login</button></li>
                    </ul>
                </nav>
                <div className="which-form">
                    {signLoginArray[this.state.signLogin]}
                </div>
                <GreetingJumboTronContainer/>
            </div>
            )
        }


        const personalGreeting = () => {
            return (
                <div className="personal-greeting-container">
                    <nav className="personal-greeting">
                        <p>In Greeting Component - Personal</p>
                        <ul>
                            <li> Welcome {currentUser.username}</li>
                            <li> <button onClick={requestLogout}>Logout!</button>
                            {currentUser.username}
                            </li>
                        </ul>
                    </nav>
                    <GreetingJumboTronContainer/>
                </div>
            )
        }
        return currentUser ? personalGreeting() : sessionLinks();
}
}
    



export default Greeting;