import React from 'react';
import {openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import {requestLogin, requestSignupUser} from "../../actions/session_actions"
import LoginFormContainer from '../session_form/login_form_container'
import SignupFormContainer from '../session_form/sign_up_form_container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



function Modal({modal, closeModal, renderLoginForm, renderSignForm, closeModalDiv}) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer renderSignForm={renderSignForm} closeModalDiv={closeModalDiv} isModal={true} />;
    //   component = <p>login</p>;
      break;
    case 'signup':
      component = <SignupFormContainer closeModal={closeModal} renderLoginForm={renderLoginForm}  closeModalDiv={closeModalDiv} isModal={true} />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child-400" onClick={e => e.stopPropagation()}>
        { component }
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
     const exSym = <FontAwesomeIcon className="exit-x-content" icon={faTimes} size="1x" />
    const closeModalDiv = (<div onClick={() => dispatch(closeModal())} className="exit-x-box">
                                <div className="exit-x-author">
                                {exSym}
                                </div>
                             </div>)


  return {
    processForm: (user) => dispatch(requestLogin(user)),  
    closeModal: () => dispatch(closeModal()),
    renderSignForm: () => dispatch(openModal('signup')),
    renderLoginForm: () => dispatch(openModal('login')),
    closeModalDiv
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
