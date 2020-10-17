import {} from 'react-redux'
import { createStore, combineReducers ,applyMiddleware} from 'redux'


import logger from 'redux-logger'
import thunk from 'redux-thunk'

export const ConfigStore=()=>{
    const store=createStore(combineReducers({
        //Dishes,Leaders,Promotions,Comments are seperate reducers for each.
        
    }),applyMiddleware(thunk,
        logger 
        //used to log prev state action next state.
        ))
    return store;
}