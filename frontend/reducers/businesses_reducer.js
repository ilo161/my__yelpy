import { 
    RECEIVE_BUSINESS,
    RECEIVE_BUSINESSES, 
    REMOVE_BUSINESS
} from "../actions/business_actions";
import merge from "lodash/merge";

const BusinessesReducer = (state = {}, action) => {

    Object.freeze(state);

    let newState = {};
    switch(action.type){
        case RECEIVE_BUSINESSES:
            newState = merge({}, action.businesses);
            return newState;
        case RECEIVE_BUSINESS:
            newState = merge({}, state, {[action.business.id]: action.business})
            return newState;
        case REMOVE_BUSINESS:
            let prevState = Object.assign({}, state);
            delete prevState[action.businessId];
            return prevState;
        default:
            return state;
    }
}

export default BusinessesReducer;