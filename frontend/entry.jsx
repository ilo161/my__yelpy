import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
// import configureStore from './store/store';

/*
Write an entry point file that renders the `Root` component, with a `store`
prop passed in, inside the div with id 'root'.
*/


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    // const store = configureStore();
    console.log("hola")
    // ReactDOM.render(<Root store={store}/>, root)
    ReactDOM.render(<Root/>, root)  
    // ReactDOM.render(<h1>Hello from h1</h1>, root)  
});