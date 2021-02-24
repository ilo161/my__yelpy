import React from 'react'
import {withRouter} from "react-router-dom"
import { Link } from 'react-router-dom';
import UserMedallion from "./user_medallion";

class RightHeaderNav extends React.Component {
    

    render() {
        const { currentUser } = this.props;

        const loginSignup = (<>
                    <button onClick={() => this.props.openModal("login")} className="login-button">Login</button>
                    <button onClick={() => this.props.openModal("signup")} className="signup-clear">Signup</button>
                        </>)

        return(
             <div className="right-header-nav">
                <div className="biz-review-nav-text">
                    {/* <span className="header-link">For Businesses!</span> */}
                    {/* <span className="header-link">Write a Review</span> */}
                </div>
                <div className="login-signup-buttons-container">
                    {currentUser ? <UserMedallion/> : loginSignup }
                </div>
            </div>
        )
    }
}

export default RightHeaderNav;