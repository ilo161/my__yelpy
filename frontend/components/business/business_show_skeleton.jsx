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
import MenuPhotos from "./menu_photos"
import ResultsMap from "../map/results_map"

class BusinessShowSkeleton extends React.Component {
    constructor(props){
        super(props)



    }

    componentDidMount() {
        this.props.requestBusiness(this.props.id)
        // this.props.requestBusinesses().then( () => this.props.requestBusiness(this.props.id));

        
        // this.props.requestBusiness(this.props.id)
    }

    componentDidUpdate(){

    }

    render() {
        
        const { business, menuItems } = this.props;
        

        let allReviews = [];
        let allPhotosImg;
        let menuPhotoScroller;
        let cityStZip;
        let storeHours;

        const generateAddressString = () => {
            let addressString = ""

            addressString += business.city + ", " 
            addressString += business.state + ", "
            addressString += business.zip_code.toString()

            return addressString
        }

        const queryGoogleMaps = () => {
            let url = "https://www.google.com/maps/place/";
            let address = business.address;
            let addressPartsWithPlus = address.split(" ").join("+") + "+";


            let city = business.city + "+";
            let state = business.state + "+";
            let zipCode = business.zip_code + "/";

            url += addressPartsWithPlus + city + state + zipCode

            return url


        }

        const generateStoreHours = () => {
            const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
            const weeklyOpenTime = `${business.open_time.toString()} :00 ${business.open_time < 12 ? "AM" : "PM"} -` 
            const weeklyCloseTime = `${business.close_time.toString()} :00 ${business.close_time >= 12 ? "PM" : "AM"}` 

            const oneDay = days.map((day, idx) => (
                        <div key={day} className="flex-row-start">
                            <span className="text-size-large mr-30 day-width semi-bold-plus">{day}</span>
                            <span className="text-size-large semi-bold-plus mr-2">{weeklyOpenTime}</span>
                            <span className="text-size-large semi-bold-plus">{weeklyCloseTime}</span>
                        </div>
                     )
            )

            return oneDay;

        }

        if (business){
            if (business.reviews){
                allReviews = business.reviews.map((review) => {
                    return <ReviewIndexItemContainer key={review.id} review={review} /> 
                })
            }
            //Prepare slideShow images for Resizing
            if (business.photos){
                allPhotosImg = business.photos.map((image) => {
                    return <img key={image.photoUrl} className="show-photo-scroller-item" src={image.photoUrl}></img>
                })
                allPhotosImg = allPhotosImg.slice(0,4)
            }

            if(menuItems){
                menuPhotoScroller = menuItems.map(menuObj => (
                    <MenuPhotos key={menuObj.text} photo={menuObj.photo} text={menuObj.text}/>
                ))
            }

            cityStZip = generateAddressString();
            storeHours = generateStoreHours();


        }





        
        const arrowDownIcon = <FontAwesomeIcon icon={faAngleDown}/>
        // debugger
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
                        { business ? <BusinessHeaderBox key={business.id} business={business} /> : null }
                        {/* covid - 19 */}
                        <section className="show-divider-section covid flex-col-start">
                            <div className="section-headline">
                                <strong className="text-size-20 query-big-headline">COVID-19 Updates</strong>
                            </div>
                            <p>Contact the business for more information about recent service changes.</p>
                        </section>
                        {/* On the Menu */}
                        <section className="show-divider-section on-the-menu flex-col-start">
                            <div className="section-headline">
                                <strong className="text-size-20 query-big-headline">On the Menu</strong>
                            </div>
                            <div className="section-subline">
                                <p className="text-size-large query-big-headline">Popular Here</p>
                            </div>
                            {/* card scroller */}
                            <div className="card-photo-scroller-container">
                                <div className="card-photo-content flex-row-start">
                                    {menuPhotoScroller}
                                </div>
                            </div>
                            
                           

                        </section>
                        {/* Website Menu Component */}
                        {/* <section className="show-divider-section website-menu">
                            <p>Website menu</p>
                            <p>will contain menu links from the owner</p>
                        </section> */}
                        {/* Location and Hours COMPONENT HERE!!! WITH MAP! */}
                        <section className="show-divider-section flex-col-start">
                            <div className="section-headline">
                                <strong className="text-size-20 query-big-headline">Location & Hours</strong>
                            </div>
                            <div className="map-time-container flex-row-start">
                                {/* >1 */}
                                <div className="map-wrapper flex-col-start">
                                    {/* \/ */}
                                    {business ? <ResultsMap bizShowPage={true} bizMarkers={[business]}/> : null}
                                    <div className="address-directions-container flex-row-start">
                                        {/* > */}
                                        <div className="address-content flex-col-start">
                                            {/* \/ */}
                                            <p className="text-size-large semi-bold-plus">{business ? business.address : null}</p>
                                            <p className="text-size-large semi-bold-plus">{business ? cityStZip : null}</p>
                                        </div>
                                        <button className="get-directions-button"><a className="open-sans" 
                                        target="_blank" rel="noopener noreferrer"
                                        href={business ? queryGoogleMaps() : null}>Get Directions</a>

                                        </button>
                                    </div>
                                </div>
                                {/* >2 */}
                                <div className="hours-wrapper flex-col-start">
                                    <ul className="flex-col-start">
                                        {storeHours}
                                    </ul>

                                
                                </div>
                            </div>
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