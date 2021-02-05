import React from 'react'
import {withRouter} from "react-router-dom"
import TransparentNavContainer from "../nav_header/transparent_nav_container"

class GreetingJumboTron extends React.Component{
    constructor(props){
        super(props)

    }

    render() {


        return(
            <div className="greeting-jumbotron flex-col-start">
                {/* <img className="img-jumbotron" src={window.jumbotron}/> */}
                <div className="jumbotron-hero-container">
                    <TransparentNavContainer/>

                </div>
                <div className="jumbotron-nav">
                    <p>Some TExt</p>
                </div>
                {/* <img className="yelp-static center" src={window.yelp_white_sm}></img> */}
                {/* <img className="yelp-static" src={window.yelp_white_sm}></img> */}
                <img className="yelp-static" src={"https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/logos/yelp-logo-clear-clean.png"}></img>
                {/* <div className="yelp-static"></div> */}

                    {/* //Search Bar */}
                <input className="jumbotron-search" type="text" placeholder="Search..."></input>

            </div>
        )
    }
}


export default withRouter(GreetingJumboTron)


