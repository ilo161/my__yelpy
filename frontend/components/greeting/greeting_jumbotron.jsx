import React from 'react'
import {withRouter} from "react-router-dom"

class GreetingJumboTron extends React.Component{
    constructor(props){
        super(props)

    }

    render() {


        return(
            <div className="greeting-jumbotron">
                <img className="img-jumbotron" src="assets/rachael-gorjestani-fs9MXZo-k1o-unsplash-md.jpg"/>
                <div className="jumbotron-nav">
                    <p>Some TExt</p>
                </div>
                <img className="yelp-static center" src="assets/yelp_icon_white.png"></img>

                    {/* //Search Bar */}
                <input type="text" placeholder="Search..."></input>

            </div>
        )
    }
}


export default withRouter(GreetingJumboTron)


