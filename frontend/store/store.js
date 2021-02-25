import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "../reducers/root_reducer"

// My attempt
// const thunk = (next,action) => dispatch => {
//     return (next) => {
//         if(typeof next === 'function'){
//             return action(store.state, store.dispatch)
//         }

//         return next(action);
//     }
// }

//correct version
// const thunk = function(store){
//     return function(next) {
//         return function(action) {
//             if (typeof action === "function"){
//                 return action(store.dispatch, store.getState)
//             }

//             return next(action)
//         }
//     }
// }

//Type A for Debugging with Logger
// const configureStore = ( preloadedState = {} ) => {
//     return createStore(rootReducer,
//          preloadedState, applyMiddleware(thunk, logger))
// }

//Type B for production
const configureStore = ( preloadedState = {} ) => {
    return createStore(rootReducer,
         preloadedState, applyMiddleware(thunk))
}


export default configureStore;