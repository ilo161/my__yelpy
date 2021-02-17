
export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

const requestUpdateBounds = bounds => {
    return {
        type: UPDATE_BOUNDS,
        bounds
    }
}