import React, {useState, useEffect} from 'react';
import firebase from 'firebase'; 
import { Button } from 'reactstrap';
import {useHistory } from 'react-router-dom';
import serverlogo from '../images/serverlogo.webp';

const Dash = () => { 

    return ( 
        <div className = "test"> 
            <h1> Welcome to DissidiaReloaded!</h1>
            <img src = {serverlogo} alt = "logo"/>
        </div>
    );
}
export default Dash; 