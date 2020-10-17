import React, { Component, Fragment } from 'react';
import {Route,Switch,Redirect,withRouter} from 'react-router-dom'

import { connect } from 'react-redux';
import {actions} from 'react-redux-form'
import{TransitionGroup,CSSTransition} from 'react-transition-group'
import Header from './HeaderComponent'
import Home from './HomeComponent'
const mapDispatchToProps=(dispatch)=>({})
const mapStateToProps=(state)=>{return{}}
class Main extends Component {
    //will called every time after this component is re rendered
    componentDidMount(){
    //   this.props.fetchDishes();
    //   this.props.fetchComments();
    //   this.props.fetchPromos();
    //   this.props.fetchLeaders()
    //   this.props.fetchFavorites();
    }

    render(){
      return(
        <div>
          <Header/>
          <Home/>
        </div>
      )
    }
    renderHome() {
      
  
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
  
  