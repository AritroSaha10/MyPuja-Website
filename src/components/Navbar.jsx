import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar as BSNavbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

function Navbar() {
  return (
    <BSNavbar bg="light" expand="lg">
      <BSNavbar.Brand as={NavLink} to="/" exact>Firebase Test</BSNavbar.Brand>
      <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BSNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" exact>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/events">
            Events
          </Nav.Link>
          <Nav.Link as={NavLink} to="/livestreams">
            Livestreams
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
        </Nav>
      </BSNavbar.Collapse>
    </BSNavbar>
  );
}

export default Navbar;
