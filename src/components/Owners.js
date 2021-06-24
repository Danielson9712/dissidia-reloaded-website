import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { Col, Jumbotron, Row } from 'reactstrap';

const Owners = () => { 

const [danskin, setDanSkin] = useState("");
const [derskin, setDerSkin] = useState("");
const [timskin, setTimSkin] = useState(""); 

    useEffect(() => { 
    setDanSkin(`https://crafatar.com/avatars/67c437be-b4c1-42d2-a6e5-fefdc357f69c`)
    setTimSkin(`https://crafatar.com/avatars/3d0403d8-b1a1-43e1-b505-7eb0075fa2d8?overlay=true`)
    setDerSkin(`https://crafatar.com/avatars/331edde2-13ab-4077-9d18-fa0b2dfff8f5`)
    },[])
    
    return ( 
        <div className = "owners"> 
     
        <Row>  
            <h2> Server Admins: </h2> 
            <Col> 
        
        <h3> Danielson9712  </h3> <img src = {danskin} alt = "skin" className = "skins"/>
        <h3>dhluigi</h3> <img src = {derskin} alt = "skin" className = "skins"/> 
        <h3> Timster1996  </h3><img src = {timskin} alt = "skin" className = "skins"/>
        </Col>
        </Row>
        
    </div>
    );
}

export default Owners; 