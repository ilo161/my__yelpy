import {requestSearchResults} from "./search_actions"
export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

const receiveUpdateBounds = bounds => {
    return {
        type: UPDATE_BOUNDS,
        bounds
    }
}

export const requestUpdateBounds = bounds => dispatch => {

    dispatch(receiveUpdateBounds(bounds));

    return requestSearchResults
}