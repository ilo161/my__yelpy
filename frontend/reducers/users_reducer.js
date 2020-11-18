import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
    RECEIVE_SESSION_ERRORS
} from "../actions/session_actions"
import merge from "lodash/merge"




const usersReducer = (state = {}, action) => {
       Object.freeze(state);

       let newState = {};
       switch(action.type){
           //replacing key in case user has updated information???
            case RECEIVE_CURRENT_USER:
                return Object.assign({}, state, 
                    {[action.currentUser.id]: action.currentUser})
            default:
                return state;
       }
    
}

export default usersReducer;