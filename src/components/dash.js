import React, {useState, useEffect} from 'react';
import firebase from 'firebase'; 
import { Button, Alert, Jumbotron, Row, Col } from 'reactstrap';
import {useHistory } from 'react-router-dom';
import serverlogo from '../images/serverlogo.png';
import axios from 'axios';
import PlayerModal from './PlayerModal';
import Owners from './Owners';

const Dash = (props) => { 
const [players, setPlayers] = useState("");
const [online, setOnline] = useState(false);
const [version, setVersion] = useState(""); 
const [max, setMax] = useState("");
const [skin, setSkin] = useState(""); 

    useEffect(() => { 
        axios.get('https://eu.mc-api.net/v3/server/ping/play.dissidiareloaded.com').then((res) => {
            console.log(res);
            setOnline(res.data.online)
            setPlayers(res.data.players.online)
            setMax(res.data.players.max)
            setVersion(res.data.version.name)
            
        })
        .catch((error) => { 
            console.log(error); 
        })
        setSkin('https://crafatar.com/avatars/b33ac765-820c-4f04-8af0-e14481f48b87')
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
            
            <h1> About </h1>
            <p className = "about"> Welcome to DissidiaReloaded! We are a small, 24/7 mostly vanilla server made to revive 
            DissidiaCraft, a popular server we knew and loved back in the day. We run our plugins 
            using spigot and have popular ones such as McMMO, Towny, and much more! Our server is 
            managed, updated, and moderated frequently for a smooth, friendly, player experience. 
            Join our discord, make friends, and start your Dissidian adventure today! 
            </p>
            <div className = "credit"> 
            <h3> Original DissidaCraft owner: Matthew99144 aka Syllbia <img src = {skin} alt = "skin" className = "ownerSkin" /></h3>
            </div><div className = "jumbo">
            <Row> <h1> Server Info</h1> </Row>
            <Row> <h5> Server ip: play.dissidiareloaded.com </h5></Row>
            
            <Row>
            { online ? 
            <div> 
               <h4><Alert className = "alert" color = "success"> Status: Online </Alert> </h4>
               <Row> <h4> Version: {version}</h4></Row> 
            <Row className = "modalLine"> 
            <Col> <h4> Players: {players}/{max}</h4></Col>
                <PlayerModal/>
               </Row> 
               </div>
               : 
               <Alert className = "alert" color = "danger "> Status: Offline </Alert> } </Row>
               <h5> Vote for the server <a href = "https://www.planetminecraft.com/server/dissidia-reloaded/"> here! </a></h5>

            </div> 
            </div>
            
            
        
       </div> 
    );
}
export default Dash; 