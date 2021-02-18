import React from 'react'
import {withRouter} from "react-router-dom";
import { Link } from 'react-router-dom';
import UserMedallion from "./user_medallion"

class TransparentNav extends React.Component {
    

    render() {
        const { currentUser } = this.props;

        const loginSignup = <>
            <Link className="nav-header-link mr-12" to="/login">Log In</Link> 
            <Link className="nav-header-link signup-trans" to="/signup">Sign Up</Link>
        </>

        return(
            <div className="trans-nav-container flex-row-start">
                <ul className="header-nav flex-row-start">
                    <a className="nav-header-link">Write a Review</a>
                    <a className="nav-header-link">Events</a>
                    <a className="nav-header-link">Talk</a>
                </ul>
               
                {currentUser ? <UserMedallion/> : loginSignup }
                
                
            </div>
        )
    }
}

export default TransparentNav;