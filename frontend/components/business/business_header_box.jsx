import React from 'react';
import {withRouter} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheckCircle, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const businessHeaderBox = props => {

    const element = <FontAwesomeIcon icon={faStar} />
    const checked = <FontAwesomeIcon icon={faCheckCircle} />
    const dollar = <FontAwesomeIcon icon={faDollarSign} />


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
                    <div className="rating-icons"><span>{element}</span></div>
                </div>
                <div className="star-background">
                    <div className="rating-icons"><span>{element}</span></div>
                </div><div className="star-background">
                    <div className="rating-icons"><span>{element}</span></div>
                </div><div className="star-background">
                    <div className="rating-icons"><span>{element}</span></div>
                </div><div className="star-background">
                    <div className="rating-icons"><span>{element}</span></div>
                </div>

                <p className="business-num-reviews">500 Reviews</p>
                <p className="business-details-reviews">Details</p>
            </div>
            {/* Flex End ^^ */}
            <div className="flex-row-start">
                {/* Flexx Start */}
                <div className="icon-space">{dollar}</div>
                <div className="icon-space">{dollar}</div>
                <div className="icon-space">{dollar}</div>
                <div className="icon-space">{dollar}</div>
                <div className="icon-space">{dollar}</div>

                <p className="business-details-category-text"> Place holder Text of Category</p>
                <button className="small-edit-category-business-button">Edit</button>
            </div>

            
        </div>
    )
}

export default businessHeaderBox;