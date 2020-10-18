import * as ActionTypes from './ActionType'
import {BaseUrl} from './baseUrl'
// import fetch from 'cross-fetch'
import cookie from 'react-cookies'

const resolveError=(err)=>{
    if(err.message==='jwt expired')
        return 'Retry'
    if(err.status===401){
        if(err.message==='Unauthorized')
            return 'Login First'
        else
            return err.message
    }
    else if(err.status===403)
        if(err.message==='Forbidden')
            return 'You are not allowed following operation'
        else
            return err.message
    else if(err.status===404)
        if(err.message==='Not Found')
            return 'Data not found on server.'
        else
            return err.message
    else if(err.status===422)
        if(err.message==='Unprocessable Entity')
            return 'Wrong data entered.Try again with right data'
        else
            return err.message
    else if(err.status===400)
        if(err.message==='Bad Request')
            return 'Error occured.Please try again.'
        else
            return err.message
    else if(err.status===500)
        if(err.message==='Internal Server Error')
            return 'Server error occured.Please try again.'
        else
            return err.message
}
const AuthHeader=()=>{
    const auth={'Content-type':"application/json"}
    if(cookie.load('accessToken'))
        auth["authorization"]=`Bearer ${cookie.load('accessToken')}`
    return auth;
}
const getrefreshToken=()=>{
    const body={}
    if(cookie.load('refreshToken'))
        body["refreshToken"]=`${cookie.load('refreshToken')}`
    return body;
}
const saveCookie=(accesskey,refreshkey)=>{    
    cookie.save('accessToken',accesskey,{secure:true,expire:new Date(new Date().getTime()+7*3600*1000)});
    cookie.save('refreshToken',refreshkey,{secure:true,expire:new Date(new Date().getTime()+24*3600*1000)});
}
const destroyCookie=()=>{
    cookie.remove('accessToken')
    cookie.remove('refreshToken')
}
const handleResponse=(response)=>{
    return new Promise((resolve,reject)=>{
        if(response.ok)
            response.json()
            .then(res=>{resolve(res)})
        else
            response.json()
            .then(res=>{reject(res)})
    })
}
const handleTokenExpire=(err,dispatch,next)=>{
    let errMsg=resolveError(err)
    if(errMsg==='Retry')
        return RefreshToken()
        .then((res)=>{
            return dispatch(next())
            .then(res=>res,err=>err)
        }
        ,err=>{
            destroyCookie()
            return 'You are logged out.Please try again'
        })
    else
        return errMsg;
}
const RefreshToken=()=>{
    return fetch(BaseUrl+'users/refresh',{
        method:'POST',
        body:JSON.stringify(getrefreshToken()),
        headers:AuthHeader()
    })
    .then(response=>handleResponse(response))
    .then((res)=>{
        destroyCookie()
        saveCookie(res.accessToken,res.refreshToken)
        return true;
    },(err)=>{
        destroyCookie()
        return resolveError(err)
    })
}
const loginAction = (user) => ({
    type: ActionTypes.LOGIN,
    payload: user
});
const logoutAction = ()=>({
    type: ActionTypes.LOGOUT,
    payload:{}
})
const ProfileAction = (actiontype,user) => ({
    type: actiontype,
    payload: user
});

