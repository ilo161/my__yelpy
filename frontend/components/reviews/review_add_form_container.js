import { connect } from 'react-redux';
import { requestCreateReview } from "../../actions/review_actions";
import ReviewAddForm from "./review_add_form";

const mSTP = (state, url) => {
    

    return {
        form: {title: "", body: "", business_id: null, user_id: 1, rating: 1 }
    }
}

const mDTP = dispatch => {
    return {
        action: review => dispatch(requestCreateReview(review))
    }
}

export default connect(mSTP, mDTP)(ReviewAddForm)
