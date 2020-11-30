import React from "react";
import {withRouter, Link} from "react-router-dom";
import SearchCityNavContainer from "../search/search_city_nav_container";


class ReviewAddForm extends React.Component {
    constructor(props){
        super(props)

        this.state = this.props.form;
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    
    handleSubmit(e){
        e.preventDefault();
        // let numStr = this.state.rating
        // let num = parseInt(numStr)
        this.props.action(this.state).then(action => {
            debugger
            
            this.props.history.push(`/biz/${action.review.business_id}`)
        })

    }

    update(field){
        if (field === "rating"){
            return e => this.setState({[field]: parseInt(e.target.value)})
        } else {
            return e => this.setState({ [field]: e.target.value } ) 
        }
    }


    render() {
        
        let prevBiz;
        {this.props ? prevBiz = this.props.history.location.prevBiz[0] : null }
        if (this.props){
            if (this.state.business_id === null){
                debugger
                this.setState({business_id: prevBiz.id})
            }
        }



    return (
        <>
        <div className="top-show-nav">
                    <ul className="flex-row-start">
                        {/* Items are flexxed */}
                        <div className="icon-box-nav">
                            <Link to="/" ><img src={window.yelp_white_sm} width="80vw" height="80vh"></img></Link>
                        </div>
                        <SearchCityNavContainer/>
                        <div className="biz-review-nav-text">
                            <Link className="header-link" to="/">For Businesses!</Link>
                            <Link className="header-link" to="/">Write a Review</Link>
                        </div>
                        <div className="login-signup-buttons-container">
                            <Link to="/login" className="login-button">Login</Link>
                            <Link to="/signup" className="signup-clear">Signup</Link>
                        </div>
                        {/* End Flexx */}
                    </ul>
                </div>
                <div className="review-form-container">
                    <section className="review-form-itself-container flex-col-full">
                        <div className="business-title biz-title-margin">{this.props ? prevBiz.business_name : null}</div>
                        <input type="text" onChange={this.update("title")} placeholder="title..."></input>
                        <select onChange={this.update("rating")}>
                            <option selected disabled>Choose Rating</option>
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select>
                        <textarea onChange={this.update("body")} className="review-text-input" name="" id="" cols="30" rows="20" 
                        placeholder="This coffee shop is incredible! They offer fresh organic baked goods from the local
                        bakeries! What would be better! You can also chat coffee with the barista there. They have all been
                        trained by the Coffee Guru who hosts field trips to coffee farms around the world! "></textarea>
                        <button onClick={this.handleSubmit}> Submit Review</button>
                    </section>

                </div>
        </>
    )

}
}

export default withRouter(ReviewAddForm);