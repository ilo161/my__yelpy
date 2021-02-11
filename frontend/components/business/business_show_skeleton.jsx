import React from "react";
import BusinessHeaderBox from "./business_header_box";
import SearchCityNavContainer from "../search/search_city_nav_container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import ReviewIndexItem from "../reviews/review_index_item"
import ReviewIndexItemContainer from "../reviews/review_index_item_container";
import BusinessInfoBox from "./business_info_box";
import RightHeaderNavContainer from "../nav_header/right_header_nav_container"
import SearchNavDropDownsContainer from "../nav_header/search_nav_dropdowns_container"
import TripleNav from "../nav_header/triple_nav_components"

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
        let allPhotosImg;

        if (business){
            if (business.reviews){
                allReviews = business.reviews.map((review) => {
                    return <ReviewIndexItemContainer key={review.id} review={review} /> 
                })
            }
            //Prepare slideShow images for Resizing
            if (business.photos){
                allPhotosImg = business.photos.map((image) => {
                    return <img className="show-photo-scroller-item" src={image.photoUrl}></img>
                })
                allPhotosImg = allPhotosImg.slice(0,4)
            }
        }



        
        const arrowDownIcon = <FontAwesomeIcon icon={faAngleDown}/>

        return (
            <div className="business-show-container">
                <TripleNav/>
                {/* <div className="top-show-nav"> */}
                    {/* <ul className="flex-row-start"> */}
                        {/* Items are flexxed */}
                        {/* <div className="icon-box-nav"> */}
                            {/* <Link to="/" ><img src={window.yelp_white_sm} width="80vw" height="80vh"></img></Link> */}
                        {/* </div> */}
                        {/* <SearchCityNavContainer/> */}
                        {/* <RightHeaderNavContainer/> */}
                        {/* End Flexx */}
                    {/* </ul> */}
                    {/* <SearchNavDropDownsContainer/> */}
                    
                {/* </div>  */}
                {/* PhotoScroller HERE */}
                <div className="show-photo-scroller flex-row-start">
                    {business ? allPhotosImg : null }
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
                    {/* Business Informationals */}
                    <section className="show-right-column">
                        { business ? <BusinessInfoBox business={business} /> : null }
                    </section>


                </div>
            </div>
        )
    }


}

export default BusinessShowSkeleton;