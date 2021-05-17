import React, {useState} from 'react';
import firebase from 'firebase'; 
import { FormGroup, Form, Input, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom'; 

const Register = () => { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const history = useHistory(); 

    const onSubmit = (e) => { 

        e.preventDefault();
        
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async () => { 
            await firebase.auth().currentUser.getIdToken(true)
            .then(() => { 
                history.push("/")
                console.log("A user was created")
            })
            .catch((error) => { 
                console.log(error)
            })
        })

    }
    const toHome = () => { history.push('/')}
    const toLogin = () => { history.push('/Login')}

    return ( 
        <div className = "register"> 
        <Form> 
            <FormGroup> 
            <div className="title"> 
              <h1> Dissidia Login</h1>
              </div>
            <Input onChange = {(e) => setFirstName(e.target.value)} 
            type = "text"
            name = "firstname"
            placeholder = "First Name"/>

            <Input onChange = {(e) => setLastName(e.target.value)} 
            type = "text"
            name = "lastName"
            placeholder = "Last Name"/>

            <Input onChange = {(e) => setEmail(e.target.value)} 
            type = "email"
            name = "email"
            placeholder = "Email"/>

            <Input onChange = {(e) => setPassword(e.target.value)} 
            type = "password"
            name = "password"
            placeholder = "Password"/>

            <Button onClick={onSubmit} 
            color="info" > Register </Button>
            <Button onClick = {toHome}
            color = "info"> Back to Home</Button>
            <Button onClick = {toLogin}
            color = "info"> Back to Login</Button>
            
            </FormGroup>
        </Form>
        </div>
    );
}
export default Register; 