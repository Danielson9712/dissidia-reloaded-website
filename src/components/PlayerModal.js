import React, {useState, useEffect } from 'react';
import axios from 'axios'; 
import { Button, Modal, ModalBody, ModalHeader, Row, Col } from 'reactstrap';
import firebase from 'firebase';
const PlayerModal = () => { 

    const [modal, setModal] = useState(false); 
    const [players, setPlayers] = useState([{}]);

    const toggle = () => setModal(!modal);

     useEffect(() => {
        axios.get('https://eu.mc-api.net/v3/server/ping/play.dissidiareloaded.com').then((res) => {
            const playerNames = res.data.players.sample.map(player => {
                player.image = `https://crafatar.com/avatars/${player.id}`
                return player;
            })
            console.log(res);
            setPlayers(playerNames)
            console.log(res.data.players.sample)
            console.log(players)

        })
        .catch((error) => { 
            console.log(error); 
        })
       
    },[])
    return ( 
        <div> 
            <Button color = "primary" onClick ={toggle}> Whos Online? </Button>
            <Modal isOpen = {modal} toggle = {toggle}> 
            <ModalHeader toggle = {toggle}> Online Players</ModalHeader>
            <ModalBody> 
        { players.map(player => {
            return ( 
                <>
            <Row><Col><h3 className = "playerName"> {player.name} </h3> </Col>
            <Col> <img src = {player.image} className = "head"/> </Col> </Row>
            
            </>
            )
        })
            }
            </ModalBody>
            </Modal>
        </div>
    );
}

export default PlayerModal;