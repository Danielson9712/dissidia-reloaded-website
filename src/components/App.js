import firebase from 'firebase';
import React, {useState, useEffect} from 'react';
//components 
function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const firebaseConfig = {
    apiKey: "AIzaSyC-tTDGr6lbMP9klqQdC8uOXym4B8mJzbo",
    authDomain: "minecraft-website-a445e.firebaseapp.com",
    projectId: "minecraft-website-a445e",
    storageBucket: "minecraft-website-a445e.appspot.com",
    messagingSenderId: "989798867747",
    appId: "1:989798867747:web:5c22f9d93b47685c1ae296",
    measurementId: "G-0HBL1RLW5T"
  };
  //Initialize firebase 
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one

  }

  useEffect(() => { 

    firebase.auth().onAuthStateChanged((user) => { 
      if (!user) { 
        setLoggedIn(false)
      }
      else { 
        setLoggedIn(true)
      }
    })
  });
  
  return (
    <div className="App">
      <h1> Welcome back to DissidiaCraft! </h1>
    </div>
  );
}

export default App;
