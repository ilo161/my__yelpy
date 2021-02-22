import React from 'react'
import {withRouter} from "react-router-dom"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

class SearchNavDropDowns extends React.Component {


    render() {
        const arrowDownIcon = <FontAwesomeIcon icon={faAngleDown}/>
        return(
             <div className="search-nav-dropdowns-container">
                        <ul className="flex-row-start">
                            <div className="invisidiv-nav"></div>

                            <nav className="one-button-container">
                                <span className="search-nav-dropdowns">Restaurants</span>
                                {arrowDownIcon}
                            </nav>  
                            {/* Home Services */}
                            <nav className="one-button-container">
                                <span className="search-nav-dropdowns">Home Services</span>
                                {arrowDownIcon}
                            </nav>
                            {/* Auto Services */}
                            <nav className="one-button-container">
                            <span className="search-nav-dropdowns">Auto Services</span>
                                {arrowDownIcon}
                            </nav>    
                            <nav className="one-button-container">
                                <span className="search-nav-dropdowns">More</span>
                                {arrowDownIcon}
                            </nav>  

                        </ul>
            </div>
        )
    }
}

export default SearchNavDropDowns;