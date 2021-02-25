import React from 'react';
import {withRouter} from "react-router-dom";
// import ReviewAddFormContainer from "../reviews/review_add_form_container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheckCircle, faDollarSign, faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { faStar as starOut }  from '@fortawesome/free-regular-svg-icons';
import { faShareSquare, faBookmark }  from '@fortawesome/free-regular-svg-icons';

const businessHeaderBox = props => {
    

    const star = <FontAwesomeIcon icon={faStar} />
    const checked = <FontAwesomeIcon icon={faCheckCircle} />
    const dollar = <FontAwesomeIcon icon={faDollarSign} />
    const starOutline = <FontAwesomeIcon icon={starOut} />
    const cameraOutline = <FontAwesomeIcon icon={faCameraRetro} />
    const shareOutline = <FontAwesomeIcon icon={faShareSquare} />
    const bookmarkOutline = <FontAwesomeIcon icon={faBookmark} />

    let openTime;
    let closeTime;
    let isOpen = <span>null</span>;
    // Business Hours dissect
    if (props.business.open_time){
        let dateNow = new Date();
        const currHr = dateNow.getHours();
        if( currHr >= props.business.open_time && currHr < props.business.close_time ){
            isOpen = <span className="open-green">Open </span>;
        } else {
            isOpen = <span className="closed-red">Closed </span>;
        }


        openTime = props.business.open_time.toString()+":00 "
        let amPm  = props.business.open_time >= 12 ? "PM" : "AM"
        openTime += amPm 
        openTime = <span>{openTime}</span>

        if (props.business.close_time < 11){
            closeTime = props.business.close_time.toString()+":00 "
        } else {
            closeTime = (props.business.close_time - 12).toString()+":00 "
        }

        amPm  = props.business.close_time >= 12 ? "PM" : "AM"
        closeTime += amPm
        closeTime = <span>{closeTime}</span>

    }

    // Method(s) to extract Average Review for a Business
    const getAverage = () => {
        let ratingSum = 0;

        props.business.reviews.forEach(review => {
            ratingSum += review.rating
        })

        return (Math.floor(ratingSum / props.business.total_business_reviews))
        
    }

    // Logic to set Average Rating for a Business
    let averageBusinessRating;
    if (props.business.reviews.length > 0){
        averageBusinessRating = getAverage();
    }


    const starField = (key) => (
                    <div key={key} className="star-background">
                        <div className="rating-icons"><span>{star}</span></div>
                    </div>
    )

    let starContainerArr = [];

    const starGenerate = () => {
        for (let i = 0; i < averageBusinessRating; i++){
            let key = i + 99
            starContainerArr.push(starField(key))
        }
    }

    starGenerate();


    //Method to redirect to Review/new
    const redirectTo = () => {

        return (
            props.history.push({pathname:`/biz/${props.business.id}/review/new`, prevBiz: [props.business] })
            
        )
    }

    const category = ["Coffee & Tea", "Restaurant"]
    
    
    return (
        <div className="business-header-container"> 
            <div className="flex-row-start bottom-m-8">
                {/* FlexBox Start */}
                <div className="business-title">{props.business.business_name} </div>
                <p className="checked-claimed">{checked} Claimed</p>
            </div>
            {/* Flexx End ^^ */}
            <div className="flex-row-start flex-row-align bottom-m-8">
                {/* FlexxBox Start */}
                {starContainerArr.length > 0 ? starContainerArr : <div className="invisidiv-review"></div>}

                <p className="business-num-reviews"><span>{props.business.total_business_reviews}</span> Reviews</p>
                {/* No Render */}
                {/* <p  className="business-details-reviews">Details</p> */}
                
            </div>
            {/* Flex End ^^ */}
            <div className="flex-row-start bottom-m-8">
                {/* Flexx Start */}
                <div className="icon-space">{dollar}</div>
                <div className="icon-space">{dollar}</div>
                <div className="icon-space">{dollar}</div>
                <div className="icon-space">{dollar}</div>
                <div className="icon-space">{dollar}</div>

                <p className="business-details-category-text">{category[props.business.category]}</p>
                {/* No Render */}
                {/* <button className="small-edit-category-business-button">Edit</button> */}
            </div>
            {/* Flexx End ^^ */}
            <div className="flex-row-start bottom-m-8">
                {/* Flex Row Start */}
                <p className="open-sans">{isOpen}</p>
                <p className="open-sans grey-text"> {props.business.open_time ? openTime : "hours unavailable"} - {props.business.open_time ? closeTime : "close time unavailable"} </p>
            </div>
            {/* Flex End ^^ */}
            <div className="flex-row-start bottom-m-8">
                <button onClick={() => redirectTo() }className="open-sans red-button long-160"> <i className="starOutline-button" >{starOutline}</i>
                Write a Review
                </button>
                {/* No Render */}
                {/* <button className="open-sans white-button-med"> <i className="icon-outline">{cameraOutline}</i>Add Photo</button>
                <button className="open-sans white-button-sm"> <i className="icon-outline">{shareOutline}</i>Share</button>
                <button className="open-sans white-button-sm"> <i className="icon-outline">{bookmarkOutline}</i>Save</button> */}
                

            </div>

            
        </div>
    )
}

export default withRouter(businessHeaderBox);