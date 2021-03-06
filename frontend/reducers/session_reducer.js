import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
    RECEIVE_SESSION_ERRORS
} from "../actions/session_actions"
import merge from "lodash/merge"


// const _nullUser = Object.freeze({
//   id: null
// });
const _nullUser = Object.freeze({
    currentUser: null
});

const sessionReducer = (state = _nullUser, action) => {
       Object.freeze(state);

       let newState = {};
       switch(action.type){
            case RECEIVE_CURRENT_USER:
                return Object.assign({}, {currentUser: action.currentUser})
            case LOGOUT_CURRENT_USER:
                return _nullUser;
            default:
                return state;
       }
    
}

export default sessionReducer;