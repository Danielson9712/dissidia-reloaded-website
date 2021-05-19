import React, {useEffect, useState } from 'react';
import firebase from 'firebase'; 
import {Row, Col } from 'reactstrap';
import { useHistory, Link} from 'react-router-dom';

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
             
        <Col> <h3> Join our Discord Server! </h3>
        <p> Discord link goes here </p></Col>
        <Col> <h3> Services </h3> 
        { !loggedIn ? 
        <Link className = "link" to = "/Login"> Login </Link>
            :
        <Link className = "link" onClick = {signOut} > Logout </Link> 
        } 
        <Row><br></br></Row>
        <Link className = "link" to = "/Help"> Help </Link>
        <Row><br></br></Row>
        <Link className = "link" to = "/Forums"> Forums </Link>  </Col>
        <Col> 
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