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
        <Link to ="/">
        <NavbarBrand className = 'brand'> 
        {/* <img src = {logo} alt = "logo"/> */}
        DissidiaReloaded
        </NavbarBrand>
      </Link>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen = {isOpen} navbar> 
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink> </NavLink>
            </NavItem>
              {!loggedIn ? 
               <NavLink> <Link to = '/Login' className = 'inactive'> Login/Register</Link> </NavLink>  
               : 
              <NavLink> <Link onClick = {signOut} className = 'inactive'>Logout </Link> </NavLink> }
          </Nav>
          </Collapse>
      </Navbar>
  );
}

export default NavBar;