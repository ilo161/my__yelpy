import React from 'react';
import { connect } from 'react-redux';
import {
    requestLogin, 
    requestSignupUser
} from "../../actions/session_actions";

import SignUpForm from './sign_up_form';


const mSTP = (state, url) => {
    return {
        user: {username: "", password: "", firstName: "",
    lastName: "", email:"", zipCode:""}
    }
}

const mDTP = dispatch => {
    return {
        action: (user) => dispatch(requestSignupUser(user))
        // action: user => dispatch(requestLogin(user))
    }
}

export default connect(mSTP, mDTP)(SignUpForm);