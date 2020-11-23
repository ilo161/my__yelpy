import React from 'react'
import {withRouter} from "react-router-dom"

class GreetingJumboTron extends React.Component{
    constructor(props){
        super(props)

    }

    render() {


        return(
            <div className="greeting-jumbotron">
                <img className="img-jumbotron" src={window.jumbotron}/>
                <div className="jumbotron-nav">
                    <p>Some TExt</p>
                </div>
                <img className="yelp-static center" src={window.yelp_white_sm}></img>

                    {/* //Search Bar */}
                <input className="jumbotron-search" type="text" placeholder="Search..."></input>

            </div>
        )
    }
}


export default withRouter(GreetingJumboTron)


