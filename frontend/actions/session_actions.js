import * as SessionApiUtil from "../util/session_api_util"


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

export const requestLogin = user => dispatch => {

    return SessionApiUtil.loginSession(user)
    .then(user => {

        dispatch(receiveCurrentUser(user))
    }, errors => {

        dispatch(receiveErrors(errors.responseJSON))
    })
}

export const requestLogout = () => dispatch => {
    return SessionApiUtil.logoutSession()
    .then( response => dispatch(logoutCurrentUser()))
}

export const requestSignupUser = user => dispatch => {
    return SessionApiUtil.signupUser(user)
    .then(user => {

        dispatch(receiveCurrentUser(user))
    },
    errors => {
        dispatch(receiveErrors(errors.responseJSON))
    })
}