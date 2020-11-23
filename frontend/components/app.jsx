import React from "react";
import {Route, Switch} from "react-router-dom";

import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container"
import LoginPageContainer from "./login/login_page_container"
import SignUpFormContainer from "./session_form/sign_up_form_container";
import BusinessShowContainer from "./business/business_show_container";

const App = () => (
  <div className="master-container">
    {/* <GreetingContainer /> */}
  <Switch>
    <Route exact path="/" component={GreetingContainer}/>
    <Route exact path="/login" component={LoginPageContainer}/>
    <Route exact path="/biz/:bizId" component={BusinessShowContainer}/>
    <Route path="/signup" component={SignUpFormContainer}/>
  </Switch>
  </div>
);

export default App;