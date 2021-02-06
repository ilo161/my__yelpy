import React from 'react';
import {withRouter} from "react-router-dom";
import SearchCityNavContainer from "../search/search_city_nav_container"

class InnerJumboTron extends React.Component {


    render() {

        return(
            <div className="inner-jumbotron-container flex-col-row-center">
                <img className="yelp-static inner-jumbotron" src={"https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/logos/yelp-logo-clear-clean.png"}></img>
                <SearchCityNavContainer isSplash={true}/>
                {/* <ul className="header-nav flex-row-start">
                    <a className="nav-header-link">Write a Review</a>
                    <a className="nav-header-link">Events</a>
                    <a className="nav-header-link">Talk</a>
                </ul>
                <a className="nav-header-link mr-12">Log In</a>
                <a className="nav-header-link signup-trans">Sign Up</a> */}
            </div>
        )
    }
}

export default InnerJumboTron;