import React,{Component} from 'react' 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Logo from '../../assets/logosize.jpg'
import Profile from '../../assets/profile2.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './LandingPage.module.css'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons'
import { faGlobeAfrica } from '@fortawesome/free-solid-svg-icons'
import About from '../About/About'



class landingpage extends Component   {

  
  
  render(){
 
   
    return(
      <div >
          <section className={classes.body}>
           <Navbar  >
      <Navbar.Brand href="#home">
      <img
          src={Logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        /></Navbar.Brand>
      <Nav className="mr-auto" id = {classes.navbar_name}>
        <Nav.Link href="#home" id = {classes.navbar_comp}>Location</Nav.Link>
        <Nav.Link href="#features" id = {classes.navbar_comp}>About us</Nav.Link>
        <Nav.Link href="#pricing" id = {classes.navbar_comp}>Privacy and Legal</Nav.Link>
        <Nav.Link href="#pricing" id = {classes.navbar_comp}>Contact</Nav.Link>
        <Nav.Link href="#pricing" id = {classes.navbar_comp}>FAQ</Nav.Link>
      </Nav>
      </Navbar>
  <div>
  <img src = {Profile}  height = "500" width = "350"alt = "profile" id = {classes.profile} /> <span id = {classes.landing}>
  Let's Talk About Startups  That People Like!</span>
  <p id = {classes.landing_para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>
  <Button  variant="outline" id = {classes.landing_button}>Let's Talk</Button>{' '}
  <Button variant="secondary" id = {classes.landing_button2}>View Our Work</Button>{' '}
  <p id= {classes.landing_para2} > <FontAwesomeIcon icon={faEnvelope} /> eric.kpabi@amalitech.org</p>
  <p id= {classes.landing_para3} > <FontAwesomeIcon icon={faMobile} /> 0542198102</p>
  <p id= {classes.landing_para4} > <FontAwesomeIcon icon={faLocationArrow} /> Takoradi</p>
  <p id= {classes.landing_para5} > <FontAwesomeIcon icon={faGlobeAfrica} /> Western Region</p>
  <p id= {classes.landing_para6} > <FontAwesomeIcon icon={faBusinessTime} /> Information Technology</p>
  <p id= {classes.landing_para7} > <FontAwesomeIcon icon={faGlobe} /> www.kpabiservices.com</p>
  </div>
  </section>
  <section>
    
  </section>
  <About/>
 

      </div>
    )
  }


}



export default landingpage