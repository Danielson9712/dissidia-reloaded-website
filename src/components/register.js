import React, {useState} from 'react';
import firebase from 'firebase'; 
import { FormGroup, Form, Input } from 'reactstrap';

const Register = () => { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const onSubmit = (e) => { 

        e.preventDefault();
        
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async () => { 
            await firebase.auth().currentUser.getIdToken(true)
            .then((result) => { 
                
            })
            
        })

    }
    return ( 
        <div className = "register"> 
        <Form> 
            <FormGroup> 
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
            </FormGroup>
        </Form>
        </div>
    );
}
export default Register; 