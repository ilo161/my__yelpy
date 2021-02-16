import React from "react";
import { connect } from 'react-redux';

import { requestLogout } from "../../actions/session_actions"


const UserMedallion = ({requestLogout, currentUser}) => {


    return (
        <div className="user-medallion-container">
            <div className="user-medallion-content">
                
            </div>
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
