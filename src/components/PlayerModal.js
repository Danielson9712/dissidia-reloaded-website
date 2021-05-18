import React, {useState, useEffect } from 'react';
import axios from 'axios'; 
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import firebase from 'firebase';
const PlayerModal = () => { 

    const [modal, setModal] = useState(false); 
    const [players, setPlayers] = useState([{}]);
    const [uid, setUid] = useState("");
    const [img, setImg] = useState("");

    const toggle = () => setModal(!modal);

    useEffect(() => { 
        axios.get('https://mcapi.us/server/status?ip=play.dissidiareloaded.com').then((res) => {
            console.log(res);
            setPlayers(res.data.players.sample)
            setUid(res.data.players.sample[0].id)
            console.log(res.data.players.sample)
            console.log(players)
        })
        .catch((error) => { 
            console.log(error); 
        })
        axios.get(`https://crafatar.com/avatars/${uid}`).then((res) => {
            setImg(res)
            console.log(res);
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
            <img src = {img} alt="player head"/> 
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