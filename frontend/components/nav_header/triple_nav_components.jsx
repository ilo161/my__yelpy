import React from 'react';
import { Link } from 'react-router-dom';
import SearchCityNavContainer from "../search/search_city_nav_container";
import RightHeaderNavContainer from "../nav_header/right_header_nav_container"
import SearchNavDropDownsContainer from "../nav_header/search_nav_dropdowns_container"

const TripleNav = () => {
    return(
        <div className="top-show-nav">
                    <ul className="flex-row-start">
                        {/* Items are flexxed */}
                        <div className="icon-box-nav">
                            <Link to="/" ><img src={window.yelp_white_sm} width="80vw" height="80vh"></img></Link>
                        </div>
                        <SearchCityNavContainer/>
                        <RightHeaderNavContainer/>
                        {/* End Flexx */}
                    </ul>
                    {/* <SearchNavDropDownsContainer/> */}
                    
        </div> 
    )
}

export default TripleNav;