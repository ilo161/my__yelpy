import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
    RECEIVE_SESSION_ERRORS
} from "../actions/session_actions"
import merge from "lodash/merge"




const usersReducer = (state = _nullUser, action) => {
       Object.freeze(state);

       let newState = {};
       switch(action.type){
            case RECEIVE_CURRENT_USER:
                return Object.assign({}, state, 
                    {[action.currentUser.id]: action.currentUser})

            case LOGOUT_CURRENT_USER:
                return _nullUser;
            case RECEIVE_SESSION_ERRORS:

            default:
                return state;
       }
    
}

export default usersReducer;