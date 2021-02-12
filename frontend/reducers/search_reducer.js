import {RECEIVE_SEARCH_RESULTS, SAVE_SEARCH_QUERY} from "../actions/search_actions"

const SearchReducer = (state = {}, action) => {
    Object.freeze(state)

    switch(action.type){
        case RECEIVE_SEARCH_RESULTS:
            return action.searchResults
        case SAVE_SEARCH_QUERY:
            let prevState = Object.assign({}, state)
            prevState["searchQuery"] = action.searchQuery
            return prevState
        default:
            return state
    }
}

export default SearchReducer;