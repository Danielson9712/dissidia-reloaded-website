import React, {useEffect, useState } from 'react';
import firebase from 'firebase'; 
import { Input } from 'reactstrap';
import GalleryInfo from './GalleryInfo';

const Gallery = () => { 

    const [img, setImg] = useState('');

    const uploadImage = (e) => { 
        let file = e.target.files[0];
        let storageRef = firebase.storage().ref('minecraft_photos/'+ file.name);
        storageRef.put(file)
        .then(async (snapshot) => { 
            let profilePath = snapshot.metadata.fullPath;
            console.log(snapshot)
            setImg(profilePath)
    });
}
    return (
        <div>  
            <Input type = "file" onChange = {uploadImage}> </Input>
           <GalleryInfo profilePath = {img}/> 
        </div>
    );
}
 export default Gallery;