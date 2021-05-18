import React, {useState, useEffect } from 'react';
import axios from 'axios'; 
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
const PlayerModal = () => { 

    const [modal, setModal] = useState(false); 
    const [players, setPlayers] = useState([{}]);

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
            <h4> {players[0].name} </h4>
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