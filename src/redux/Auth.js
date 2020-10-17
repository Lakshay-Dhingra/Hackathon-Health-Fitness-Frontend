import * as ActionTypes from './ActionType'
import cookie from 'react-cookies'
var initState={
    user:null,
    loged:cookie.load('accessToken')?true:false
}
export const Auth=(state=initState,action)=>{
    switch(action.type){
        case ActionTypes.LOGIN:
            return({
                user:action.payload,
                loged:true
            })
        case ActionTypes.LOGOUT:
            return({
                user:null,
                loged:false
            })
        default:
            return state
    }
}