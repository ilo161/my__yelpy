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
            searchArr: [],
            showBlipFind: false,
            showBlipCity: false,
            isSplashInputPlaceHolder: "plumbers, delivery, take-out",
            notSplashInputPlaceHolder: "taco's, cheap dinner, Max's",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.showBlip = this.showBlip.bind(this);

    }

    handleSubmit(){

        if (this.state.searchQuery === ""){
            this.setState({isSplashInputPlaceHolder: "Please fill me in", 
                           notSplashInputPlaceHolder: "Please fill me in"})

        } else {

            this.props.action(this.state.searchQuery).then(() => {
            const url = this.props.location.pathname;
            const parts = url.split("/")

            if(!parts.includes("search")){
                this.props.history.push(`/search`)
                
            }
            })
        }

        
    }

    update(field){

        return e => this.setState({[field]: e.currentTarget.value })
    }

    showBlip(field){
        this.setState({[field]: !this.state[field]})
    }

    render() {
        const {isSplash} = this.props;

        const searchIcon = <FontAwesomeIcon className="icon search-icon" size="1x" icon={faSearch}/>

        const findFixed = (<div className="search-active">
                            <p className="open-sans">Try searching for "coffee" or "restaurants"</p>
                            </div>
                          )

        const cityFixed = (<div className="search-active">
                            <p className="open-sans">City is fixed to Seattle</p>
                            </div>
                          )


        const findPopup = (<div className="myRelative">
            {this.state.showBlipFind ? findFixed : null }
        </div>)

        const cityPopup = (<div className="myRelative">
            {this.state.showBlipCity ? cityFixed : null }
        </div>)

        return (
            
            <form onSubmit={e => {
                    e.preventDefault()
                    this.handleSubmit
                }} className={isSplash ? "flex-row-start" : "header-container"} >
             {/* <div className="flex-row-start">  */}
                <div  className={isSplash ? "search-city-nav-container" : "search-city-nav-container search-shadow search-nav-max-width"}>
                    <div className="flex-row-start" >
                        {/* Flexx Start */}
                        {isSplash ? <span className="hero-nav-header">Find</span> : null}

                        
                            <input type="text" className={isSplash ? "search-bar white no-border" : "search-bar no-border"} type="text"
                            onFocus={isSplash ? () => this.showBlip("showBlipFind") : null}
                            onBlur={isSplash ? () => this.showBlip("showBlipFind") : null}
                            placeholder={isSplash ? this.state.isSplashInputPlaceHolder : this.state.notSplashInputPlaceHolder}
                            value={this.state.searchQuery}
                            onChange={this.update("searchQuery")}></input>
                            {isSplash ? findPopup : null}

                        

                        <div className="bar-v-line"></div>
                        
                        {isSplash ? <span className="hero-nav-header">Near</span> : null}

                            <input type="text" className={isSplash ? "city-search-bar white no-border myRelative" : "city-search-bar no-border"} type="text" 
                            onFocus={isSplash ? () => this.showBlip("showBlipCity") : null}
                            onBlur={isSplash ? () => this.showBlip("showBlipCity") : null}
                            placeholder="Seattle, WA"
                            onChange={this.update("cityQuery")}
                            value={this.state.cityQuery}>
                            </input>
                            {isSplash ? cityPopup : null}

                            

                    </div>
                   
                    
                </div>
                <button type="submit" className="red-search-submit-button" onClick={this.handleSubmit}>
                            {searchIcon}
                </button>

            </form>
            
        )
    }
}

export default withRouter(SearchCityNav);