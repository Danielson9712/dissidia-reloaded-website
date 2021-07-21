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
        
        <Row> 
             <Row> 
          <img src = {discord} alt = "disc" className = "discord"/> 
        </Row>
        <Col className = "col2"> <h3> Services </h3> 
        { !loggedIn ? 
        <Link className = "link" to = "/Login"> Login </Link>
            :
        <Link className = "link" onClick = {signOut} > Logout </Link> 
        } 
        <Row><br></br></Row>
        <Link className = "link"> Gallery </Link>
        <Row><br></br></Row>
        <Link className = "link"> Forums </Link>  </Col>
        <Col className = "col3"> 
        <Row className = "fixRow"> <h3> Social Media </h3></Row>
        </Col>
        
        </Row>
        
        </div>
        
    );
}
export default Footer; 