import React from 'react'
import {withRouter} from "react-router-dom"
import { Link } from 'react-router-dom';

class RightHeaderNav extends React.Component {


    render() {

        return(
             <div className="right-header-nav">
                <div className="biz-review-nav-text">
                    <Link className="header-link" to="/">For Businesses!</Link>
                    <Link className="header-link" to="/">Write a Review</Link>
                </div>
                <div className="login-signup-buttons-container">
                    <Link to="/login" className="login-button">Login</Link>
                    <Link to="/signup" className="signup-clear">Signup</Link>
                </div>
            </div>
        )
    }
}

export default RightHeaderNav;