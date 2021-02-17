import React from "react"
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import TripleNav from "../nav_header/triple_nav_components"
import SearchResultIndexItemContainer from "./search_result_index_item_container"
import ResultsMap from "../map/results_map"

class SearchPageResults extends React.Component{
    constructor(props){
        super(props)

    }

    render() {
        const rightChevron = <FontAwesomeIcon icon={faChevronRight} size="1x"/>
        let allResults;


        const generateQueryChevrons = () => {
            const smallChevron = (<span className="m-lr-8">{rightChevron}</span>)
            const city = <li>Seattle</li>
            const cat1 = <li>Food</li>
            const cat2 = <li>Coffee & Tea</li>
            return ( <> 
                    {city}
                    {smallChevron}
                    {cat1}
                    {smallChevron}
                    {cat2}
                    </>
                    )
        }

        const generateQueryHeadline = () => {
            let queryString = this.props.searchQuery;
            if(queryString === undefined) queryString = "";
            queryString += " near "
            queryString += " Seattle "

           return( <h1 className="text-size-large-plus">{queryString}</h1>)
        }

        const generateSearchResultIndexItem = () => {
            let collection;
            collection = this.props.searchResults.map((business, idx) => {

                return <SearchResultIndexItemContainer idx={idx} business={business} key={business.id} /> 
                
            })

            return collection;
        }

        if(this.props.searchResults.length > 0){
            allResults = generateSearchResultIndexItem();
        }

       
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
                           <div className="search-results-content flex-col-start">
                                <div className="query-tagline">
                                    <ul className="query-tags-chevron-box flex-row-start text-size-md semi-bold-plus">
                                        {generateQueryChevrons()}
                                    </ul>
                                </div>
                                {/* Query Headline */}
                                <div className="query-big-headline">
                                    {generateQueryHeadline()}
                                </div>
                                {/*  Promotion box */}
                                <div className="promotion-button-container">
                                    {/* Delivery */}
                                    <div className="large-button-toggle-box">
                                        <button className="toggle-box-content">
                                            <div className="flex-col-start">
                                                <span className="text-size-large bold">Delivery</span>
                                                <span>Order in</span>
                                            </div>
                                            <img className="toggle-box-img" src="https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/logos/delivery_takeout.svg"></img>
                                        </button>
                                    </div>
                                    {/* Takeout */}
                                    <div className="large-button-toggle-box">
                                        <button className="toggle-box-content">
                                            <div className="flex-col-start">
                                                <span className="text-size-large bold">Take Out</span>
                                                <span>Grab and go</span>
                                            </div>
                                            <img className="toggle-box-img" src="https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/logos/takeout.svg"></img>
                                        </button>
                                    </div>
                                </div>


                                {allResults}


                           </div>

                        </div>
                    </div>
                </div>
                {/* Right Container */}
                <div className="right-rail-container">
                    <ResultsMap bizMarkers={this.props.searchResults} updateBounds={this.props.requestUpdateBounds}/>
                </div>

            </div>
            
            </>
            
        )
    }
}

export default SearchPageResults ;