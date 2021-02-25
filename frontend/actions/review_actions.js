import * as ReviewApiUtil from "../util/review_api_util";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";

const receiveReview = review => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

const removeReview = review => {
    return {
        type: DELETE_REVIEW,
        review
    }
}



export const requestCreateReview = review => dispatch => {
    return ReviewApiUtil.createReview(review)
    .then((review) => dispatch(receiveReview(review)))
}

export const requestDestroyReview = review => dispatch => {
    return ReviewApiUtil.destroyReview(review.id)
    .then((review) => dispatch(removeReview(review)))
}



