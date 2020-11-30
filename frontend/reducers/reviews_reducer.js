import {
    RECEIVE_REVIEW
} from "../actions/review_actions";
import merge from "lodash/merge";

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = {};

    switch(action.type){
        case RECEIVE_REVIEW:
            return merge({}, state, { [action.review.id]: action.review } )

        default:
            return state;
    }
}

export default reviewsReducer;