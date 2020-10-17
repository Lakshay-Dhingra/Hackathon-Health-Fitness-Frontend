import React,{Component, Fragment, useState} from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalBody, ModalHeader, Button, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { LocalForm, Control, Errors} from 'react-redux-form';

class Profile extends Component{
    render(){
        return (
            <Fragment>
                <div id="main_profile">
                    <section id="profile_card" class="row">
                        <div id="profile_image" class="col-3">
                        <img src="images/section_img1.jpg" class="img-fluid" alt="Profile Pic"/>
                        </div>
                        <div id="profile_head" class="col-9 row">
                            <div class="col-lg-4">
                                <h2>Lakshay Dhingra</h2>
                                <h5>- Fitness Enthusiast</h5>
                            </div>
                            <div class="col-lg-8">
                                <div class="progress">
                                    <div class="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <div>Level-1</div><div>Level-2</div>
                                </div>
                                <button type="button" class="btn btn-info">Edit Profile</button>
                            </div>
                        </div>
                    </section>
                    <section id="profile_body" class="row">
                        <section id="left_profile_section" class="col-3">
                            <div>
                                <h3>About Me:</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In eveniet consequuntur deleniti aperiam facere! Unde fugit officiis velit reiciendis quasi! Nemo omnis a assumenda ad optio rem eos vel laborum natus! Iure atque omnis quasi veritatis reiciendis ullam culpa, asperiores voluptate consectetur ea obcaecati ut odio a natus quod itaque!</p>
                                <h3>Fitness Goal:</h3>
                                <p>In eveniet consequuntur deleniti aperiam facere! Unde fugit officiis velit reiciendis quasi!</p>
                            </div>
                        </section>
                        <section id="right_profile_section" class="col-9">
                            {/* This is a static form (Take Reference in Profile Edit) */}
                            <form>
                            <div class="form-group row">
                                <label forhtml="staticUserId" class="col-sm-2 col-form-label">UserId:</label>
                                <div class="col-sm-10">
                                <input type="text" readonly class="form-control-plaintext" id="staticUserId" value="KXP1284017"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label forhtml="staticFName" class="col-sm-2 col-form-label">FirstName:</label>
                                <div class="col-sm-10">
                                <input type="text" readonly class="form-control-plaintext" id="staticFName" value="Lakshay"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label forhtml="staticLName" class="col-sm-2 col-form-label">LastName:</label>
                                <div class="col-sm-10">
                                <input type="text" readonly class="form-control-plaintext" id="staticLName" value="Dhingra"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label forhtml="staticEmail" class="col-sm-2 col-form-label">Email:</label>
                                <div class="col-sm-10">
                                <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label forhtml="staticAge" class="col-sm-2 col-form-label">Age:</label>
                                <div class="col-sm-10">
                                <input type="text" readonly class="form-control-plaintext" id="staticAge" value="20"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label forhtml="staticHeight" class="col-sm-2 col-form-label">Height:</label>
                                <div class="col-sm-10">
                                <input type="text" readonly class="form-control-plaintext" id="staticHeight" value="5' 9''"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label forhtml="staticWeight" class="col-sm-2 col-form-label">Weight:</label>
                                <div class="col-sm-10">
                                <input type="text" readonly class="form-control-plaintext" id="staticWeight" value="70 kg"/>
                                </div>
                            </div>
                            </form>
                        </section>
                    </section>
                </div>
            </Fragment>
        )
    }
}
export default Profile;