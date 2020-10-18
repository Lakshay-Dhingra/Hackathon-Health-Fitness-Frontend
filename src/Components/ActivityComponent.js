import React,{Component, Fragment, useState} from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalBody, ModalHeader, Button, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { LocalForm, Control, Errors} from 'react-redux-form';

const FormElement=({type,name,label,dish})=>{
    return(
        <Row className='form-group'>
            <Col>
                <Label htmlFor={name}>{label}</Label>
                <Control.text type={type} model={`.${name}`} id={name} name={name}
                    placeholder={name} className='form-control' value={dish[name]}
                    onChange={(e)=>dish[name]=e.target.value}
                    required/>
            </Col>
        </Row>
    )
}

const MyFormElement=(props)=>{
    return(
    <div class="form-group row">
        <label for="inputXYZ" class="col-sm-5 col-form-label">Jogging Time:</label>
        <div class="col-sm-7">
        <input type="" class="form-control" id="inputXYZ" placeholder="Time in Minutes"/>
        </div>
    </div>
    )
}

class Activity extends Component{
    render(){
        return (
            <Fragment>
                <section class="main_activity">
                    <section>
                        <h1>Activity and Calorie Tracker</h1>
                    </section>
                    <section class="row">
                        <section class="left_activity col-lg-6">
                            <h2>Activity Tracker</h2>
                            <form class="form_fields">
                            <MyFormElement/>
                            <MyFormElement/>
                            <MyFormElement/>
                            <MyFormElement/>
                            <MyFormElement/>
                            <MyFormElement/>
                            </form>
                        </section>

                        <section class="right_calorie col-lg-6">
                            <h2>Calorie Tracker</h2>
                            <form class="form_fields">
                            <MyFormElement/>
                            <MyFormElement/>
                            <MyFormElement/>
                            <MyFormElement/>
                            <MyFormElement/>
                            <MyFormElement/>
                            </form>
                        </section>
                    </section>
                </section>
            </Fragment>
        )
    }
}
export default Activity;