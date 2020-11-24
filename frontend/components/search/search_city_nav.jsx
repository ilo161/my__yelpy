import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchCityNav extends React.Component{
    constructor(props){
        super(props)

    }

    render() {
        const searchIcon = <FontAwesomeIcon className="icon" icon={faSearch}/>
        return (
            <div className="search-city-nav-container">
                <nav className="flex-row-start" >
                    {/* Flexx Start */}
                    <input className="search-bar" type="text" placeholder="taco's, cheap dinner, Max's"></input>
                    <input className="city-search-bar" type="text" placeholder="Seattle, WA"></input>
                    <button className="red-search-submit-button">
                        {searchIcon}
                     </button>
                </nav>
            </div>
        )
    }
}

export default SearchCityNav ;