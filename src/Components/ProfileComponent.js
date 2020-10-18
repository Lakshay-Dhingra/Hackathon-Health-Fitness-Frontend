import React,{Component, Fragment, useState} from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalBody, ModalHeader, Button, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { LocalForm, Control, Errors} from 'react-redux-form';
const FormElement=({type,name,label,user})=>{
    return(
        <Row className='form-group'>
            <Col>
                <Label htmlFor={name}>{label}</Label>
                <Control.text type={type} model={`.${name}`} id={name} name={name}
                    placeholder={name} className='form-control' value={user[name]}
                    onChange={(e)=>user[name]=e.target.value}
                    required
                />
            </Col>
        </Row>
    )
}
class EditProfile extends Component{
    constructor(props){
        super(props);
        this.state={
            ...props.user,
            image:null
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        if(event.target.name==='image')
            this.setState({
                'image':event.target.files[0]
            })
        else
            this.setState({
            [event.target.name]: event.target.value
            })
      }
    render(){
        return(

        <Modal isOpen={this.props.modal} 
            toggle={()=>this.props.toggleModal()}
            >
                <ModalHeader>Edit Profile</ModalHeader>
                <ModalBody>
                    <LocalForm
                    onSubmit={(values,e)=>{
                                // if(this.state.image==null)
                                //     alert('Please select a image')
                                // else{
                                //     this.props.handleEditProfile(values,this.state)
                                //     this.props.toggleModal('editComment')
                                // }
                                this.props.handleEditProfile(values)
                                console.log(values)
                                e.preventDefault();
                            }
                        }>
                            <LocalForm onSubmit={()=>{
                                alert('hlo');
                            }}>
                        <Row className='form-group'>
                            <Col>
                                <Label htmlFor="image">Images:</Label>
                                <Control.file model='.image' id='image' name='image'
                                    onChange={(e)=>{this.handleChange(e);this.setState({file:URL.createObjectURL(e.target.files[0])})}} 
                                />
                                <img style={{height:"100px",width:'100px'}} src={this.state.file} alt='preview dish'/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button type="submit" color="primary">
                                    Change Profile Pic
                                </Button>
                            </Col>
                        </Row>
                        </LocalForm>
                        <Row className='form-group'>
                            <Col>
                                <Label htmlFor={'username'}>Email:</Label>
                                <Control.text  model={`.${'username'}`} id={'username'} name={'username'}
                                    placeholder={'username'} className='form-control' value={this.state['username']}
                                    readOnly
                                />
                            </Col>
                        </Row>
                        <FormElement name='name' label='Name:' user={this.state}/>                            
                        <Row className='form-group'>
                            <Col>
                                <Label htmlFor={'age'}>Age:</Label>
                                <Control.text type='number' min={1} model={`.${'age'}`} id={'age'} name={'age'}
                                    placeholder={'age'} className='form-control' value={this.state['age']}
                                    onChange={(e)=>this.setState({'age':e.target.value})}
                                    required
                                />
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Col>
                                Gender:&nbsp;
                                <Label htmlFor="male">Male</Label>&nbsp;
                                <Control type='radio' model='.gender' id='gender' name='gender'
                                    value={true}
                                    checked={this.state.gender===true}
                                    onChange={()=>this.setState({gender:true})}
                                />&nbsp;&nbsp;
                                <Label htmlFor="female">Female</Label>&nbsp;
                                <Control type='radio' model='.gender' id='female' name='gender'
                                    value={false} 
                                    checked={this.state.gender===false}
                                    onChange={()=>this.setState({gender:false})}
                                />
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Col>
                                <Label htmlFor={'height'}>Height:</Label>
                                <Control.text type='number' min={1} model={`.${'height'}`} id={'height'} name={'height'}
                                    placeholder={'height (in cm)'} className='form-control' value={this.state['height']}
                                    onChange={(e)=>this.setState({'height':e.target.value})}
                                    required
                                />
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Col>                                
                                <Label htmlFor="about_me">Description:</Label>
                                <Control.textarea model='.about_me' id='about_me' name='about_me' 
                                    required 
                                    value={this.state.about_me}
                                    onChange={this.handleChange}
                                    className='form-control' 
                                />
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Col>                                
                                <Label htmlFor="fitness_goal">Fitness Ggoal:</Label>
                                <Control.textarea model='.fitness_goal' id='fitness_goal' name='fitness_goal' 
                                    value={this.state.fitness_goal}
                                    onChange={this.handleChange}
                                    className='form-control' 
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button type="submit" color="primary">
                                    Change Profile
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
        )
    }
}

class Profile extends Component{
    constructor(props){
        super(props)
        this.state={
            modal:false
        }
        this.handleEditProfile=this.handleEditProfile.bind(this)
    }
    handleEditProfile(values,dish){
        console.log(dish)
        console.log(values)
        let newDish={...dish,...values}
        delete newDish.file
        console.log(newDish)
        // this.props.addDish(dish);
        alert('Profile Changed')
    }
    accessEditProfile(){
        return(
            <EditProfile modal={this.state.modal} toggleModal={()=>this.setState(!this.state.modal)} handleEditProfile={this.handleEditProfile} user={this.props.user}/>
        )
    }
    renderLakshay(){
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
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde fugit officiis velit reiciendis quasi! Nemo omnis a assumenda ad optio rem eos vel laborum natus! Iure atque omnis quasi veritatis reiciendis ullam culpa, asperiores voluptate consectetur ea obcaecati ut odio a natus quod itaque!</p>
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
    render(){
        console.log(this.props.user)
        return(
            <Fragment>
                
                {this.props.user===null?<h1>Login First</h1>
                :
                <Fragment>
                    <Button onClick={()=>this.setState({modal:!this.state.modal})}>Edit profile</Button>
                <EditProfile modal={this.state.modal} toggleModal={()=>this.setState({modal:!this.state.modal})} handleEditProfile={this.handleEditProfile} user={this.props.user}/>
                </Fragment>
                }
            </Fragment>
        )
    }
}
export default Profile;