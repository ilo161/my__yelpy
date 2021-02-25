import { 
    RECEIVE_BUSINESS,
    RECEIVE_BUSINESSES, 
    REMOVE_BUSINESS
} from "../actions/business_actions";

import {DELETE_REVIEW} from "../actions/review_actions"
import merge from "lodash/merge";

const BusinessesReducer = (state = {}, action) => {

    Object.freeze(state);

    let newState = {};
    let prevState;
    switch(action.type){
        case RECEIVE_BUSINESSES:
            newState = merge({}, action.businesses);
            return newState;
        case RECEIVE_BUSINESS:
            newState = merge({}, state, {[action.business.id]: action.business})
            return newState;
        case REMOVE_BUSINESS:
            prevState = Object.assign({}, state);
            delete prevState[action.businessId];
            return prevState;
        case DELETE_REVIEW:
            prevState = merge({}, state)
            let reviewIdx;
            const reviewObjs = prevState[action.review.business_id].reviews.map(review => {
                return review
            })
            reviewObjs.forEach((review, idx) => {
                if(review.id === action.review.id){
                    reviewIdx = idx;
                }
            })
            prevState[action.review.business_id].reviews.splice(reviewIdx,1)


            return prevState
        default:
            return state;
    }
}

export default BusinessesReducer;