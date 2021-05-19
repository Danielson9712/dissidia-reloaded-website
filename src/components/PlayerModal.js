import React, {useState, useEffect } from 'react';
import axios from 'axios'; 
import { Button, Modal, ModalBody, ModalHeader, Row, Col } from 'reactstrap';
import firebase from 'firebase';
const PlayerModal = () => { 

    const [modal, setModal] = useState(false); 
    const [players, setPlayers] = useState([{}]);
    const [img, setImg] = useState("");

    const toggle = () => setModal(!modal);

    useEffect(() => { 
        axios.get('https://mcapi.us/server/status?ip=play.dissidiareloaded.com').then((res) => {
            console.log(res);
            setPlayers(res.data.players.sample)
            console.log(res.data.players.sample)
            console.log(players)

        })
        .catch((error) => { 
            console.log(error); 
        })
        axios.get(`https://minotar.net/avatar/${players[0].id}`).then((res) => {
            setImg(`https://minotar.net/avatar/${res.data.players[0].id}/75`)
            console.log(img);
        })
        .catch((error) => { 
            console.log(error);
        })
        
    },[])
    return ( 
        <div> 
            <Button color = "primary" onClick ={toggle}> Players </Button>
            <Modal isOpen = {modal} toggle = {toggle}> 
            <ModalHeader toggle = {toggle}> Online Players</ModalHeader>
            <ModalBody> 
        { players.map(player => {
            return ( 
                <>
            <Row><Col><h3 className = "playerName"> {players[0].name} </h3> </Col>
            <Col> <img src = {img} alt="player head" className = "head"/> </Col> </Row>
            
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