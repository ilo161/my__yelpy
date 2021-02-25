import {connect} from "react-redux";
import React from "react";
import ReviewIndexItem from "./review_index_item"
import {requestDestroyReview} from "../../actions/review_actions"

const mSTP = state => {

    let currentUserId;
    if( Boolean(state.session.currentUser)){
        currentUserId = state.session.currentUser.id;
    }

    return {
        currentUserId,
        loggedIn: Boolean(state.session.currentUser)
    }
}

const mDTP = dispatch => {

    return {
        destroyReview: id => dispatch(requestDestroyReview(id))
    }
}

export default connect(mSTP, mDTP)(ReviewIndexItem)