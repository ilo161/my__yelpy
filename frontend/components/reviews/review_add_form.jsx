import React from "react";
import {withRouter, Link} from "react-router-dom";
import SearchCityNavContainer from "../search/search_city_nav_container";
import RainbowStars from "./rainbow_stars"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronLeft} from '@fortawesome/free-solid-svg-icons';


class ReviewAddForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {...this.props.form,
            errorMessage: "",
            sideBarActive: false
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.updateStars = this.updateStars.bind(this);
        
    }

    componentDidMount(){
        this.props.requestBusiness(this.props.id)
    }
    
    handleSubmit(e){
        e.preventDefault();

        if (this.state.rating === 0){

            this.setState({errorMessage: 
                "To submit your review, please select a star rating for this business."})
        }
        else if(this.state.body === ""){
            this.setState({errorMessage: 
                "To submit your review, please explain your rating to others."})
        } 
        else if(this.props.currentUserId === null){
            this.props.openModal("login")

        }else{

            const prevForm = Object.assign({}, this.state);
            prevForm.user_id = this.props.currentUserId

            this.setState({...prevForm}, () => {
                this.props.action(this.state).then(action => {
                debugger
            
                this.props.history.push(`/biz/${action.review.business_id}`)
        })
            })
            
        }
        
        

    }

    update(field, starRating){

        if (field === "rating"){
            this.setState({[field]: starRating})
        } else if (field === "sidebar"){
            this.setState({sideBarActive: !this.state.sideBarActive})
        } else {
            return e => this.setState({ [field]: e.target.value }) 
        }
    }

    // updateStars(e){

    //     console.log(e.currentTarget.attributes[1].nodeValue)
    //     const starIdx = parseInt(e.currentTarget.attributes[1].nodeValue);

    //     this.setState({starNum: starIdx})
    // }


    render() {
        
        const {business} = this.props;
        const chevronLeft = <FontAwesomeIcon icon={faChevronLeft} size="1x" />
       
        // if (business){
        //     if (this.state.business_id === null){

        //         this.setState({business_id: business.id})
        //     }
        // }


        // const myStars = generateAllStars(this.state.starNum);



    return (
        <>
        <div className="top-show-nav">
            <ul className="flex-row-space-btwn">
                {/* Items are flexxed */}
                <div className="icon-box-nav">
                    <Link to="/" ><img src={window.yelp_white_sm} width="80vw" height="80vh"></img></Link>
                </div>
                
                <div className="login-signup-buttons-container">
                    <button onClick={() => this.props.openModal("login")} className="login-button">Login</button>
                    {/* <Link to="/login" className="login-button">Login</Link> */}
                    {/* <Link to="/signup" className="signup-clear">Signup</Link> */}
                    <button onClick={() => this.props.openModal("signup")} className="signup-clear">Signup</button>
                </div>
                {/* End Flexx */}
            </ul>
        </div>
            <div className="review-form-container">
                <div className="review-content-container">
                    <section className="review-form-itself-container flex-col-full">
                        <div className="business-title biz-title-margin">{business ? business.business_name : null}</div>
                        <section className="content-border-box flex-col-full">
                            
                            <RainbowStars update={this.update} isReviewForm={true}/>
                              
                            <textarea onChange={this.update("body")} className="review-text-input" name="" id="" cols="30" rows="20" 
                            placeholder="This coffee shop is incredible! They offer fresh organic baked goods from the local
                            bakeries! What would be better! You can also chat coffee with the barista there. They have all been
                            trained by the Coffee Guru who hosts field trips to coffee farms around the world! "></textarea>

                            <div className="error-msg-review-container">
                                <p className="error-msg">{this.state.errorMessage}</p>
                            </div>
                        </section>

                        <div className="submit-review-long-container">
                            <button onClick={this.handleSubmit} className="open-sans">
                                <span className="width-200">Post Review</span>
                            </button>
                        </div>
                    </section>

                        
                </div>
                {/* Side Bar */}
                <section className={this.state.sideBarActive ? "sidebar-container open-sidebar" : "sidebar-container closed-sidebar"}>
                    <button onClick={() => this.update("sidebar")} className="sidebar-review-button">
                        {chevronLeft}
                    </button>
                    <div className="sidebar-inner">

                    </div>

                </section>
                

            </div>
        </>
    )

}
}

export default withRouter(ReviewAddForm);