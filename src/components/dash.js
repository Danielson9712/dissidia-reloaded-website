import React, {useState, useEffect} from 'react';
import firebase from 'firebase'; 
import { Button, Alert, Jumbotron, Row, Col } from 'reactstrap';
import {useHistory } from 'react-router-dom';
import serverlogo from '../images/serverlogo.webp';
import axios from 'axios';
import PlayerModal from './PlayerModal';
import Owners from './Owners';
import Gallery from './Gallery'; 

const Dash = (props) => { 
const [players, setPlayers] = useState("");
const [online, setOnline] = useState(false);
const [version, setVersion] = useState(""); 
const [max, setMax] = useState("");

    useEffect(() => { 
        axios.get('https://mcapi.us/server/status?ip=play.dissidiareloaded.com').then((res) => {
            console.log(res);
            setOnline(res.data.online)
            setPlayers(res.data.players.now)
            setMax(res.data.players.max)
            setVersion(res.data.server.name)
            
        })
        .catch((error) => { 
            console.log(error); 
        })
    },[])
    
    const refresh = () => { 
        
    }

    return ( 
        <div> 
            <Owners/>
        <div className = "dash"> 
         
            <h1> Welcome to DissidiaReloaded!</h1>
            <h2>play.dissidareloaded.com </h2> 
            <img className = "logo" src = {serverlogo} alt = "logo"/>
            
            
            <div className = "tags"> 
             <h3> Towny • McMMO • EssentialsX • MobRewards • ChestShops</h3> 
             </div>
             <div className = "about"> 
            <h1> About </h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            </div>
            <Jumbotron fluid className = "jumbo">
            <Row> <h1> Server Info</h1> </Row>
            <Row> <h5> Server ip: play.dissidiareloaded.com </h5></Row>
            
            <Row>
            { online ? 
            <div> 
               <Alert className = "alert" color = "success"> Status: Online </Alert>
               <Row> <h4> Version: {version}</h4></Row> 
            <Row className = "modalLine"> 
            <Col> <h4> Players: {players}/{max}</h4></Col>
                <PlayerModal/>
               </Row> 
               </div>
               : 
               <Alert className = "alert" color = "danger "> Status: Offline </Alert> } </Row>
               <h5> Vote for the server <a href = "https://www.planetminecraft.com/server/dissidia-reloaded/"> here! </a></h5>

            </Jumbotron> 
        
       </div> 
    );
}
export default Dash; 