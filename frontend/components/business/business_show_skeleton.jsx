import React from "react";
import BusinessHeaderBox from "./business_header_box"
import SearchCityNavContainer from "../search/search_city_nav_container"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class BusinessShowSkeleton extends React.Component {
    constructor(props){
        super(props)

        // this.state = this.props.business;

    }

    componentDidMount() {
        this.props.requestBusinesses().then( () => this.props.requestBusiness(this.props.id));
        
        // this.props.requestBusiness(this.props.id)
    }

    componentDidUpdate(){

    }

    render() {
        const { business } = this.props;
        debugger
        const arrowDownIcon = <FontAwesomeIcon icon={faAngleDown}/>

        return (
            <div className="business-show-container">
                <div className="top-show-nav">
                    <ul className="flex-row-start">
                        {/* Items are flexxed */}
                        <div className="icon-box-nav">
                            <img src={window.yelp_white_sm} width="80vw" height="80vh"></img>
                        </div>
                        <SearchCityNavContainer/>
                        <div className="biz-review-nav-text">
                            <Link className="header-link" to="/">For Businesses!</Link>
                            <Link className="header-link" to="/">Write a Review</Link>
                        </div>
                        <div className="login-signup-buttons-container">
                            <Link to="/login" className="login-button">Login</Link>
                            <Link to="/signup" className="signup-clear">Signup</Link>
                        </div>
                        {/* End Flexx */}
                    </ul>
                    <div className="search-nav-dropdowns-container">
                        <ul className="flex-row-start">
                            <div className="invisidiv-nav"></div>

                            <nav className="one-button-container">
                                <Link to="/" className="search-nav-dropdowns">Restaurants</Link>
                                {arrowDownIcon}
                            </nav>  
                            {/* Home Services */}
                            <nav className="one-button-container">
                                <Link to="/" className="search-nav-dropdowns">Home Services</Link>
                                {arrowDownIcon}
                            </nav>
                            <nav className="one-button-container">
                            <Link to="/" className="search-nav-dropdowns">Auto Services</Link>
                                {arrowDownIcon}
                            </nav>    
                            <nav className="one-button-container">
                                <Link to="/" className="search-nav-dropdowns">More</Link>
                                {arrowDownIcon}
                            </nav>  

                        </ul>
                    </div>
                </div> 
                {/* PhotoScroller HERE */}
                <div className="show-photo-scroller"></div>
                <div className="business-show-information-container">
                    {business ? <BusinessHeaderBox business={business} /> : null }


                </div>
            </div>
        )
    }


}

export default BusinessShowSkeleton;