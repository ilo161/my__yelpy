import React from 'react';
import { connect } from 'react-redux';
import Greeting from "./greeting";
import {requestLogout, requestLogin} from "../../actions/session_actions";

const mSTP = (state) => {

    return {
        errors: state.errors.session,
        currentUser: state.entities.users[state.session.id]
    };
};

const mDTP = (dispatch) => {
    return {
        requestLogout: () => dispatch(requestLogout()),
        requestLogin: (credentials) => dispatch(requestLogin(credentials))
    }
}

export default connect(mSTP,mDTP)(Greeting);