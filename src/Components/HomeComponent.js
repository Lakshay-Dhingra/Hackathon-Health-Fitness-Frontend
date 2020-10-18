import React,{Component, Fragment, useState} from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalBody, ModalHeader, Button, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { LocalForm, Control, Errors} from 'react-redux-form';

const HomebgSection=(props)=>{
    return (<header class="homebg"></header>)}
const MainSection=(props)=>{
    return(
        <section class="main_section">
        <div class="jumbotron">
            <div class="container">
              <h1 class="display-4">"The Journey Of A Thousand Miles Begins With A Single Step."</h1>
              <p class="lead" style={{fontSize: '2em'}}>- Lao Tzu</p>
            </div>
        </div>
    </section>
    )
}
const FeatureSection=(props)=>{
    return(
        <section id="features_section">
        <section class="feature row">
            <div id="feature_image_odd" class="col-12 col-lg-6 row">
                <img src="../images/section_img1.jpg" class="img-fluid" alt="Fitness"/>
            </div>
            <div id="feature_text" class="col-12 col-lg-6">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                    <h2>What Fit N' Fine Is All About?</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, beatae, vel accusamus facilis, eligendi consequatur minima voluptatibus excepturi voluptatum ex quisquam assumenda corrupti? Fugiat, harum. Aut sint quaerat omnis nihil pariatur dolorem dignissimos aperiam fuga quasi. Ipsa nemo quisquam et?</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="feature row">
            <div id="feature_text" class="col-12 col-lg-6">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                    <h2>Set Goals And Keep Track Of Your Progress</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, beatae, vel accusamus facilis, eligendi consequatur minima voluptatibus excepturi voluptatum ex quisquam assumenda corrupti? Fugiat, harum. Aut sint quaerat omnis nihil pariatur dolorem dignissimos aperiam fuga quasi. Ipsa nemo quisquam et?</p>
                    </div>
                </div>
            </div>
            <div id="feature_image_even" class="col-12 col-lg-6 row">
                <img src="../images/section_img2.jpg" class="img-fluid" alt="Goals"/>
            </div>
        </section>
        <section class="feature row">
            <div id="feature_image_odd" class="col-12 col-lg-6 row">
                <img src="../images/section_img3.jpg" class="img-fluid" alt="Food"/>
            </div>
            <div id="feature_text" class="col-12 col-lg-6">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                    <h2>Keep Track Of Calories</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, beatae, vel accusamus facilis, eligendi consequatur minima voluptatibus excepturi voluptatum ex quisquam assumenda corrupti? Fugiat, harum. Aut sint quaerat omnis nihil pariatur dolorem dignissimos aperiam fuga quasi. Ipsa nemo quisquam et?</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="feature row">
            <div id="feature_text" class="col-12 col-lg-6">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                    <h2>Complete Daily Tasks and Earn Badges</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, beatae, vel accusamus facilis, eligendi consequatur minima voluptatibus excepturi voluptatum ex quisquam assumenda corrupti? Fugiat, harum. Aut sint quaerat omnis nihil pariatur dolorem dignissimos aperiam fuga quasi. Ipsa nemo quisquam et?</p>
                    </div>
                </div>
            </div>
            <div id="feature_image_even" class="col-12 col-lg-6 row">
                <img src="../images/section_img4.jpg" class="img-fluid" alt="Daily Tasks"/>
            </div>
        </section>
        </section>
    )
}

class Home extends Component{
    render(){
        return (
            <Fragment>
                <HomebgSection/>
                <MainSection hello={'world'}/>
                <FeatureSection/>
            </Fragment>
        )
    }
}
export default Home;