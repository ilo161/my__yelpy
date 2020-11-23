import * as BusinessApiUtil from "../util/business_api_util";

// fetchBusinesses()
// fetchBusiness(id)
// createBusiness(biz)
// updateBusiness(id)
// deleteBusiness(id)

export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const REMOVE_BUSINESS = "REMOVE_BUSINESS";
export const RECEIVE_BUSINESS_ERRORS = "RECEIVE_BUSINESS_ERRORS";

const receiveBusinesses = (businesses) => {
    return {
        type: RECEIVE_BUSINESSES,
        businesses
    }
}

const receiveBusiness = (business) => {
    return {
        type: RECEIVE_BUSINESS,
        business
    }
}

const removeBusiness = (businessId) => {
    return {
        type: REMOVE_BUSINESS,
        businessId
    }
}

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_BUSINESS_ERRORS,
        errors
    }
}


//index
export const requestBusinesses = () => dispatch => {
    return BusinessApiUtil.fetchBusinesses()
    .then(businesses => {
        return dispatch(receiveBusinesses(businesses)
    )},
    errors => {

    return  dispatch(receiveErrors(errors.statusText))
    })
}

//show
export const requestBusiness = (bizId) => dispatch => {
    return BusinessApiUtil.fetchBusiness(bizId)
    .then(
    business => dispatch(receiveBusiness(business)),
    errors => dispatch(receiveErrors(errors.statusText))
    )
}

//create
export const requestSignupBusiness = (business) => dispatch => {
    return BusinessApiUtil.createBusiness(business)
    .then(businessPayload => dispatch(receiveBusiness(businessPayload)),
    errors => dispatch(receiveErrors(errors.statusText)))
}   

//delete
export const requestDeleteBusiness = (bizId) => dispatch => {
    return BusinessApiUtil.deleteBusiness(bizId)
    .then(bizDeleteId => dispatch(removeBusiness(bizDeleteId)),
    errors => {
        debugger
        return dispatch(receiveErrors(errors.statusText))
    })
}

//update
export const requestUpdateBusiness = business => dispatch => {
    return BusinessApiUtil.updateBusiness(business)
    .then(businessPayload => dispatch(receiveBusiness(businessPayload)),
    errors => dispatch(receiveErrors(errors.statusText)))
}