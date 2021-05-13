import React, {useState} from 'react';
import firebase from 'firebase'; 
import {useHistory} from 'react-router-dom';
import {Button, Form, FormGroup, Row, Input} from 'reactstrap';


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
          var credential = result.credential;
      
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
        }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
        history.push('/');
      
      }

    return ( 
        <div> 
            <Form> 
        <FormGroup>
          
            <div className="title"> 
              <h1> Dissidia Login</h1>
              </div>
          <Row>
            <Input onChange={(value) => setEmail(value.target.value)}
              type="Email"
              name="email"
              placeholder="Email" />
          </Row>
          <Row> 
            <Input onChange={(value) => setPassword(value.target.value)}
              type="password"
              name="Password"
              placeholder="Password" />
            </Row>
            <Button onClick={authLogin} color="info"> Sign in </Button>
            <Button color = "info" onClick = {toHome}> Back to Home</Button>
            <Button color = "info" onClick = {toRegister}> Sign up</Button>
            <Button color = "info" onClick = {googleLogin}> Sign in with google</Button>
        </FormGroup>
        </Form> 
        </div>
    );
}
export default Login; 