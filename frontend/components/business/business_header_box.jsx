import React from 'react';
import {withRouter} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const businessHeaderBox = props => {

    const element = <FontAwesomeIcon icon={faStar} />
    debugger

    // helpemethod...to get stars
    return (
        <div className="business-header-container">
            <p className="business-title">{props.business.business_name} <span> claimed</span></p>
            <div className="rating-icons"><span>{element}</span></div>

            
        </div>
    )
}

export default businessHeaderBox;