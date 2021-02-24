import React from 'react'
import {withRouter} from "react-router-dom";
import { Link } from 'react-router-dom';
import UserMedallion from "./user_medallion"


class TransparentNav extends React.Component {
    
    handleSubmit(){

        const allResults = "coffee restaurants";

        this.props.action(allResults).then(() => {
                this.props.history.push(`/search`)
                
            
       })

    }

    render() {
        const { currentUser } = this.props;
        

        const loginSignup = <>
            <Link className="nav-header-link mr-12" to="/login">Log In</Link> 
            <Link className="nav-header-link signup-trans" to="/signup">Sign Up</Link>
        </>

        return(
            <div className="trans-nav-container flex-row-start">
                <ul className="header-nav flex-row-start">
                    <p onClick={this.handleSubmit.bind(this)} className="nav-header-link">Write a Review</p>
                    <a href="https://github.com/ilo161/my__yelpy" rel="noopener noreferrer" className="nav-header-link">Yelpy Github</a>
                    <a href="https://ilo161.github.io" rel="noopener noreferrer" className="nav-header-link">Hire Me</a>
                    <a href="https://www.linkedin.com/in/sergio-medina-36937668/" rel="noopener noreferrer" className="nav-header-link">Linked In</a>
                </ul>
               
                {currentUser ? <UserMedallion/> : loginSignup }
                
                
            </div>
        )
    }
}

export default withRouter(TransparentNav);