import {
    DELETE_REVIEW,
    RECEIVE_REVIEW
} from "../actions/review_actions";
import merge from "lodash/merge";

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = {};

    switch(action.type){
        case RECEIVE_REVIEW:
            return merge({}, state, { [action.review.id]: action.review } )
        // case DELETE_REVIEW:
            // const prevState = merge({}, state)
            // debugger
            // delete prevState[action.id]
            // return prevState
        default:
            return state;
    }
}

export default reviewsReducer;