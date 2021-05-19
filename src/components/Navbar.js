import React, { useState, useEffect } from 'react';
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Navbar
} from 'reactstrap';
import firebase from 'firebase';
import { useHistory, Link} from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  const toggle = () => setIsOpen(!isOpen);

  const signOut = () => { 
    firebase.auth().signOut().then(() => {
      console.log("I signed out")
      history.push('/');
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
        
      }
    })
  });
  
  return (
      <Navbar className = "nav" color="color.nav" variant = "dark" expand="md">
        <Link className = "link" to ="/">
        <NavbarBrand className = 'link'> 
        {/* <img src = {logo} alt = "logo"/> */}
        DissidiaReloaded
        </NavbarBrand>
      </Link>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen = {isOpen} navbar> 
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink> <Link className = "link" to = '/Forums'> Forums</Link>  </NavLink> 
            </NavItem>
              {!loggedIn ? 
               <NavLink> <Link className = "link" to = '/Login' > Login/Register</Link> </NavLink>  
               : 
              <NavLink> <Link className = "link" onClick = {signOut}> Logout </Link> </NavLink> }
          </Nav>
          </Collapse>
      </Navbar>
  );
}

export default NavBar;