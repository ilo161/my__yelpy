import React from "react"
import {withRouter}from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchCityNav extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            searchQuery: "",
            cityQuery: "",
            searchArr: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);

    }

    handleSubmit(){
        this.props.action(this.state.searchQuery).then(() => this.props.history.push(`/search`))
    }

    update(field){

        return e => this.setState({[field]: e.currentTarget.value })
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
                        placeholder={isSplash ? "plumbers, delivery, take-out" : "taco's, cheap dinner, Max's"}
                        value={this.state.searchQuery}
                        onChange={this.update("searchQuery")}></input>

                        <div className="bar-v-line"></div>
                        
                        {isSplash ? <span className="hero-nav-header">Near</span> : null}
                        <input className={isSplash ? "city-search-bar white no-border" : "city-search-bar no-border"} type="text" 
                        placeholder="Seattle, WA"
                        onChange={this.update("cityQuery")}
                        value={this.state.cityQuery}></input>
                        
                    </nav>
                   
                    
                </div>
                <button className="red-search-submit-button" onClick={this.handleSubmit}>
                            {searchIcon}
                </button>

            </div>
            
        )
    }
}

export default withRouter(SearchCityNav);