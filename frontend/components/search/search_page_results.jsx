import React from "react"
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchCityNavContainer from "../search/search_city_nav_container";
import SearchNavDropDownsContainer from "../nav_header/search_nav_dropdowns_container"
import RightHeaderNavContainer from "../nav_header/right_header_nav_container"
import TripleNav from "../nav_header/triple_nav_components"

class SearchPageResults extends React.Component{
    constructor(props){
        super(props)

    }

    render() {
       
        return (
            <>
            <TripleNav/>
            <div className="sidebar-search-map-container">
                <div className="left-rail-container">
                    <div className="sidebar-search-container">
                        <div className="left-sidebar-container">
                            <div className="sidebar-content">
                                <div className="sidebar-header text-size-large">
                                    <p>Filters</p>
                                </div>
                                {/* dollars option */}
                                <div className="padding-dollars">
                                    <div className="dollar-icons-select-box">
                                        <ul className="pill-container flex-row-start open-sans-sm semi-bold">
                                            <button className="dollar-icons-select pill-left">$</button>
                                            <button className="dollar-icons-select pill-center-l">$$</button>
                                            <button className="dollar-icons-select pill-center-r">$$$</button>
                                            <button className="dollar-icons-select pill-right">$$$$</button>
                                        </ul>
                                    </div>
                                </div>
                                {/* suggested checkboxes */}
                                <div className="sidebar-seperator">
                                    <div className="sidebar-header text-size-large">
                                        <p>Suggested</p>
                                    </div>
                                </div>
                                {/* Category */}
                                <div className="sidebar-seperator">
                                    <div className="sidebar-header text-size-large">
                                        <p>Category</p>
                                    </div>
                                </div>
                                {/* Features */}
                                <div className="sidebar-seperator">
                                    <div className="sidebar-header text-size-large">
                                        <p>Features</p>
                                    </div>
                                </div>
                                {/* Distance */}
                                <div className="sidebar-seperator">
                                    <div className="sidebar-header text-size-large">
                                        <p>Distance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        {/* Search Results */}
                        <div className="left-rail-search-results-container">
                            <p>HI</p>
                        </div>
                    </div>
                </div>
                {/* Right Container */}
                <div className="right-rail-container">
                    <div className="mapbox-container">
                        <div className="mapbox-content">
                            <div className="mapbox-faux">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            </>
            
        )
    }
}

export default SearchPageResults ;