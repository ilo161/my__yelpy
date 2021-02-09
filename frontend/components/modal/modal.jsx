import React from 'react';
import {openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import {requestLogin, requestSignupUser} from "../../actions/session_actions"
import LoginFormContainer from '../session_form/login_form_container'

// import SignupFormContainer from '../session_form/signup_form_container';

function Modal({modal, closeModal, otherForm}) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer isModal={true} />;
    //   component = <p>login</p>;
      break;
    case 'signup':
      component = <p>signup</p>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
        {otherForm}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    formType: "login"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(requestLogin(user)),  
    closeModal: () => dispatch(closeModal()),
    otherForm: (
      <button className="signup-clear" 
      onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
