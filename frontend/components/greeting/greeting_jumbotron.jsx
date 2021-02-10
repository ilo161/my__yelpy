import React from 'react'
import {withRouter} from "react-router-dom"
import TransparentNavContainer from "../nav_header/transparent_nav_container"
import InnerJumboTronContainer from "./inner_jumbotron_container"

class GreetingJumboTron extends React.Component{
    constructor(props){
        super(props)

    }

    render() {


        return(
            <div className="greeting-jumbotron flex-col-start">

                <div className="jumbotron-hero-container">
                    <TransparentNavContainer/>
                    <InnerJumboTronContainer/>

                </div>
               
            </div>
        )
    }
}


export default withRouter(GreetingJumboTron)


