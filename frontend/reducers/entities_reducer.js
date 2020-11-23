import { combineReducers } from "redux";
import usersReducer  from "./users_reducer";
import BusinessesReducer from "./businesses_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    businesses: BusinessesReducer
})


export default entitiesReducer;