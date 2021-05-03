import React from 'react';
import { connect } from 'react-redux';
import Greeting from "./greeting";
import {requestLogout, requestLogin} from "../../actions/session_actions";
import {requestBusinesses, requestBusiness} from "../../actions/business_actions";

const mSTP = (state) => {

    return {
        errors: state.errors.session,
        currentUser: state.entities.users[state.session.id],
        allBiz: Object.values(state.entities.businesses)
    };
};

const mDTP = (dispatch) => {
    return {
        requestLogout: () => dispatch(requestLogout()),
        requestLogin: (credentials) => dispatch(requestLogin(credentials)),
        requestAllBusinesses: () => dispatch(requestBusinesses()),
        requestBusiness: (bizId) => dispatch(requestBusiness(bizId))
    }
}

export default connect(mSTP,mDTP)(Greeting);