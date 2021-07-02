import React, {useState} from 'react';
import firebase from 'firebase'; 
import {useHistory} from 'react-router-dom';
import {Button, Form, FormGroup, Row, Input, Col} from 'reactstrap';
import bluelogo from '../images/blueLogo.png';
import redlogo from '../images/redLogo.png';

const Login = () => { 

  const provider = new firebase.auth.GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
    const history = useHistory();
    const toHome = () => { history.push('/')}
    const toRegister = () => { history.push('/Register')}

    const authLogin = async () => {
    
        await firebase.auth().signInWithEmailAndPassword(email,password)
        .then((result) => {
            console.log(result)
            history.push('/')
        })
        .catch((error) => {
          console.log(error)
        })
      }

      const googleLogin = () => { 
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          console.log(result);
        }).catch((error) => {
         console.log(error);
        });
        history.push('/');
      
      }

    return ( 
        <div className = "login"> 
          <Row className = "fixRow"> 
            <Col> 
          <img src = {bluelogo} className = "bluelogo" alt = "logo"/>
          </Col>
          <Col> 
            <Form> 
        <FormGroup>
        
    <div className = "title"> 
              <h1> Dissidia Login</h1>
          </div>  
          <div>   
          <Row>
            <Input onChange={(e) => setEmail(e.target.value)}
              type="Email"
              name="email"
              placeholder="Email" />
          </Row>
          <Row> 
            <Input onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="Password"
              placeholder="Password" />
            </Row>
           <div className = "buttons"> 
            <Button className = "button" onClick={authLogin} color="secondary"> Sign in </Button>
            <Button className = "button" color = "secondary" onClick = {toRegister}> Sign up</Button>
            <br></br>
            <Button className = "button" color = "secondary" onClick = {googleLogin}> Sign in with google</Button>
        </div>
        </div>
        </FormGroup>
        </Form> 
        </Col>
        <Col> 
         <img src = {redlogo} className = "redlogo" alt = "logo"/>
        </Col>
        </Row>
        </div>
    );
}
export default Login; 