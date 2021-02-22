import * as SearchAPIUtil from "../util/search_api_util"

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const SAVE_SEARCH_QUERY = "SAVE_SEARCH_QUERY";

const receiveSearchResults = searchResults => {
    return {
        type: RECEIVE_SEARCH_RESULTS,
        searchResults
    }
}

const saveSearchQuery = searchQuery => {
    return {
        type: SAVE_SEARCH_QUERY,
        searchQuery
    }
}



export const requestSearchResults = (searchQuery, filters) => dispatch => {
    return SearchAPIUtil.fetchSearchResults({searchQuery, filters})
    .then(searchResults => {
        dispatch(receiveSearchResults(searchResults))
        dispatch(saveSearchQuery(searchQuery))
    })
}
