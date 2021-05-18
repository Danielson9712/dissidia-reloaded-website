import React from 'react';
import firebase from 'firebase'; 
import {Row, Col } from 'reactstrap';
const Footer = () => { 

    

    return ( 
        <div className = "footer"> 
        <Row className = "fixRow"> 
            <Col> 
        <Row className = "fixRow"> <h3> Join our Discord Server! </h3>
        <p> Discord link goes here </p></Row>
        <Row className = "fixRow"> <h3> Services </h3> </Row>
        <Row className = "fixRow"> <p className = "space"> Login Help </p> </Row>
        <Row className = "fixRow"> <h3> Resources </h3></Row>
        <Row className = "fixRow"> <p> Terms of service Privacy Policy </p>
        </Row>
        </Col>
        <Col> 
        <h3> Quick Links </h3> 
        <Row className = "fixRow"> <p> About us </p></Row>
        <Row className = "fixRow"> <p> Forums </p></Row>
        <Row className = "fixRow"> <p> Vote </p></Row>
        </Col>
        
        </Row>
        
        </div>
        
    );
}
export default Footer; 