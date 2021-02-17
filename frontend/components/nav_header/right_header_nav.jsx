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
                    <Link className="header-link" to="/">For Businesses!</Link>
                    <Link className="header-link" to="/">Write a Review</Link>
                </div>
                <div className="login-signup-buttons-container">
                    {/* <Link to="/login" className="login-button">Login</Link> */}
                    {currentUser ? <UserMedallion/> : loginSignup }
                    {/* <Link to="/signup" className="signup-clear">Signup</Link> */}
                </div>
            </div>
        )
    }
}

export default RightHeaderNav;