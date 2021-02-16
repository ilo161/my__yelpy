import React from 'react'
import {withRouter} from "react-router-dom";
import { Link } from 'react-router-dom';

class TransparentNav extends React.Component {


    render() {

        return(
            <div className="trans-nav-container flex-row-start">
                <ul className="header-nav flex-row-start">
                    <a className="nav-header-link">Write a Review</a>
                    <a className="nav-header-link">Events</a>
                    <a className="nav-header-link">Talk</a>
                </ul>
                {/* <a className="nav-header-link mr-12"> */}
                {/* <a className="nav-header-link signup-trans"> */}
                <Link className="nav-header-link mr-12" to="/login">Log In</Link>
                <Link className="nav-header-link signup-trans" to="/signup">Sign Up</Link>
            </div>
        )
    }
}

export default TransparentNav;