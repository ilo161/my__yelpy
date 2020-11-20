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
                    <img className="center-nav-image" src="assets/yelp_icon_red.jpg" alt="Yelp Icon"></img>
                </nav>
                <div className="login-left-image-right">
                    <div className="login-slash-login">
                        <LoginFormContainer/>
                    </div>
                    <div className="image-slash-login">
                        <img className="fun-login-page-img" src="assets/signup_illustration.png" alt="Red Carpet Photo"></img>
                    </div>
                </div>

            </div>
        )
    }
}

export default LoginPage;