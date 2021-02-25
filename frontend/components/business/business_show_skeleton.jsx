import React from "react";
import BusinessHeaderBox from "./business_header_box";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faShoppingBag, faWifi } from '@fortawesome/free-solid-svg-icons';
// import ReviewIndexItem from "../reviews/review_index_item"
import ReviewIndexItemContainer from "../reviews/review_index_item_container";
import BusinessInfoBox from "./business_info_box";
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

    componentDidUpdate(oldProps){
        // if(oldProps.business.reviews !== this.props.business.reviews){

        // }
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
            const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            let isOpen;
            let isOpenBoolean;
            const daySpanClasses = "text-size-large mr-30 day-width semi-bold-plus"
            const daySpanBoldClasses = daySpanClasses + " max-bold"

            //close over FN to set the <span> on IF ON this given day it is indeed open or closed
            const isOpenFn = (isOpenBoolean) => {
                isOpen = <span className={isOpenBoolean ? "open-green" : "closed-red"}>
                    {isOpenBoolean ? "Open now" : "Closed now"}</span>;
            }


            const dateNow = new Date();
            const currHr = dateNow.getHours();
            const currDay = dateNow.getDay();

            // This sets a Green text for OPEN or Red text for CLOSED on Location and Hours section.

            if (currDay >= 1 && currDay <= 5){
                if (currHr >= business.open_time && currHr < business.close_time ){
                    // isOpenBoolean = true;
                    isOpenFn(true);
                } else {
                    isOpenFn(false);
                }
            } else if(currDay === 6){
                if (currHr >= business.open_time_sat && currHr < business.close_time_sat ){
                    // isOpenBoolean = true;
                    isOpenFn(true);
                } else {
                    isOpenFn(false)
                }
            } else {
                if (currHr >= business.open_time_sun && currHr < business.close_time_sun ){
                    isOpenFn(true);
                } else {
                    isOpenFn(false);
                }
            }
            

           
            let weeklyOpenTime;
            let weeklyCloseTime;

            let satOpenTime;
            let sunOpenTime;

            let satCloseTime;
            let sunCloseTime;

            // Correct military time to US Readable
            if (business.open_time > 12) weeklyOpenTime = (business.open_time - 12).toString();
            
            if (business.open_time_sat > 12) satOpenTime = (business.open_time_sat - 12).toString();
            
            if (business.open_time_sun > 12) sunOpenTime = (business.open_time_sun - 12).toString();
            
            if (business.close_time > 12) weeklyCloseTime = (business.close_time - 12).toString();

            if (business.close_time_sat > 12) satCloseTime = (business.close_time_sat - 12).toString();
            
            if (business.close_time_sun > 12) sunCloseTime = (business.close_time_sun - 12).toString();
            

            weeklyOpenTime = `${weeklyOpenTime ? weeklyOpenTime : business.open_time.toString()}:00 ${business.open_time < 12 ? "AM - " : "PM - "}` 
            weeklyCloseTime = `${weeklyCloseTime ? weeklyCloseTime : business.close_time.toString()}:00 ${business.close_time < 12 ? "AM" : "PM"}` 

            satOpenTime = `${satOpenTime ? satOpenTime : business.open_time_sat.toString()}:00 ${business.open_time_sat < 12 ? "AM - " : "PM - "}`
            sunOpenTime = `${sunOpenTime ? sunOpenTime : business.open_time_sun.toString()}:00 ${business.open_time_sun < 12 ? "AM - " : "PM - "}`

            satCloseTime = `${satCloseTime ? satCloseTime : business.close_time_sat.toString()}:00 ${business.close_time_sat < 12 ? "AM" : "PM"}`
            sunCloseTime = `${sunCloseTime ? sunCloseTime : business.close_time_sun.toString()}:00 ${business.close_time_sun < 12 ? "AM" : "PM"}`

            const sunThroughSat = days.map((day, idx) => {
                if(idx >= 1 && idx <= 5){
                    return (<div key={day} className="flex-row-start daily-hour mb-9">
                                <span className={currDay === idx ? daySpanBoldClasses : daySpanClasses}>{day}</span>
                                <span className="text-size-large semi-bold-plus mr-5">{weeklyOpenTime}</span>
                                <span className="text-size-large semi-bold-plus mr-10">{weeklyCloseTime}</span>
                                {currDay === idx ? isOpen : null}
                            </div>)
                } else if (idx === 6){

                    return (<div key={day} className="flex-row-start daily-hour mb-9">
                                <span className={currDay === idx ? daySpanBoldClasses : daySpanClasses}>{day}</span>
                                <span className="text-size-large semi-bold-plus mr-5">{satOpenTime}</span>
                                <span className="text-size-large semi-bold-plus mr-10">{satCloseTime}</span>
                                {currDay === idx ? isOpen : null}
                            </div>)
                } else {
                    return(<div key={day} className="flex-row-start daily-hour mb-9">
                                <span className={currDay === idx ? daySpanBoldClasses : daySpanClasses}>{day}</span>
                                <span className="text-size-large semi-bold-plus mr-5">{sunOpenTime}</span>
                                <span className="text-size-large semi-bold-plus mr-10">{sunCloseTime}</span>
                                {currDay === idx ? isOpen : null}
                            </div>)
                }
                        
                     
            })
            const sunday = [sunThroughSat.shift()]
            //reorder the day to start on monday
            const monThroughSun = sunThroughSat.concat(sunday);
            return monThroughSun;

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
        const takeoutIcon = <FontAwesomeIcon icon={faShoppingBag} size="1x"/>
        const wifiIcon = <FontAwesomeIcon icon={faWifi} size="1x"/>

        return (
            <div className="business-show-container">
                <TripleNav/>
                
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
                        {/* Location and Hours with Map! */}
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
                        <section className="show-divider-section flex-col-start">
                            {/* 1-\/ */}
                            <div className="section-headline">
                                <strong className="text-size-20 query-big-headline">Amenities and More</strong>
                            </div>
                            {/* 2 \/ */}
                            <div className="flex-row-start">
                                <div className="md-icon">{takeoutIcon}</div>
                                <span className="ml-25 text-size-large mr-60 semi-bold-plus">Offers Takeout</span>

                                <div className="md-icon">{wifiIcon}</div>
                                <span className="ml-25 text-size-large semi-bold-plus">Contactless Pay</span>
                            </div>
                            <div className="flex-row-start">
                                
                            </div>
                        </section>
                        {/* Ask the community */}
                        <section id="start-review-anchor" className="show-divider-section">
                        </section>
                        
                        { business ? allReviews : null}
                        
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