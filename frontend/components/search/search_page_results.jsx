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
            <div className="search-results-container">
                <div className="search-sidebar-container">
                    <div className="sidebar-content">
                        <div className="sidebar-faux">
                            
                        </div>
                    </div>
                </div>
            </div>
            
            </>
            
        )
    }
}

export default SearchPageResults ;