import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from "./store/store"

import {requestLogin, requestLogout, requestSignupUser} from "./actions/session_actions"

import {
    requestSignupBusiness, 
    requestDeleteBusiness, 
    requestBusiness, 
    requestBusinesses,
requestUpdateBusiness
 } from "./actions/business_actions"

 import {requestSearchResults} from "./actions/search_actions"




/*
Write an entry point file that renders the `Root` component, with a `store`
prop passed in, inside the div with id 'root'.
*/


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let preloadedState = undefined;

    if (window.currentUser){
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        }
    }
    const store = configureStore(preloadedState);


    //Testing Start
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.requestSignupUser = requestSignupUser;
    window.requestLogin = requestLogin;
    window.requestLogout = requestLogout;

    //Biz
    window.requestSignupBusiness = requestSignupBusiness;
    window.requestDeleteBusiness = requestDeleteBusiness;
    window.requestBusiness = requestBusiness;
    window.requestBusinesses = requestBusinesses;
    window.requestUpdateBusiness = requestUpdateBusiness;
    // Testing End

    //search
    window.requestSearchResults = requestSearchResults;


    ReactDOM.render(<Root store={store}/>, root)  
    // ReactDOM.render(<h1>Hello from h1</h1>, root)  
});