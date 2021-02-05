import React from 'react'
import {withRouter} from "react-router-dom"

class InnerJumboTron extends React.Component {


    render() {

        return(
            <div className="inner-jumbotron-container flex-col-row-center">
                <ul className="header-nav flex-row-start">
                    <a className="nav-header-link">Write a Review</a>
                    <a className="nav-header-link">Events</a>
                    <a className="nav-header-link">Talk</a>
                </ul>
                <a className="nav-header-link mr-12">Log In</a>
                <a className="nav-header-link signup-trans">Sign Up</a>
            </div>
        )
    }
}

export default InnerJumboTron;