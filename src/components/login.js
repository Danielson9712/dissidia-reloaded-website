import React, {useState} from 'react';
import firebase from 'firebase'; 
import {useHistory} from 'react-router-dom';
import {Button, Form, FormGroup, Row, Input} from 'reactstrap';


const Login = () => { 

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
        </FormGroup>
        </Form> 
        </div>
    );
}
export default Login; 