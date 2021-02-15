import React from 'react';

import classes from './Card.module.css'

const card = (props) => (
    <div id = {classes.services}>
    <img src = {props.image}  height = "500" width = "400"alt = "profile"  />
    <h5 style = {{fontWeight:'bold'}}>{props.title}</h5>
    <p>{props.price}</p>
    </div>
);

export default card;