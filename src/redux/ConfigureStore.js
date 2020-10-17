import {} from 'react-redux'
import { createStore, combineReducers ,applyMiddleware} from 'redux'


import logger from 'redux-logger'
import thunk from 'redux-thunk'

import {Auth} from './Auth'

export const ConfigStore=()=>{
    const store=createStore(combineReducers({
        Auth:Auth
    }),applyMiddleware(thunk,
        logger 
        //used to log prev state action next state.
        ))
    return store;
}