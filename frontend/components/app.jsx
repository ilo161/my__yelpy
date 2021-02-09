import React from "react";
import {Route, Switch} from "react-router-dom";

import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container"
import LoginPageContainer from "./login/login_page_container"
import SignUpPageContainer from "./login/sign_up_page_container"
import SignUpFormContainer from "./session_form/sign_up_form_container";
import BusinessShowContainer from "./business/business_show_container";
import ReviewAddFormContainer from "./reviews/review_add_form_container";
import Modal from "./modal/modal"

const App = () => (
  <div className="master-container">
    {/* <GreetingContainer /> */}
  <Modal/>
  <Switch>
    <Route exact path="/" component={GreetingContainer}/>
    <Route exact path="/login" component={LoginPageContainer}/>
    <Route exact path="/biz/:bizId" component={BusinessShowContainer}/>
    <Route exact path="/biz/:bizId/review/new" component={ReviewAddFormContainer}/>
    {/* <Route exact path="/review/new" component={ReviewAddFormContainer}/> */}
    <Route path="/signup" component={SignUpPageContainer}/>
  </Switch>
  </div>
);

export default App;