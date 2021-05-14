import firebase from 'firebase';
import React, {useState, useEffect} from 'react';
import {Button } from 'reactstrap';
import { BrowserRouter as Router, Route} from 'react-router-dom';
//components 
import Dash from './components/Dash';
import Register from './components/Register';
import Login from './components/Login'; 
import NavBar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const firebaseConfig = {
    apiKey: "AIzaSyC-tTDGr6lbMP9klqQdC8uOXym4B8mJzbo",
    authDomain: "minecraft-website-a445e.firebaseapp.com",
    projectId: "minecraft-website-a445e",
    storageBucket: "minecraft-website-a445e.appspot.com",
    messagingSenderId: "989798867747",
    appId: "1:989798867747:web:5c22f9d93b47685c1ae296",
    measurementId: "G-0HBL1RLW5T"
  };
  //Initialize firebase 
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one

  }
  
  return (
    <div className="App"> 
    
      <Router> 
      <NavBar/>
        <Route exact path = "/" component ={Dash} />
        <Route path = "/Login" component = {Login}/>
        <Route path = "/Register" component = {Register}/>
      </Router>
      <Footer/>
      </div>
  
  );
}

export default App;
