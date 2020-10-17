import React, { Component, Fragment } from 'react';
import {Route,Switch,Redirect,withRouter} from 'react-router-dom'

import { connect } from 'react-redux';
import {actions} from 'react-redux-form'
// import{TransitionGroup,CSSTransition} from 'react-transition-group'
import Header from './HeaderComponent'
import Home from './HomeComponent'
import { login, logout, register } from '../redux/ActionCreator';

import Profile from './ProfileComponent';
const mapDispatchToProps=(dispatch)=>({
  login:(username,password)=>(dispatch(login(username,password))),
  logout:()=>(dispatch(logout())),
  register:(username,password)=>(dispatch(register(username,password)))
})
const mapStateToProps=(state)=>{return{}}
class Main extends Component {
    //will called every time after this component is re rendered
    componentDidMount(){
    //   this.props.fetchDishes();
    //   this.props.fetchComments();
    //   this.props.fetchPromos();
    //   this.props.fetchLeaders()
    //   this.props.fetchFavorites();
    this.props.login('devanshgl55@gmail.com','qwertypopo')
    // .then(res=>alert(res),err=>{alert('error');alert(err)})
    .then(res=>{
      console.log(res)
    },err=>{
      console.log(err)
    })
    }

    render(){
      return(
        <div>
          <Header/>
          <Profile/>
        </div>
      )
    }
    renderHome()
    {
      return (
        <div>
          <Header/>
          <Home/>
        </div>
        
      );
    }
  }
  //sends states and dispatch as props to Main and its child
  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
  
  