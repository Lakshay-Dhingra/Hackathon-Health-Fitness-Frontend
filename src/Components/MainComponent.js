import React, { Component, Fragment } from 'react';
import {Route,Switch,Redirect,withRouter} from 'react-router-dom'

import { connect } from 'react-redux';
import {actions, Control, LocalForm} from 'react-redux-form'
// import{TransitionGroup,CSSTransition} from 'react-transition-group'
import Header from './HeaderComponent'
import Home from './HomeComponent'
<<<<<<< HEAD
import { login, logout, register, x } from '../redux/ActionCreator';
=======
import { AddProfilePic, DeleteProfilePic, EditProfilePic, login, logout, register, x } from '../redux/ActionCreator';

>>>>>>> 43a0786709c65504299cf2b078c968ece6a13164
import Profile from './ProfileComponent';
import Activity from './ActivityComponent';
import Footer from './FooterComponent';
import { Button } from 'reactstrap';
const mapDispatchToProps=(dispatch)=>({
  login:(username,password)=>(dispatch(login(username,password))),
  logout:()=>(dispatch(logout())),
  register:(username,password)=>(dispatch(register(username,password))),
  x:()=>(dispatch(x())),
  AddProfilePic:(pic)=>(dispatch(AddProfilePic(pic))),
  EditProfilePic:(pic,userId)=>(dispatch(EditProfilePic(pic,userId))),
  DeleteProfilePic:(pic,userId)=>(dispatch(DeleteProfilePic(pic,userId)))
})
const mapStateToProps=(state)=>{return{
  Auth:state.Auth
}}
class Main extends Component {
    constructor(props){
      super(props);
      this.login=this.login.bind(this)
      this.logout=this.logout.bind(this)
      this.get=this.get.bind(this)
      this.addProfilePic=this.addProfilePic.bind(this)
      this.editProfilePic=this.editProfilePic.bind(this)
      this.deleteProfilePic=this.deleteProfilePic.bind(this)
      this.state={
        response:"asdf",
        r2:'sd'
      }
    }
    addProfilePic(pic){
      this.props.AddProfilePic(pic)
      .then(res=>{
        console.log(res)
      },err=>{
        if(err instanceof Promise)
          err.then((err)=>console.log(err))
        else console.log(err)
      })
    }
    editProfilePic(pic,userId){
      this.props.EditProfilePic(pic,userId)
      .then(res=>{
        console.log(res)
      },err=>{
        if(err instanceof Promise)
          err.then((err)=>console.log(err))
        else console.log(err)
      })
    }
    deleteProfilePic(pic,userId){
      this.props.DeleteProfilePic(pic,userId)
      .then(res=>{
        console.log(res)
      },err=>{
        if(err instanceof Promise)
          err.then((err)=>console.log(err))
        else console.log(err)
      })
    }
    login(){
      this.props.login('devanshgl55@gmail.com','qwertypopo')
      .then(res=>{
        this.setState({response:res})
        // console.log(this.state.response)
        console.log(res)
      },err=>{
        alert(err)
        console.log(err)
      })
    }
    logout(){

    this.props.logout()
    .then(res=>{
      console.log(res)
    },err=>{
      console.log(err)
    })
    }
    get(){

      this.props.x()
      .then(res=>{
        console.log(res)
      },err=>{
        if(err instanceof Promise)
          err.then((err)=>console.log(err))
        else console.log(err)
      })
    }

    renderActivity(){
      return(
        <Fragment>
        <Header/>
        <Activity/>
        <Footer/>
        </Fragment>
      )
    }

    renderLogin(){
      // console.log(this.props.Auth)
      return(
        <Fragment>
          {/* {this.props.Auth.user?this.props.Auth.user.email:''} */}
          <Button onClick={this.login}>Login</Button>
          <Button onClick={this.logout}>Logout</Button>
          <Button onClick={this.get}>show user</Button>
          <LocalForm onSubmit={(values,e)=>{
            //TODO submit form
            console.log(values)
            this.editProfilePic(values,this.props.Auth.user.profilePic)
          }}>
            Add Image
            <Control.file type='file' model='.profilePic'/>
            <Button type='submit'/>
          </LocalForm>
          <br/>
        </Fragment>
      )
    }
    renderProfile(){
      return(
        <Fragment>
          <Header login={this.props.login}/>
          <Profile/>
          <Footer/>
        </Fragment>
      )
    }
    render()
    {
      return (
        <Fragment>
          <Header/>
          <Home/>
          <Footer/>
        </Fragment>
        
      );
    }
  }
  //sends states and dispatch as props to Main and its child
  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
  
  