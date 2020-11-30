import React from 'react';
import {Link} from 'react-router-dom';
// import { requestLogin } from '../../actions/session_actions';

import SignUpFormContainer from "../session_form/sign_up_form_container"
import LoginFormContainer from "../session_form/login_form_container"
import { requestLogin } from '../../actions/session_actions';
// import  OrderInContainer  from "../nav_header/order_in_header_container";
import SearchCityNavContainer from "../search/search_city_nav_container";

// JumboTron
import GreetingJumboTronContainer from "./greeting_jumbotron_container"



class Greeting extends React.Component {

    constructor(props){
        super(props)


        //signLogin is an Array containing two Components
        // depending on which button the user clicks on triggers a render
        this.state = {
            signLogin: null,
            orderInNav: true
        }

    
    }

    switchRender(idx){
        this.setState({signLogin: idx })
    }

    componentDidMount(){

        this.props.requestAllBusinesses()
    }



    render() {

        
        const {currentUser, requestLogout, requestLogin, errors, allBiz} = this.props;


        const signLoginArray = [<SignUpFormContainer/>, <LoginFormContainer/>];

        let listOErrors = [];

        if (errors.base){
            if (errors.base.length > 0){
                listOErrors = errors.base
            }
        }
        let allBizIndexArr;
        const allBizIndex = (allbizs) => {
            let allBizTemp = allbizs
            let allBizIndexArrTemp = allBizTemp.map((biz) => {
                return <Link className="hyperlink-teal" to={`/biz/${biz.id}`}>{biz.business_name}</Link>
            })


            return allBizIndexArrTemp
            // allBizIndex = allBiz.map
        }

        if (this.props.allBiz){
            allBizIndexArr = allBizIndex(allBiz)
        }


        const sessionLinks = () => {
            return (
            <div className="session-links-container">
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
                            <button onClick={() => requestLogin({username: "DemoUser", password:"123456"}) }>Demo User - Login</button>
                        </div>
                        {/* End Flexx */}
                    </ul>
                    {/* End Header NAV */}
                </div>

                <p>{errors ? listOErrors[0] : null}</p>
                <nav className="login-signup">
                </nav>
                <div className="which-form">
                    {signLoginArray[this.state.signLogin]}
                </div>
                <GreetingJumboTronContainer/>
                <div>
                    <ul className="flex-col-full">
                        {this.props.allBiz ? allBizIndexArr : null}
                    </ul>
                </div>
            </div>
            )
        }


        const personalGreeting = () => {
            return (
                <>
                    <div className="session-links-container">
                    <div className="top-show-nav">
                        <ul className="flex-row-start">
                            {/* Items are flexxed */}
                            <div className="icon-box-nav">
                                <img src={window.yelp_white_sm} width="80vw" height="80vh"></img>
                            </div>
                            <SearchCityNavContainer/>
                            <div className="biz-review-nav-text">
                                <Link className="header-link" to="/">For Businesses!</Link>
                                <Link className="header-link" to="/">Write a Review</Link>
                            </div>
                            <div className="login-signup-buttons-container">
                                <Link to="/login" className="login-button">Login</Link>
                                <Link to="/signup" className="signup-clear">Signup</Link>
                                <button onClick={() => requestLogin({username: "DemoUser", password:"123456"}) }>Demo User - Login</button>
                            </div>
                            {/* End Flexx */}
                        </ul>
                    </div>
                    </div>
                        {/* End Header NAV ^^*/}
                    <div className="personal-greeting-container">
                        <nav className="personal-greeting">
                            <ul>
                                <li> Welcome {currentUser.username}</li>
                                <li> <button onClick={requestLogout}>Logout!</button>
                                {currentUser.username}
                                </li>
                            </ul>
                        </nav>
                        <GreetingJumboTronContainer/>
                        <div>
                            <p>hello form mars</p>
                            <ul className="flex-col-full">
                                {this.props.allBiz ? allBizIndexArr : null}
                            </ul>
                        </div>
                    </div>
                </>
            )
        }
        return currentUser ? personalGreeting() : sessionLinks();
}
}
    



export default Greeting;