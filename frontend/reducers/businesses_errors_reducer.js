import {
RECEIVE_BUSINESS_ERRORS,
RECEIVE_BUSINESS,
RECEIVE_BUSINESSES,
REMOVE_BUSINESS
} from "../actions/business_actions"

const BusinessesErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_BUSINESS_ERRORS:

            return action.errors
        case RECEIVE_BUSINESS:
            return []
        case RECEIVE_BUSINESSES:

            return []
        case REMOVE_BUSINESS:
            return []
        default:
            return state;

    }

    
}

export default BusinessesErrorsReducer;