import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Modal from "./users/modal"

const Root = () => {

    return (
        <div>

        <p>Welcome to My Yelpy</p>
        <Modal/>
        
        </div>
    )
}

export default Root;