import React, {useEffect, useState } from 'react';
import firebase from 'firebase'; 

const GalleryInfo = (props) => { 
    
    const [img, setImg] = useState("");

    useEffect(() => { 
        if (props.profilePath !== "") {
        console.log(props.profilePath)
        firebase.storage().ref(props.profilePath).getDownloadURL().then((url) => { 
            setImg(url);
        })
        }

    }, [props.profilePath]);

    return ( 
        <div> 
            <img src={img} alt = "image"/> 
        </div>
    );
}
export default GalleryInfo;