export const login=(username,password)=>(dispatch)=>{
    return fetch(BaseUrl+'users/login',{
        method:'POST',
        body:JSON.stringify({username:username,password:password}),
        headers:AuthHeader()
    })
    .then(response=>handleResponse(response))
    .then((res)=>{
        destroyCookie()
        saveCookie(res.accesstoken,res.refreshtoken)
        dispatch(loginAction(res.User))
        return 'Logged in';        
    },(err)=>{
        return resolveError(err)
    })
}
export const logout=()=>(dispatch)=>{
    return fetch(BaseUrl+'users/logout',{
        method:'DELETE',
        headers:AuthHeader(),
        body:JSON.stringify(getrefreshToken())
    })
    .then(response=>handleResponse(response))
    .then((res)=>{
        destroyCookie()
        dispatch(logoutAction(res.User))
        return res.status
    },err=>{
        let e=handleTokenExpire(err,dispatch,x)
        if(e instanceof Promise){
            return e.then(res=>{return res})
        }
        else
            return e
    })
}
export const register=(username,password)=>(dispatch)=>{
    return fetch(BaseUrl+'users/register',{
        method:'POST',
        body:JSON.stringify({username:username,password:password}),
        headers:AuthHeader(),
    })
    .then(response=>handleResponse(response))
    .then((res)=>{
        return res.status;        
    },(err)=>{
        return resolveError(err)
    })
}
export const x=()=>(dispatch)=>{
    return fetch(BaseUrl+'users/',{
        method:'GET',
        headers:AuthHeader()
    })
    .then(response=>handleResponse(response))
    .then((res)=>{
        return res
    },err=>{
        let e=handleTokenExpire(err,dispatch,x)
        if(e instanceof Promise){
            return e.then(res=>{return res})
        }
        else
            return e
    })
}
export const AddProfilePic=(pic)=>(dispatch)=>{
    let fd=new FormData();
    fd.append('profilePic',pic.profilePic[0])
    return fetch(BaseUrl+'users/profilePic',{
        method:'POST',
        body:fd,
        headers:{"authorization":`Bearer ${cookie.load('accessToken')}`},
    })
    .then(response=>handleResponse(response))
    .then((res)=>{
        dispatch(ProfileAction(ActionTypes.ADDPROFILEPIC,res.user))
        return 'ProfilePic added';
    },(err)=>{
        let e=handleTokenExpire(err,dispatch,AddProfilePic)
        if(e instanceof Promise){
            return e.then(res=>{return res})
        }
        else
            return e
    })
}
export const EditProfilePic=(pic,oldImgPath)=>(dispatch)=>{
    let fd=new FormData();
    fd.append('profilePic',pic.profilePic[0])
    return fetch(BaseUrl+`users/profilePic/${oldImgPath}`,{
        method:'PUT',
        body:fd,
        headers:{"authorization":`Bearer ${cookie.load('accessToken')}`},
    })
    .then(response=>handleResponse(response))
    .then((res)=>{
        dispatch(ProfileAction(ActionTypes.EDITPROFILEPIC,res.user))
        return 'ProfilePic updated';
    },(err)=>{
        let e=handleTokenExpire(err,dispatch,EditProfilePic)
        if(e instanceof Promise){
            return e.then(res=>{return res})
        }
        else
            return e
    })
}
export const DeleteProfilePic=(pic,oldImgPath)=>(dispatch)=>{
    let fd=new FormData();
    fd.append('profilePic',pic.profilePic[0])
    return fetch(BaseUrl+`users/profilePic/${oldImgPath}`,{
        method:'DELETE',
        body:fd,
        headers:{"authorization":`Bearer ${cookie.load('accessToken')}`},
    })
    .then(response=>handleResponse(response))
    .then((res)=>{
        dispatch(ProfileAction(ActionTypes.DELETEPROFILEPIC,res.user))
        return 'Profile Pic deleted';
    },(err)=>{
        let e=handleTokenExpire(err,dispatch,DeleteProfilePic)
        if(e instanceof Promise){
            return e.then(res=>{return res})
        }
        else
            return e
    })
}

export const EditProfile=(user)=>(dispatch)=>{
    //require whole user object
    return fetch(BaseUrl+`users/profile/${user._id}/edit`,{
        method:'PUT',
        body:JSON.stringify({...user}),
        headers:AuthHeader(),
    })
    .then(response=>handleResponse(response))
    .then((res)=>{
        dispatch(ProfileAction(ActionTypes.EDITPROFILE,res.user))
        return 'Profile updated';  
    },(err)=>{
        return resolveError(err)
    })
}
export const Todo=(formData,userId)=>(dispatch)=>{
    return fetch(BaseUrl+`todo/${userId}`,{
        method:'PUT',
        body:JSON.stringify({...formData}),
        headers:AuthHeader(),
    })
    .then(response=>handleResponse(response))
    .then((res)=>{
        dispatch(ProfileAction(ActionTypes.TODO,res.user))
        return 'TODO Done';  
    },(err)=>{
        return resolveError(err)
    })
}