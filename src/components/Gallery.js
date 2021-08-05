import React, {useEffect, useState } from 'react';
import firebase from 'firebase'; 
import { Input } from 'reactstrap';
import { spawn1, spawn2, spawn3, spawn4, town1, town2, town3, 
         smlspawn1, smlspawn2, smlspawn3, smlspawn4, smltown1, smltown2, smltown3 } 
from './index.js';
import { Jumbotron } from 'reactstrap';
const Gallery = () => {

    return (
            <Jumbotron className = "jumbopics"> 
            <h3> Check out our server! </h3>
                <div className = "gallery"> 
            <div className = "img-container"> 
            <img 
            src = {smlspawn1}
            alt = "small spawn 1"
            data-original = {spawn1}
            />
            
            </div>  
            <div className = "img-container"> 
            <img 
            src = {smlspawn2}
            alt = "small spawn 2"
            data-original = {spawn2}
            />
            </div>  <div className = "img-container"> 
            <img 
            src = {smltown1}
            alt = "small town 1"
            data-original = {town1}
            />
            </div>  <div className = "img-container"> 
            <img 
            src = {smltown3}
            alt = "small town 3"
            data-original = {town3}
            />
            </div>  
            </div>
            </Jumbotron>
       
    );
}
    

 export default Gallery;