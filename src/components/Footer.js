import React, {useEffect, useState } from 'react';
import firebase from 'firebase'; 
import {Row, Col } from 'reactstrap';
import { useHistory, Link} from 'react-router-dom';
import discord from '../images/discord.jpg';

const Footer = () => { 
    const [loggedIn, setLoggedIn] = useState(false);
    const history = useHistory();

    const signOut = () => { 
        firebase.auth().signOut().then(() => {
          console.log("I signed out")
          history.push('/');
    // Sign-out successful.
          }).catch((error) => {
    // An error happened.
    });
      }

    useEffect(() => { 

        firebase.auth().onAuthStateChanged((user) => { 
          if (!user) { 
            setLoggedIn(false)
            
          }
          else { 
            setLoggedIn(true)
            
          }
        })
      });

    return ( 
        <div className = "footer"> 
        <Row className = "fixRow"> 
             
        <Col className = "col1"> <h3> Join our Discord Server! </h3>
       <a href = "https://discord.gg/79Hn4JMX3q">  <img src = {discord} className = "discord" /> </a></Col>
        <Col className = "col2"> <h3> Services </h3> 
        { !loggedIn ? 
        <Link className = "link" to = "/Login"> Login </Link>
            :
        <Link className = "link" onClick = {signOut} > Logout </Link> 
        } 
        <Row><br></br></Row>
        <Link className = "link" to = "/Help"> Help </Link>
        <Row><br></br></Row>
        <Link className = "link" to = "/Forums"> Forums </Link>  </Col>
        <Col className = "col3"> 
        <Row className = "fixRow"> <h3> Resources </h3></Row>
        <Link className = "link" to = "/Terms"> Terms of Service </Link>
        <Row><br></br></Row>
        <Link className = "link" to = "/Privacy"> Privacy Policy </Link> 
        </Col>
        
        </Row>
        
        </div>
        
    );
}
export default Footer; 