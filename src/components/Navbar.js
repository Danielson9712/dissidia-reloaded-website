import React, { useState, useEffect } from 'react';
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarText
} from 'reactstrap';
import firebase from 'firebase';
import { useHistory, Link} from 'react-router-dom';
import Hamburger from '../images/hamburger.png'


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [displayName, setDisplayName] = useState("");
 
  const ref = firebase.firestore().collection("users");
  

  const history = useHistory();

  const toggle = () => setIsOpen(!isOpen);

  const signOut = () => { 
    firebase.auth().signOut().then(() => {
      console.log("I signed out")
      history.push('/');
      window.location.reload();
// Sign-out successful.
      }).catch((error) => {
// An error happened.
});
  }
  useEffect(() => { 

    firebase.auth().onAuthStateChanged((user) => { 
      if (!user) { 
        setLoggedIn(false)
        
      }
      else { 
        setLoggedIn(true)
        const displayName = firebase.auth().currentUser.displayName;
        setDisplayName(displayName)
      }
    })
  }, []);
  
  return (
      <Navbar className = "nav" color="color.nav" variant = "dark" expand="md">
        <Link className = "link" to ="/">
        <NavbarBrand className = 'link'> 
        {/* <img src = {logo} alt = "logo"/> */}
        DissidiaReloaded
        </NavbarBrand>
      </Link>

        <NavbarToggler onClick={toggle}> 
        <img src = {Hamburger} alt = "ham" className = "hamburger"/> 
        </NavbarToggler>
        <Collapse isOpen = {isOpen} navbar> 
          <Nav className="mr-auto" navbar>
            {loggedIn ?
            <>
            {/* <NavItem>
              <NavLink> <Link className = "link" to = '/Gallery'> Gallery</Link>  </NavLink> 
            </NavItem> */}
              <NavLink> <Link className = "link" onClick = {signOut}> Logout </Link> </NavLink>
              </>
              :
               <NavLink> <Link className = "link" to = '/Login' > Login/Register</Link> </NavLink> 
              }
          </Nav> 
          </Collapse>
          {loggedIn ? 
          <NavbarText className = "navtext"> Welcome back, {displayName}!</NavbarText> 
          :
          <NavbarText className = "navtext"> </NavbarText>
          }
      </Navbar>
  );
}

export default NavBar;