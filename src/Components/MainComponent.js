import React, { Component } from 'react';
import {Route,Switch,Redirect,withRouter} from 'react-router-dom'

import { connect } from 'react-redux';
import {actions} from 'react-redux-form'
import{TransitionGroup,CSSTransition} from 'react-transition-group'
import Header from './HeaderComponent'
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
    
    render() {
      // console.log(this.props.availableUName('admin'))
      // console.log(this.props.login)
      const HomePage=()=>{
        return(
        //   <Home
        //   />
        <div/>
        )
      }
  
      return (
        <div>
          <Header/>
        </div>
      );
    }
  }
  //sends states and dispatch as props to Main and its child
  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
  
  