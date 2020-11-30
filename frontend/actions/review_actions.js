import * as ReviewApiUtil from "../util/review_api_util";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

const receiveReview = review => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

export const requestCreateReview = review => dispatch => {
    return ReviewApiUtil.createReview(review)
    .then((review) => dispatch(receiveReview(review)))
}

