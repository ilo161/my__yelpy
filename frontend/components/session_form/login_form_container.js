import React from "react";
import {connect} from 'react-redux';
import LoginForm from "./login_form";
import { requestLogin } from "../../actions/session_actions";
import {openModal, closeModal} from "../../actions/modal_actions"



const mSTP = state => {

    return {
        user: {username: "", password: ""},
        test: {test: "test"}
    }
}

const mDTP = dispatch => {

    return {
        action: credentials => dispatch(requestLogin(credentials)),
        openModal: (type) => dispatch(openModal(type)),
        closeModal: (type) => dispatch(closeModal(type))
    }
}

export default connect(mSTP, mDTP)(LoginForm);