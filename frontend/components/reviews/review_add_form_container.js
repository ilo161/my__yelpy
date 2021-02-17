import { connect } from 'react-redux';
import { requestCreateReview } from "../../actions/review_actions";
import {requestBusiness} from "../../actions/business_actions"
import { openModal } from "../../actions/modal_actions"
import ReviewAddForm from "./review_add_form";

const mSTP = (state, url) => {

    const id = url.match.params.bizId;
    let currentUserId;
    if( Boolean(state.session.currentUser)){
        currentUserId = state.session.currentUser.id;
    }

    return {
        id,
        business: state.entities.businesses[id],
        form: {body: "", business_id: id, user_id: currentUserId, rating: 0 },
        currentUserId,
        loggedIn: Boolean(state.session.currentUser)

    }
}


const mDTP = dispatch => {
    return {
        requestBusiness: (bizId) => dispatch(requestBusiness(bizId)),
        action: review => dispatch(requestCreateReview(review)),
        openModal: (type) => dispatch(openModal(type))
    }
}

export default connect(mSTP, mDTP)(ReviewAddForm)
