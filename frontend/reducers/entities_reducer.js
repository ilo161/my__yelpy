import { combineReducers } from "redux";
import usersReducer  from "./users_reducer";
import BusinessesReducer from "./businesses_reducer";
import reviewsReducer from "./reviews_reducer";
import SearchReducer from "./search_reducer"

const entitiesReducer = combineReducers({
    users: usersReducer,
    businesses: BusinessesReducer,
    reviews: reviewsReducer,
    search: SearchReducer
})


export default entitiesReducer;