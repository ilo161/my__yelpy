import React from "react";
import {withRouter, Link} from "react-router-dom";
import SearchCityNavContainer from "../search/search_city_nav_container";
import RainbowStars from "./rainbow_stars"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';


class ReviewAddForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {...this.props.form,
            starNum: undefined
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateStars = this.updateStars.bind(this);
        
    }

    componentDidMount(){
        this.props.requestBusiness(this.props.id)
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

    updateStars(e){

        console.log(e.currentTarget.attributes[1].nodeValue)
        const starIdx = parseInt(e.currentTarget.attributes[1].nodeValue);

        this.setState({starNum: starIdx})
    }


    render() {
        
        const {business} = this.props;
        // const star = <FontAwesomeIcon icon={faStar} size="1x" />
        // const allColors = ["", "bg-rate-1", "bg-rate-2", "bg-rate-3", "bg-rate-4", "bg-rate-5"]
        // const testtest = "bg-rate-2"
        // const padLeft = "rate-pl-4"

        // const starFieldGrey = (color, i, padding = "") => (

        //             <li onMouseOver={this.updateStars} className={`star-background-lt-grey-md ${color} ${padding}`}
        //             data-index={i}>
        //                 <div className="rating-icons-center"><span>{star}</span></div>
        //             </li>
        //  )

        // const generateAllStars = (howMany) => {
        //     let collectionStars = [];

        //     switch(howMany){
        //         case 0:
        //             // debugger
        //             for(let i = 0; i < 5; i++){
        //                 if(i <= howMany){
        //                     collectionStars.push(starFieldGrey(allColors[1], i));
        //                 } else {
        //                     collectionStars.push(starFieldGrey(allColors[0], i, padLeft))
        //                 }
        //             }
        //         break;

        //         case 1:
        //             for(let i = 0; i < 5; i++){
        //                 if(i <= howMany){
        //                     if(i === 0){
        //                         collectionStars.push(starFieldGrey(allColors[2], i));
        //                     } else {
        //                         collectionStars.push(starFieldGrey(allColors[2], i, padLeft));
        //                     }
        //                 } else {
        //                     collectionStars.push(starFieldGrey(allColors[0], i, padLeft))
        //                 }
        //             }
        //         break;

        //         case 2:
        //             for(let i = 0; i < 5; i++){
        //                 if(i <= howMany){
        //                     if(i === 0){
        //                         collectionStars.push(starFieldGrey(allColors[3], i));
        //                     } else {
        //                         collectionStars.push(starFieldGrey(allColors[3], i, padLeft));
        //                     }
        //                 } else {
        //                     collectionStars.push(starFieldGrey(allColors[0], i, padLeft))
        //                 }
        //             }
        //         break;

        //         case 3:
        //             for(let i = 0; i < 5; i++){
        //                 if(i <= howMany){
        //                     if(i === 0){
        //                         collectionStars.push(starFieldGrey(allColors[4], i));
        //                     } else {
        //                         collectionStars.push(starFieldGrey(allColors[4], i, padLeft));
        //                     }
        //                 } else {
        //                     collectionStars.push(starFieldGrey(allColors[0], i, padLeft))
        //                 }
        //             }
        //         break;

        //         case 4:
        //             for(let i = 0; i < 5; i++){
        //                 if(i <= howMany){
        //                     if(i === 0){
        //                         collectionStars.push(starFieldGrey(allColors[5], i));
        //                     } else {
        //                         collectionStars.push(starFieldGrey(allColors[5], i, padLeft));
        //                     }
        //                 } else {
        //                     collectionStars.push(starFieldGrey(allColors[0], i, padLeft))
        //                 }
        //             }
        //         break;

        //         default:
        //             for(let i = 0; i < 5; i++){
        //                 if(i === 0){
        //                     collectionStars.push(starFieldGrey(allColors[0], i));
        //                 } else {
        //                     collectionStars.push(starFieldGrey(allColors[0], i, padLeft))
        //                 }
        //             }
        //         break;
        //     }

        //     return collectionStars;
        // }

        if (business){
            if (this.state.business_id === null){

                this.setState({business_id: business.id})
            }
        }


        // const myStars = generateAllStars(this.state.starNum);



    return (
        <>
        <div className="top-show-nav">
                    <ul className="flex-row-start">
                        {/* Items are flexxed */}
                        <div className="icon-box-nav">
                            <Link to="/" ><img src={window.yelp_white_sm} width="80vw" height="80vh"></img></Link>
                        </div>
                        {/* <SearchCityNavContainer/> */}
                        {/* <div className="biz-review-nav-text">
                            <Link className="header-link" to="/">For Businesses!</Link>
                            <Link className="header-link" to="/">Write a Review</Link>
                        </div> */}
                        <div className="login-signup-buttons-container">
                            <Link to="/login" className="login-button">Login</Link>
                            <Link to="/signup" className="signup-clear">Signup</Link>
                        </div>
                        {/* End Flexx */}
                    </ul>
        </div>
                <div className="review-form-container">
                    <div className="review-content-container">
                        <section className="review-form-itself-container flex-col-full">
                            <div className="business-title biz-title-margin">{business ? business.business_name : null}</div>
                            <section className="content-border-box flex-col-full">
                                {/* <div className="stars-text-container">
                                    <div className="stars-text-content"> */}
                                        {/* <ul className="stars-array flex-row-start"> */}
                                            {/* {myStars} */}
                                            <RainbowStars isReviewForm={true}/>
                                        {/* </ul> */}

                                    {/* </div> */}
                                {/* </div> */}
                                {/* <input type="text" onChange={this.update("title")} placeholder="title..."></input> */}
                                {/* <select onChange={this.update("rating")}>
                                    <option selected disabled>Choose Rating</option>
                                    <option value="5">5</option>
                                    <option value="4">4</option>
                                    <option value="3">3</option>
                                    <option value="2">2</option>
                                    <option value="1">1</option>
                                </select> */}
                                <textarea onChange={this.update("body")} className="review-text-input" name="" id="" cols="30" rows="20" 
                                placeholder="This coffee shop is incredible! They offer fresh organic baked goods from the local
                                bakeries! What would be better! You can also chat coffee with the barista there. They have all been
                                trained by the Coffee Guru who hosts field trips to coffee farms around the world! "></textarea>
                                <button onClick={this.handleSubmit}> Submit Review</button>
                            </section>
                        </section>
                    </div>

                </div>
        </>
    )

}
}

export default withRouter(ReviewAddForm);