import React, {useEffect, useState } from 'react';
import firebase from 'firebase'; 
import {Row, Col } from 'reactstrap';
import { useHistory, Link} from 'react-router-dom';
import discord from '../images/discord.png';

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
        <Col> 
        <Row>
          <Col className = "discord"> 
             <a href = "https://discord.gg/79Hn4JMX3q"
             target = "_blank" rel = "noopener noreferrer"> 
            <img src = {discord} alt = "disc" className = "discimg"/> </a>
       </Col> 
       </Row>
        <Row className = "fixRow"> 
        <p> Copyright &copy; Daniel Christenson, all rights reserved.</p>
        </Row>
        </Col>
        </div>
        
    );
}
export default Footer; 