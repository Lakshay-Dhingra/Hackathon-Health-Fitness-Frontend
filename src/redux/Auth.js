import * as ActionTypes from './ActionType'
import cookie from 'react-cookies'
var initState={
    login:cookie.load('user')?true:false,
    username:cookie.load('user'),
    errmsg:null
}
export const Auth=(state=initState,action)=>{
    switch(action.type){
        case ActionTypes.LOGIN:
            return({...state,
                ...action.payload,
                login:cookie.load('user')?true:false,
                username:cookie.load('user')
            })
        case ActionTypes.LOGOUT:
            return({
                ...state,
                ...action.payload,
                login:false,
                username:null
            })
        default:
            return state
    }
}