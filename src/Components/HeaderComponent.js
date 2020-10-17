import React,{Component, Fragment, useState} from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalBody, ModalHeader, Button, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { LocalForm, Control, Errors} from 'react-redux-form';

const length=(len)=>(val)=> !val||val.length>len


const LoginForm=(props)=>{
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    return(
        <Modal isOpen={props.modal['login']} toggle={()=>props.toggleModal('login')}>
                    <ModalHeader>Login</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={()=>props.handleLogin({username:username,password:password},props.login)}>
                            <FormGroup>
                                <Label htmlFor='username'>User Name:</Label>
                                <Input type='text' name='username' id='username' onChange={(e)=>setusername(e.target.value)} required/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='password'>Password:</Label>
                                <Input type='password' name='password' id='password' onChange={(e)=>setpassword(e.target.value)} required/>
                            </FormGroup>
                            

                            <FormGroup>
                                <Button color='primary'
                                    onClick={()=>{props.toggleModal('login');props.toggleModal('forgetPassword')}}
                                >Forget Password</Button>
                                &nbsp;
                                <Button type='submit' color='primary'>Submit</Button>
                            </FormGroup>
                        </LocalForm>
                    </ModalBody>
                </Modal>
    )
}
const ForgetPassword=(props)=>{
    const [email,setemail]=useState('')
    const handleforgetPassword=()=>{
        props.forgetPassword({email:email})
        .then((res)=>{
            if(res.status)
                alert(res.status)
            else if(typeof(res)=='string')
                alert(res)
            else if(typeof(res)=='object' && res.err!==undefined)
                alert(res.err)
            else
                alert('Some error occured.\nPlease try again later')
            if(res.success==true){
                props.toggleModal('changePassword');
            }
        })
        // alert('Email sent: '+email);
    }
    return (
        <Modal isOpen={props.modal['forgetPassword']} toggle={()=>props.toggleModal('forgetPassword')}>
            <ModalHeader>Forget Password</ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={(e2,e)=>{props.toggleModal('forgetPassword');handleforgetPassword();
                            e.preventDefault();
                        }}>
                    <FormGroup>
                        <Label htmlFor='email'>Email</Label>
                        <Input type='email' name='email' id='email' onChange={(e)=>setemail(e.target.value)} required/>
                    </FormGroup>
                    <FormGroup>
                        <Button color='primary' type='submit'>
                            Forget Password
                        </Button>
                        <div className='text-dark'>
                            *An email will be sent contaning OTP to change Password.Check spam if not found.
                        </div>
                    </FormGroup>
                </LocalForm>
            </ModalBody>
        </Modal>
    )
}
const ChangePassword=(props)=>{
    const [errorMessage,seterrorMessage]=useState('')
    const handlechangePassword=(email)=>{
        props.changePassword({email:email})
        .then((res)=>{
            if(res.status)
                alert(res.status)
            else if(typeof(res)=='string')
                alert(res)
            else if(typeof(res)=='object' && res.err!==undefined)
                alert(res.err)
            else
                alert('Some error occured.\nPlease try again later')
        })
    }
    return (
        <Modal isOpen={props.modal['changePassword']} toggle={()=>props.toggleModal('changePassword')}>
            <ModalHeader>Forget Password</ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={(val,e)=>{
                                if(val.password!==val.password2){
                                    seterrorMessage('password do not match')
                                }
                                else{
                                    seterrorMessage('');
                                    handlechangePassword(val.email);
                                }
                                e.preventDefault();
                            }}>
                    <Row className='form-group'>
                        <Col>
                                <Label htmlFor='email'>Email</Label>
                                <Control.text model='.email' id='email' name='email' type='email'
                                    placeholder='email' className='form-control'
                                    required
                                />                                
                        </Col>
                    </Row>
                    <Row className='form-group'>
                        <Col>
                            <Label htmlFor='password'>Password</Label>
                            <Control.text model='.password' id='password' name='password'
                                className='form-control' placeholder='password' type='password'
                                validators={{ minLength: length(8) }} required
                                onChange={()=>seterrorMessage('')}
                            />
                            <Errors
                                className="errors text-danger"
                                model=".password"
                                show="touched"
                                messages={{
                                    valueMissing: 'Password is required',
                                    minLength: 'Must be more than 8 characters'
                                }}
                            />

                        </Col>
                    </Row>
                    <Row className='form-group'>
                        <Col>
                            <Label htmlFor='password'>RetypePassword</Label>
                            <Control.text model='.password2' id='password' name='password'
                                className='form-control' placeholder='password' type='password'
                                required
                                onChange={()=>seterrorMessage('')}
                            />
                        </Col>
                    </Row>
                    <FormGroup>
                        <div className='error text-danger'>{errorMessage}</div>
                    </FormGroup>
                    <FormGroup>
                        <Button color='primary' type='submit'
                            
                        >Change Password</Button>
                    </FormGroup>
                </LocalForm>
            </ModalBody>
        </Modal>
    )
}
const VerifyUser=(props)=>{
    const handleVerifyUser=(value)=>{
        // console.log(verifyUser.toString())
        props.verifyUser(value)
        .then((res)=>{
            if(res && res.status){
                alert(res.status)
            }

            else if(typeof(res)=='string')
                alert(res)
            else if(typeof(res)=='object' && res.err!==undefined)
                alert(res.err)
            else
                alert('error occured')
        })
        props.toggleModal('verifyUser')
    }
    return(
        <Modal isOpen={props.modal['verifyUser']} toggle={()=>props.toggleModal('verifyUser')}>
            <ModalHeader>Verify Account</ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={(val,e)=>{handleVerifyUser(val);e.preventDefault()}}>
                    <Row className='form-group'>
                        <Col>
                            <Label htmlFor='email'>Email</Label>
                            <Control.text model='.email' type='email' name='email' id='email' 
                            className="form-control" required/>
                        </Col>
                    </Row>
                    <Row className='form-group'>
                        <Col>
                            <Label htmlFor='otp'>OTP</Label>
                            <Control.text type='number' model='.otp' name='otp' id='otp' className='form-control'
                            required/>
                        </Col>
                    </Row>
                    <Row className='form-group'>
                        <Col>
                            <Button className='bg-primary' onClick={()=>props.toggleModal('resendOTP')}>Resend OTP</Button>&nbsp;
                            <Button className='bg-primary' type='submit'>Verify</Button>
                        </Col>
                    </Row>
                </LocalForm>
            </ModalBody>
        </Modal>
    )
}
const ResendOTP=(props)=>{
    const handleresendOTP=(value)=>{
        props.resendOTP(value)
        .then((res)=>{
            if(res && res.status)
                alert(res.status)
            else if(typeof(res)=='string')
                alert(res)
            else if(typeof(res)=='object' && res.err!==undefined)
                alert(res.err)
            else
                alert('Some error occured.\nPlease try again later')
        })
    }
    return(
        <Modal isOpen={props.modal['resendOTP']} toggle={()=>props.toggleModal('resendOTP')}>
            <ModalHeader>Resend OTP</ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={(val,e)=>{props.toggleModal('resendOTP')
                            handleresendOTP(val);
                            e.preventDefault();
                        }}>
                    <FormGroup>
                        <Label htmlFor='email'>Email</Label>
                        <Control.text model='.email' type='email' name='email' id='email' required/>
                    </FormGroup>
                    <FormGroup>
                        <Button color='primary' type='submit'>
                            Resend OTP
                        </Button>
                        <div className='text-dark'>
                            *An email will be sent contaning OTP to validate account.Check spam if not found.
                        </div>
                    </FormGroup>
                </LocalForm>
            </ModalBody>
        </Modal>
    )
}
const RegisterForm=(props)=>{
    // console.log(props.loginState)
    const [errorMessage, seterrorMessage] = useState('')
    const [isloading, setisloading] = useState(false)
    
    return(
        <Modal isOpen={props.modal['register']} toggle={()=>props.toggleModal('register')}>
            <ModalHeader>Register</ModalHeader>
            <ModalBody>
                <LocalForm
                onSubmit={(values,e)=>{
                            if(values.password!==values.password2)
                                seterrorMessage('Password do not match')
                            else{
                                seterrorMessage('')
                                !isloading&&handleRegister({...values},props.register)
                                props.toggleModal('register')
                            }
                            e.preventDefault();
                            
                        }
                    }> 
                    <Row className='form-group'>
                        <Col>
                            <Label htmlFor='Username'>Username</Label>
                            <Control.text model='.username' id='username' name='username'
                                placeholder='Username' className='form-control'
                                required
                                asyncValidators={{
                                    availabl:(val,done)=>{
                                        setisloading(true)
                                        props.availableUName(val)
                                        .then(response=>{
                                            setisloading(false)
                                            if(!response.available)
                                                done(false)
                                            else
                                                done(true)
                                        })
                                    }
                                }}
                            />
                            {isloading&&<i className="fa fa-spinner"/>}
                            <Errors
                                className='text-danger'
                                model='.username'
                                show='touched'
                                messages={{
                                    availabl:isloading?'':'Username already taken'
                                }}/>
                        </Col>
                    </Row>
                    <Row className='form-group'>
                        <Col>
                                <Label htmlFor='email'>Email</Label>
                                <Control.text model='.email' id='email' name='email' type='email'
                                    placeholder='email' className='form-control'
                                    required
                                />
                                
                        </Col>
                    </Row>
                    <Row className='form-group'>
                        <Col>
                                <Label htmlFor='firstname'>Firstname</Label>
                                <Control.text model='.firstname' id='firstname' name='firstname'
                                    placeholder='firstname' className='form-control'
                                    required/>
                                
                        </Col>
                    </Row>
                    <Row className='form-group'>
                        <Col>
                            <Label htmlFor='lastname'>LastName</Label>
                            <Control.text model='.lastname' id='lastname' name='lastname'
                                className='form-control' placeholder='Last Name'
                            />
                        </Col>
                    </Row>
                    <Row className='form-group'>
                        <Col>
                            <Label htmlFor='password'>Password</Label>
                            <Control.text model='.password' id='password' name='password'
                                className='form-control' placeholder='password' type='password'
                                validators={{ minLength: length(8) }} required
                                onChange={()=>seterrorMessage('')}
                            />
                            <Errors
                                className="errors text-danger"
                                model=".password"
                                show="touched"
                                messages={{
                                    valueMissing: 'Password is required',
                                    minLength: 'Must be more than 8 characters'
                                }}
                            />

                        </Col>
                    </Row>
                    <Row className='form-group'>
                        <Col>
                            <Label htmlFor='password'>RetypePassword</Label>
                            <Control.text model='.password2' id='password' name='password'
                                className='form-control' placeholder='password' type='password'
                                required
                                onChange={()=>seterrorMessage('')}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span className='errors text-danger'>{errorMessage}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button type="submit" color="primary">
                                Register
                            </Button>
                        </Col>
                    </Row>
                </LocalForm>
            </ModalBody>
        </Modal>
    )
}
const handleRegister=(values,register)=>{
    // console.log(values)
    register(values)
}
const LoginButton=(props)=>{
    if (props.loginState.login===false)
    {
        return(
            <Fragment>
                <NavItem>
                    <Button color='primary' onClick={()=>props.toggleModal('login')}>
                        <span className="fa fa-sign-in fa-lg"></span>Login
                    </Button>&nbsp;
                </NavItem>
                <NavItem>
                    <Button color='primary' onClick={()=>props.toggleModal('register')}>
                        <span className="fa fa-sign-up fa-lg"></span>Register
                    </Button>&nbsp;
                </NavItem>
                <NavItem>
                    <Button color='primary' onClick={()=>props.toggleModal('verifyUser')}>
                        <span className="fa fa-sign-up fa-lg"></span>Verify Account
                    </Button>&nbsp;
                </NavItem>
            </Fragment>
        )
    }
    else{
        return(
            <Fragment>
                <NavItem><h4 className='text-success' style={{display:'inline',paddingTop:'100px',marginRight:'3px'}}>{props.loginState.username}</h4></NavItem>
                <NavItem>
                    <Button color='primary' onClick={()=>props.handleLogout(props.logout)}>
                        <span className="fa fa-sign-out fa-lg"></span>Logout
                    </Button>
                </NavItem>
            </Fragment>
        )
    }
}

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            modal:{
                nav: false,
                login:false,
                register:false,
                forgetPassword:false,
                changePassword:false,
                verifyUser:false,
                resendOTP:false
            }
        };
        this.toggleModal=this.toggleModal.bind(this)
        this.handleLogin=this.handleLogin.bind(this)
        this.handleLogout=this.handleLogout.bind(this)
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
      toggleModal(val){
          var x=this.state.modal
          x[val]=!x[val]
          this.setState({
              modal:x
          })
      }
      handleLogin=(values,login)=>{
        //   console.log(values)
        login(values.username,values.password)
        this.toggleModal('login')
      }
      handleLogout=(logout)=>{
        // console.log(logout)
        logout()
        // alert('Bye')
    }
    render(){
        return(
        <header>
        <nav class="navbar navbar-expand-lg navbar-light" id="main_navbar">
            <a class="navbar-brand" href="index.html">Fit N' Fine</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#features_section">Features</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                  </li>
                  <li class="nav-item">
                    <button type="button" class="btn btn-link" data-toggle="modal" data-target="#LoginModal">Login</button>
                  </li>
                  <li class="nav-item">
                    <button type="button" class="btn btn-link" data-toggle="modal" data-target="#RegisterModal">Register</button>
                  </li>
                </ul>
            </div>
          </nav>
    </header>
        )
    }
}

export default Header;