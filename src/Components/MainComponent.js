import React, { Component, Fragment } from 'react';
import {Route,Switch,Redirect,withRouter} from 'react-router-dom'

import { connect } from 'react-redux';
import {actions} from 'react-redux-form'
// import{TransitionGroup,CSSTransition} from 'react-transition-group'
import Header from './HeaderComponent'
import Home from './HomeComponent'
import { login, logout, register, x } from '../redux/ActionCreator';
import Profile from './ProfileComponent';
import Activity from './ActivityComponent';
import Footer from './FooterComponent';
import { Button } from 'reactstrap';
const mapDispatchToProps=(dispatch)=>({
  login:(username,password)=>(dispatch(login(username,password))),
  logout:()=>(dispatch(logout())),
  register:(username,password)=>(dispatch(register(username,password))),
  x:()=>(dispatch(x()))
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
      this.state={
        response:"asdf",
        r2:'sd'
      }
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
      console.log(err)
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
  
  