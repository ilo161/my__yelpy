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
                                    <div className="sidebar-header text-size-md pd-b-8">
                                        <p>Suggested</p>
                                    </div>
                                    <div className="sidebar-selector-container flex-col-start">
                                        {/* checkbox 1 */}
                                        <label className="checkbox-row flex-row-start">
                                             <input className="input-chk" type="checkbox"></input>
                                             <span className="checkbox-text">Curbside Pickup</span>
                                        </label>
                                        {/* checkbox 2 */}
                                         <label className="checkbox-row flex-row-start">
                                             <input className="input-chk" type="checkbox"></input>
                                             <span className="checkbox-text">Open Now</span>
                                        </label>
                                        {/* checkbox 3 */}
                                         <label className="checkbox-row flex-row-start">
                                             <input className="input-chk" type="checkbox"></input>
                                             <span className="checkbox-text">Yelp Delivery</span>
                                        </label>
                                    </div>
                                </div>
                                {/* Category */}
                                <div className="sidebar-seperator">
                                    <div className="sidebar-header text-size-md pd-b-8">
                                        <p>Category</p>
                                    </div>

                                    <div className="filter-toggle-set">
                                        {/* 1 */}
                                        <div className="pill-cat-container">
                                            <button className="pill-button">
                                                <span className="text-size-small semi-bold-plus" >Coffee & Tea</span>
                                            </button>
                                        </div>
                                         {/* 2 */}
                                        <div className="pill-cat-container">
                                            <button className="pill-button">
                                                <span className="text-size-small semi-bold-plus" >Food</span>
                                            </button>
                                        </div>
                                         {/* 3 */}
                                        <div className="pill-cat-container">
                                            <button className="pill-button">
                                                <span className="text-size-small semi-bold-plus" >Restaurants</span>
                                            </button>
                                        </div>
                                         {/* 4 */}
                                        <div className="pill-cat-container">
                                            <button className="pill-button">
                                                <span className="text-size-small semi-bold-plus" >Grocery</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Features */}
                                <div className="sidebar-seperator">
                                    <div className="sidebar-header text-size-md pd-b-8">
                                        <p>Features</p>
                                    </div>
                                    <div className="sidebar-selector-container flex-col-start">
                                        {/* checkbox 1 */}
                                        <label className="checkbox-row flex-row-start">
                                             <input className="input-chk" type="checkbox"></input>
                                             <span className="checkbox-text">Yelp Takeout</span>
                                        </label>
                                        {/* checkbox 2 */}
                                         <label className="checkbox-row flex-row-start">
                                             <input className="input-chk" type="checkbox"></input>
                                             <span className="checkbox-text">Good for Kids</span>
                                        </label>
                                        {/* checkbox 3 */}
                                         <label className="checkbox-row flex-row-start">
                                             <input className="input-chk" type="checkbox"></input>
                                             <span className="checkbox-text">Accepts Apple Pay</span>
                                        </label>
                                        {/* checkbox 4 */}
                                         <label className="checkbox-row flex-row-start">
                                             <input className="input-chk" type="checkbox"></input>
                                             <span className="checkbox-text">Outdoor Seating</span>
                                        </label>
                                    </div>
                                </div>
                                {/* Distance */}
                                <div className="sidebar-seperator">
                                    <div className="sidebar-header text-size-md pd-b-8">
                                        <p>Distance</p>
                                    </div>
                                     <div className="sidebar-selector-container flex-col-start">
                                        {/* checkbox 1 */}
                                        <label className="checkbox-row flex-row-start">
                                             <input className="input-chk input-cir" type="checkbox"></input>
                                             <span className="checkbox-text">Bird's Eye View</span>
                                        </label>
                                         {/* checkbox 2 */}
                                        <label className="checkbox-row flex-row-start">
                                             <input className="input-chk input-cir" type="checkbox"></input>
                                             <span className="checkbox-text">Driving (5 mi)</span>
                                        </label>
                                         {/* checkbox 3 */}
                                        <label className="checkbox-row flex-row-start">
                                             <input className="input-chk input-cir" type="checkbox"></input>
                                             <span className="checkbox-text">Biking (2 mi.)</span>
                                        </label>
                                         {/* checkbox 4 */}
                                        <label className="checkbox-row flex-row-start">
                                             <input className="input-chk input-cir" type="checkbox"></input>
                                             <span className="checkbox-text">Walking (1 mi.)</span>
                                        </label>
                                         {/* checkbox 5 */}
                                        <label className="checkbox-row flex-row-start">
                                             <input className="input-chk input-cir" type="checkbox"></input>
                                             <span className="checkbox-text">Within 4 blocks</span>
                                        </label>
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