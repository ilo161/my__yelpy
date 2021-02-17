import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments }  from '@fortawesome/free-regular-svg-icons';
import { faDirections, faPhoneVolume, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const BusinessInfoBox = ({business}) => {
// https://www.google.com/maps/place/38616+Highmeadow+Dr,+Palmdale,+CA+93551/
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

    //Icons
    const urlOut = <FontAwesomeIcon icon={faExternalLinkAlt}/>
    const phone = <FontAwesomeIcon icon={faPhoneVolume}/>
    const map = <FontAwesomeIcon icon={faDirections}/>
    const comments = <FontAwesomeIcon icon={faComments}/>

    return (
        <div className="order-delivery-takeout flex-col-full">
            {/* Website */}
            <div className="flex-row-start align-content-center order-info-item">
                <span className="blackish-icon">{urlOut}</span>
                <p className="open-sans">{business.website ? business.website : "No website yet..." }</p>
                </div>
                {/* Phone */}
            <div className="flex-row-start align-content-center order-info-item">
                <span className="blackish-icon">{phone}</span>
                <p className="open-sans">{business.phone ? business.phone : " Phone # not present"}</p>
                </div>
                {/* Map */}
            <div className="flex-row-start align-content-center order-info-item">
                <span className="blackish-icon">{map}</span>
                <p className="open-sans"><a className="hyperlink-teal open-sans" 
                target="_blank" rel="noopener noreferrer"
                href={business ? queryGoogleMaps() : null}>Get Directions</a></p>
                </div>
                {/* Message Business */}
            <div className="flex-row-start align-content-center order-info-item no-border">
                <span className="blackish-icon">{comments}</span>
                <p className="hyperlink-teal open-sans">Message the Business</p>
                </div>
            
        </div>

    )

}

export default BusinessInfoBox;