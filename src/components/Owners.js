import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { Col, Jumbotron, Row } from 'reactstrap';

const Owners = () => { 

const [danskin, setDanSkin] = useState("");
const [derskin, setDerSkin] = useState("");
const [timskin, setTimSkin] = useState(""); 


    return ( 
        <Jumbotron className = "owners"> 
        <Row> 
        <h3> Server Admins: </h3>
        <h4> Danielson9712</h4>
        </Row>
    </Jumbotron>
    );
}

export default Owners; 