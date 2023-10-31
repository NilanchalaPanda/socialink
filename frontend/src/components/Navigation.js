import React from 'react'
import { Nav, Navbar, Container, Button, NavDropdown } from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";
import logo from "../assets/logo.png";


// 26:11 video styling
function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-primary">
      <Container>
        <LinkContainer to="/">  
          <Navbar.Brand>
            <img src={logo} alt="SOCIALINK" width={"80px"} className='rounded' />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/login" >
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/chat" >
              <Nav.Link>Chat</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation