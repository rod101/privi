import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navcomp.css';

const Navcomp = () => {
    return(
        <Navbar className="color-nav" expand="lg" fixed="top"  variant="dark">
      
          <Navbar.Brand href="#home">
            <img
              className="germlogo"
              src="./assets/images/logo.png"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/product">Products</Nav.Link>
              <Nav.Link href="/service">Services</Nav.Link>
              <Nav.Link href="/application">SDS Application Form</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
         
            </Nav>
          </Navbar.Collapse>
     
      </Navbar>
    )
}

export default Navcomp