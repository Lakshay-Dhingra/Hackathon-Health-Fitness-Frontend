import React,{Component, Fragment, useState} from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalBody, ModalHeader, Button, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { LocalForm, Control, Errors} from 'react-redux-form';

class Footer extends Component{
    render(){
        return (
            <section id="contact_section">
            <h2>Contact Us</h2>
            <div class="contact_section_para">Connect With Us On Social Media Platforms And Be A Part Of Fitness Community. In Case You Are Facing Any Issues Or Want To Give Us Any Feedback, Feel Free Mail Us And We Will Get Back To You As Soon As Possible!</div>
            <div class="row d-flex justify-content-center">
                <div class="contact-lg-3 contact_icon">
                    <i class="fa fa-envelope fa-3x"></i>
                    <div class="contact_icon_description"><a class="d-block" href="mailto:feedbackqueries@fitnfineapp.com">feedbackqueries@fitnfineapp.com</a></div>
                </div>
                <div class="contact-lg-3 contact_icon">
                    <i class="fa fa-facebook fa-3x"></i>
                    <div class="contact_icon_description"><a class="d-block" href="https://www.facebook.com/fitnfineapp/">facebook.com/fitnfineapp/</a></div>
                </div>
                <div class="contact-lg-3 contact_icon">
                    <i class="fa fa-twitter fa-3x"></i>
                    <div class="contact_icon_description"><a class="d-block" href="https://www.twitter.com/fitnfineapp/">twitter.com/fitnfineapp/</a></div>
                </div>
                <div class="contact-lg-3 contact_icon">
                    <i class="fa fa-instagram fa-3x"></i>
                    <div class="contact_icon_description"><a class="d-block" href="https://www.instagram.com/fitnfineapp/">instagram.com/fitnfineapp/</a></div>
                </div>
            </div>
        </section>
        )
    }
}
export default Footer;