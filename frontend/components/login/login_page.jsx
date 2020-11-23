import React from 'react';
import LoginFormContainer from '../session_form/login_form_container'


class LoginPage extends React.Component {
    constructor(props){
        super(props)

    }


    render() {

        return (
            <div className="login-page-container">
                <nav className="red-yelp-stripe">
                    <img className="center-nav-image" src={window.yelp_red_sm} alt="Yelp Icon"></img>
                </nav>
                <div className="login-left-image-right">
                    <div className="login-slash-login">
                        <LoginFormContainer/>
                    </div>
                    <div className="image-slash-login">
                        <img className="fun-login-page-img" src={window.signup_illustration} alt="Red Carpet Photo"></img>
                    </div>
                </div>

            </div>
        )
    }
}

export default LoginPage;