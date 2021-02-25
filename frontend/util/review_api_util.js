export const createReview = (review) => {
    return $.ajax({
        url:`/api/reviews`,
        method: "POST",
        data: {review},
        contentType: "application/json"
    });
}

export const destroyReview = (reviewId) => {
    return $.ajax({
        url:`/api/reviews/${reviewId}`,
        method: "DELETE"
    });
}

