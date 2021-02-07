import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchCityNav extends React.Component{
    constructor(props){
        super(props)

    }

    render() {
        const {isSplash} = this.props;

        const searchIcon = <FontAwesomeIcon className="icon search-icon" size="1x" icon={faSearch}/>
        return (
            
            <div className={isSplash ? "flex-row-start" : "header-container"} >
             {/* <div className="flex-row-start">  */}
                <div className={isSplash ? "search-city-nav-container" : "search-city-nav-container search-shadow search-nav-max-width"}>
                    <nav className="flex-row-start" >
                        {/* Flexx Start */}
                        {isSplash ? <span className="hero-nav-header">Find</span> : null}

                        <input className={isSplash ? "search-bar white no-border" : "search-bar no-border fade-gray"} type="text"
                        placeholder={isSplash ? "plumbers, delivery, take-out" : "taco's, cheap dinner, Max's"}></input>

                        <div className="bar-v-line"></div>
                        
                        {isSplash ? <span className="hero-nav-header">Near</span> : null}
                        <input className={isSplash ? "city-search-bar white no-border" : "city-search-bar no-border"} type="text" 
                        placeholder="Seattle, WA"></input>
                        
                    </nav>
                   
                    
                </div>
                <button className="red-search-submit-button">
                            {searchIcon}
                </button>

            </div>
            
        )
    }
}

export default SearchCityNav ;