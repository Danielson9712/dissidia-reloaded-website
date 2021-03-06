import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { Col, Jumbotron, Row } from 'reactstrap';

const Owners = () => { 

const [danskin, setDanSkin] = useState("");
const [derskin, setDerSkin] = useState("");
const [timskin, setCrisSkin] = useState(""); 

    useEffect(() => { 
    setDanSkin(`https://crafatar.com/avatars/67c437be-b4c1-42d2-a6e5-fefdc357f69c`)
    setCrisSkin(`https://crafatar.com/avatars/eb5fb704-ab70-44cc-9bea-1b68bf00e64a`)
    setDerSkin(`https://crafatar.com/avatars/331edde2-13ab-4077-9d18-fa0b2dfff8f5`)
    },[])
    
    return ( 
        <div className = "owners"> 
     
        <Row>  
            <h2> Server Admins: </h2> 
            <Col> 
        
        <h3> Danielson9712  </h3> <img src = {danskin} alt = "skin" className = "skins"/>
        <h3>dhluigi</h3> <img src = {derskin} alt = "skin" className = "skins"/> 
        <h3> RoseyRams  </h3><img src = {timskin} alt = "skin" className = "skins"/>
        </Col>
        </Row>
        
    </div>
    );
}

export default Owners; 