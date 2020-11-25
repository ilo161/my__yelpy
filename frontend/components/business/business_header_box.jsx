import React from 'react';
import {withRouter} from "react-router-dom";
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


    // helpemethod...to get stars
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
                <div className="star-background">
                    <div className="rating-icons"><span>{star}</span></div>
                </div>
                <div className="star-background">
                    <div className="rating-icons"><span>{star}</span></div>
                </div>
                <div className="star-background">
                    <div className="rating-icons"><span>{star}</span></div>
                </div>
                <div className="star-background">
                    <div className="rating-icons"><span>{star}</span></div>
                </div>
                <div className="star-background">
                    <div className="rating-icons"><span>{star}</span></div>
                </div>

                <p className="business-num-reviews">500 Reviews</p>
                <p className="business-details-reviews">Details</p>
            </div>
            {/* Flex End ^^ */}
            <div className="flex-row-start bottom-m-8">
                {/* Flexx Start */}
                <div className="icon-space">{dollar}</div>
                <div className="icon-space">{dollar}</div>
                <div className="icon-space">{dollar}</div>
                <div className="icon-space">{dollar}</div>
                <div className="icon-space">{dollar}</div>

                <p className="business-details-category-text"> Place holder Text of Category</p>
                <button className="small-edit-category-business-button">Edit</button>
            </div>
            {/* Flexx End ^^ */}
            <div className="flex-row-start bottom-m-8">
                <p className="open-sans">Open/Closed...</p>
                <p className="open-sans"> ##:00 AM- ##:00 PM</p>
            </div>
            {/* Flex End ^^ */}
            <div className="flex-row-start bottom-m-8">
                <button className="open-sans red-button-long"> <i className="starOutline-button" >{starOutline}</i>Write a Review</button>
                <button className="open-sans white-button-med"> <i className="icon-outline">{cameraOutline}</i>Add Photo</button>
                <button className="open-sans white-button-sm"> <i className="icon-outline">{shareOutline}</i>Share</button>
                <button className="open-sans white-button-sm"> <i className="icon-outline">{bookmarkOutline}</i>Save</button>
                

            </div>

            
        </div>
    )
}

export default businessHeaderBox;