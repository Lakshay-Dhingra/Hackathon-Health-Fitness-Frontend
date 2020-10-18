import React,{Component, Fragment, useState} from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalBody, ModalHeader, Button, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { LocalForm, Control, Errors} from 'react-redux-form';

const MyFormElement=({type,name,label,min,max,placeholder})=>{
    return(
        <Row className='form-group'>
            {/* <Col> */}
                <Label className="col-sm-5 col-form-label" htmlFor={name}>{label}</Label>
                <Control.text type={type} model={`.${name}`} id={name} name={name}
                    placeholder={placeholder} className='form-control col-sm-7' 
                    min={min} max={max}/>
            {/* </Col> */}
        </Row>
    )
}

const MyFormElements=(props)=>{
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
                                <LocalForm onSubmit={(values,e)=>{
                                    console.log(values)
                                    e.preventDefault();
                                }}
                                className='form_fields'
                                >
                            <MyFormElement type='number' name='jogging' label='Jogging :' min={0} max={180} placeholder="Time in minutes"/>
                            <MyFormElement type='number' name='sprint' label='Sprint :' min={0} max={180} placeholder="Time in minutes"/>
                            <MyFormElement type='number' name='jogging' label='Jogging :' min={0} max={180} placeholder="Time in minutes"/>
                            <MyFormElement type='number' name='jogging' label='Jogging :' min={0} max={180} placeholder="Time in minutes"/>
                            <MyFormElement type='number' name='jogging' label='Jogging :' min={0} max={180} placeholder="Time in minutes"/>
                            <MyFormElement type='number' name='jogging' label='Jogging :' min={0} max={180} placeholder="Time in minutes"/>
                            {/* TODO Add calories here and delete below */}
                            <Row>
                                <Col>
                                    <Button type="submit" color="primary">
                                        Add/Edit Dish
                                    </Button>
                                </Col>
                            </Row>
                            </LocalForm>
                        </section>

                        <section class="right_calorie col-lg-6">
                            <h2>Calorie Tracker</h2>
                            <form class="form_fields">
                            <MyFormElement />
                            </form>
                        </section>
                    </section>
                </section>
            </Fragment>
        )
    }
}
export default Activity;