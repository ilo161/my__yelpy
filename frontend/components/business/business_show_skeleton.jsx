import React from "react";
import BusinessHeaderBox from "./business_header_box"
import SearchCityNavContainer from "../search/search_city_nav_container"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ReviewIndexItem from "../reviews/review_index_item"

class BusinessShowSkeleton extends React.Component {
    constructor(props){
        super(props)



    }

    componentDidMount() {
        this.props.requestBusinesses().then( () => this.props.requestBusiness(this.props.id));

        
        // this.props.requestBusiness(this.props.id)
    }

    componentDidUpdate(){

    }

    render() {
        
        const { business } = this.props;

        let allReviews = [];

        if (business){
            allReviews = business.reviews.map((review) => {
                return <ReviewIndexItem review={review} key={review.id}/> 
            })
        }

        
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
                            {/* Auto Services */}
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
                <div className="show-photo-scroller">

                    {/* <img src={business ? business.photoUrl : null}></img> */}
                </div>
                <div className="business-show-information-container">
                    {/* Flexx Start */}
                    <section className="show-left-column flex-col">
                        {/* Flex Column Start */}
                        { business ? <BusinessHeaderBox business={business} /> : null }

                        <section className="show-divider-section covid">
                            <p> I am text</p>
                        </section>
                        <section className="show-divider-section on-the-menu">
                            <p>On the Menu</p>
                        </section>
                        {/* Website Menu Component */}
                        <section className="show-divider-section website-menu">
                            <p>Website menu</p>
                            <p>will contain menu links from the owner</p>
                        </section>
                        {/* Location and Hours COMPONENT HERE!!! WITH MAP! */}
                        <section className="show-divider-section website-menu">
                            <p>Location Hours</p>
                        </section>
                        {/* Amenitites and More */}
                        <section className="show-divider-section website-menu">
                            <p>Amenities and More</p>
                        </section>
                        {/* Ask the community */}
                        <section className="show-divider-section website-menu">
                            <p>Ask the Community</p>
                        </section>
                        {/* Recommended Reviews */}
                        <section className="show-divider-section website-menu">
                            <p>Recommended Reviews</p>
                        </section>
                        { business ? allReviews : null}
                        {/* {business ? <ReviewIndexItem business={business} key={business.id}/> : "banana"} */}
                        {/* Flex Column end below */}
                    </section>
                    
                    {/* Flexx End ^^ */}
                    <section className="show-right-column">
                        <div className="order-delivery-takeout">
                            <p>Order Deliver - Takeout</p>


                        </div>

                    </section>


                </div>
            </div>
        )
    }


}

export default BusinessShowSkeleton;