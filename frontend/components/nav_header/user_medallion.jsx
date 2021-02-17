import React from "react";
import { useState } from "react";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faStar } from '@fortawesome/free-solid-svg-icons';

import { requestLogout } from "../../actions/session_actions"


const UserMedallion = ({requestLogout, currentUser}) => {
    const [showOptions, toggleOptions ] = useState(false);

    const downAngle = <FontAwesomeIcon icon={faAngleDown} size="1x"/>
    const star = <FontAwesomeIcon icon={faStar} size="1x" />

    const starFieldRed = () => (
                    <div className="star-background-red-sm">
                        <div className="rating-icons-center sm-star"><span>{star}</span></div>
                    </div>
                )

    const dropdown = (<div className="medallion-dropdown-container">
                <div className="medallion-drop-down-content flex-col-start">
                    {/* first row */}
                    <div className="user-details-wrapper flex-row-start">
                        <img className="avatar-60-60" src={currentUser.userAvatarUrl} alt={currentUser.first_name}/>
                        <div className="user-metadata flex-col-start">
                            <span className="user-first">{currentUser.first_name}</span>
                            <span className=" user-zip">{currentUser.zip_code}</span>
                            <div className="flex-row-start align-content-center">
                                <div>{starFieldRed()}</div><span className="user-count">{currentUser.user_total_reviews}</span>
                            </div>
                        </div>
                    </div>
                    {/* second row */}
                    <div className="drop-down-wrapper">
                        <span onClick={requestLogout} 
                        className="drop-down-logout text-size-large open-sans">Logout</span>
                    </div>
                </div>
            </div>)


    return (
        <div className="user-medallion-container">
            <div className="user-medallion-content flex-row-start">
                <img className="avatar-medalion" src={currentUser.userAvatarUrl} alt={currentUser.first_name}/>
                <div onClick={()=> toggleOptions(!showOptions)} className="medallion-options flex-col-start">
                    <div className="medallion-wrapper">
                        {downAngle}
                    </div>
                </div>
            </div>
            {showOptions ? dropdown : null}
            
        </div>
    )

}

const mSTP = state => {

    return {
        currentUser: state.session.currentUser
    }
}

const mDTP = dispatch => {

    return {
        requestLogout: () => dispatch(requestLogout())
    }
}

export default connect(mSTP, mDTP)(UserMedallion);
