import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer"
import BusinessesErrorsReducer from "./businesses_errors_reducer"

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    businesses: BusinessesErrorsReducer
})


export default errorsReducer;