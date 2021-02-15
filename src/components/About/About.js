import React from 'react' 
import profile  from '../../assets/profile2.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './About.module.css'
import Button from 'react-bootstrap/Button'
import laptop from '../../assets/laptop.jpg'
import typing from '../../assets/typing.jpg'
import excited from '../../assets/excited.jpg'
import crowd from '../../assets/crowd.jpg'

const about = (props) => {
return(
    <div >
        <section className={classes.about}>
       

<p id = {classes.para}>What we do</p>
<p id = {classes.para2}>Kpabiservices is a modern consultancy firm dedicated to using strategy,technology, </p>
<p id = {classes.para3}>process to deliver business transformation</p>
<Button  variant="outline" id = {classes.learn}>Learn More</Button>{' '}

<div id = {classes.services}>
    <img src = {laptop}  height = "500" width = "400"alt = "profile"  />
    <h5 style = {{fontWeight:'bold'}}>I.T Consulting</h5>
    <p>The sharp expertise of a consulting firm combined</p>
    <p> with the agility of a startup</p>


<img src = {typing}  height = "500" width = "400"alt = "profile"  />
    <h5 style = {{fontWeight:'bold'}}>Business Setup</h5>
    <p>The sharp expertise of a consulting firm combined </p>
    <p>with the agility of a startup</p>


</div>

<div id = {classes.agility}>
  <img src = {excited}  height = "500" width = "400"alt = "profile"  />
    <h5 style = {{fontWeight:'bold'}}>HR Solutions</h5>
    <p>The sharp expertise of a consulting firm combined</p> 
    <p>with the agility of a startup</p>


<img src = {crowd}  height = "500" width = "400"alt = "profile"  />
    <h5 style = {{fontWeight:'bold'}}>Company Development</h5>
    <p>The sharp expertise of a consulting firm combined</p>
    <p> with the agility of a startup</p>
</div>

<Button  variant="outline" id = {classes.about_button}>Let's Talk</Button>{' '}

</section>
    </div>
)
}



export default about