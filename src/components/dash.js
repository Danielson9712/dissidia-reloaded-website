import React, {useState, useEffect} from 'react';
import firebase from 'firebase'; 
import { Button, Alert, Jumbotron } from 'reactstrap';
import {useHistory } from 'react-router-dom';
import serverlogo from '../images/serverlogo.webp';
import axios from 'axios';

const Dash = () => { 
const [players, setPlayers] = useState("");
const [online, setOnline] = useState(false);
const [hostname, setHostName] = useState("");
const [version, setVersion] = useState(""); 
const [max, setMax] = useState("");

    useEffect(() => { 
        axios.get('https://api.mcsrvstat.us/2/play.dissidiareloaded.com').then((res) => {
            console.log(res);
            setHostName(res.data.hostname)
            setOnline(res.data.online)
            setPlayers(res.data.players.online)
            setMax(res.data.players.max)
            
        })
        .catch((error) => { 
            console.log(error); 
        })
    },[])
    
    const refresh = () => { 
        setTimeout(5000)
    }

    return ( 
        <div className = "dash"> 
            <h1> Welcome to DissidiaReloaded!</h1>
            <h2> IP: {hostname} </h2> 
            <img src = {serverlogo} alt = "logo"/>
            
            <Jumbotron onChange = {refresh}>
            <h1> Server Info</h1>
            <h3> Server Name: {hostname} </h3>
              <h3> Status:</h3> 
            { online ? 
               <Alert color = "success"> Online </Alert>
               : 
               <Alert color = "danger "> Offline </Alert> } 
               <h4> Players: {players}/{max} </h4>
            </Jumbotron> 
            
        </div>
    );
}
export default Dash; 