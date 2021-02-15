import React,{Component} from 'react' 
import profile  from '../../assets/profile2.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './About.module.css'
import Button from 'react-bootstrap/Button'
import laptop from '../../assets/laptop.jpg'
import typing from '../../assets/typing.jpg'
import excited from '../../assets/excited.jpg'
import crowd from '../../assets/crowd.jpg'
import axios from 'axios'
import Card from '../Card/Card';
class about extends Component{

    state= {
        post:[]
      }
    
      componentDidMount () {
        axios.get("https://fakestoreapi.com/products").then(response =>{
            const posts = response.data;
       const updatedPost =     posts.map(pos=>{
                return {
                ...pos
             
                }
            })
            this.setState({post:updatedPost})
        })
      }
    
    render(){
        let posts = this.state.post.map
     (posts => {
return <Card key = {posts.id} title = {posts.title} image = {posts.image} price = {posts.price}/>
        })
        console.log(posts)
   
        return(
<div >
        <section className={classes.about}>
       

<p id = {classes.para}>What we do</p>
<p id = {classes.para2}>Kpabiservices is a modern consultancy firm dedicated to using strategy,technology, </p>
<p id = {classes.para3}>process to deliver business transformation</p>
<Button  variant="outline" id = {classes.learn}>Learn More</Button>{' '}

{posts}




</section>
    </div>
        )
    }
} 

    




export default about