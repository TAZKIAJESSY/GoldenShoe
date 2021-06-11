import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import godenShoe from "../Assets/Golden Shoe1.png";

export default function Navigation() {
  return (
    <Navbar bg="dark" variant={"dark"} expand="lg">
      <Navbar.Brand>
        <img
          src={godenShoe}
          width="160"
          height="85"
          className="d-inline-block align-top"
          alt="golden shoe"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        style={{
          fontSize: 22,
          fontFamily: "serif",
          justifyContent: "flex-end",
          marginRight: 100,
        }}
      >
        <Nav>
          <Nav.Link exact as={NavLink} to={"/"}>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to={"/details"}>
            Details
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
