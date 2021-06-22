import React, {useState} from 'react';
import firebase from 'firebase'; 
import { FormGroup, Form, Input, Button, Row, Col, Alert } from 'reactstrap';
import { useHistory } from 'react-router-dom'; 
import bluelogo from '../images/blueLogo.png';
import redlogo from '../images/redLogo.png';


const Register = () => { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const history = useHistory(); 
    const [error, setError] = useState(false);

    const onSubmit = (e) => { 

        e.preventDefault();
        

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async () => { 
            await firebase.auth().currentUser.getIdToken(true)
            .then(() => { 
                
                console.log("A user was created")
                addUser({email, id: firebase.auth().currentUser.uid, lastName, firstName})
                firebase.auth().currentUser.updateProfile({
                displayName: firstName
            })
            history.push("/")
            window.location.reload();
            })

        })
        .catch((error) => { 
            setError(true)
            console.log(error);
        })
    }

    const onDismiss = () => {
        setError(false)
    }

    const addUser = (newUser) => { 
        const ref = firebase.firestore().collection("users");
        ref.doc().set(newUser); 
    }
    const toHome = () => { history.push('/')}
    const toLogin = () => { history.push('/Login')}

    return ( 
        <div> 
        <div className = "login"> 
        <Row className = "fixRow"> 
        <Col> 
        <img src = {bluelogo}  alt = "logo"/>
        </Col>
        <Col>
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
            <div className = "buttons"> 
           <Button className = "button" onClick={onSubmit} 
            color="secondary" > Register </Button>
            
            <Button className = "button" onClick = {toHome}
            color = "secondary"> Back to Home</Button> <br/>
            <Button className = "button" onClick = {toLogin}
            color = "secondary"> Back to Login</Button>
            </div>
            </FormGroup>
        </Form> 
        
        </Col> 
        <Col> 
        <img src = {redlogo}  alt = "logo"/>
        </Col>
       
        </Row>
         <Row> 
             <Col> 
            
        </Col>
        
        </Row>
        
        </div>
        <Row className = "centerRow"> 
        <Alert color = "danger" className = "error" isOpen={error} toggle = {onDismiss}> Please enter a valid Email, and a Password at least 6 characters. </Alert>
       </Row>
       </div> 
    );
}
export default Register; 