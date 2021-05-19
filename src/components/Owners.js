import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { Col, Jumbotron, Row } from 'reactstrap';

const Owners = () => { 

const [danskin, setDanSkin] = useState("");
const [derskin, setDerSkin] = useState("");
const [timskin, setTimSkin] = useState(""); 


    return ( 
        <div className = "owners"> 
        <Row> 
        <h3> Server Admins: </h3>
        <h4> Danielson9712</h4>
        <h3> Dhluigi</h3>
        <h3> Server Builder: </h3>
        <h3> Timster333 </h3>
        </Row>
    </div>
    );
}

export default Owners; 