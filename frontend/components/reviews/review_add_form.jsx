import React from "react";


const reviewForm = () => {
    return (
        <>
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
                        </div>
                        {/* End Flexx */}
                    </ul>
                </div>
                <div className="review-form-container">

                </div>
        </>
    )

}