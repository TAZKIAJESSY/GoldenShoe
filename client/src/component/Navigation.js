import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectToken, selectUser } from "../store/user/selectors";
import { selectCartItems } from "../store/cart/selectors";

import LoggedIn from "./LoggedIn";

import { Navbar, Nav } from "react-bootstrap";
import "./Navigation.css";
import godenShoe from "../Assets/Golden Shoe1.png";

export default function Navigation() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const cartItem = useSelector(selectCartItems());

  return (
    <Navbar bg="dark" variant={"dark"} expand="lg">
      <Navbar.Brand>
        <Link to={`/`}>
          {" "}
          <img
            src={godenShoe}
            width="160"
            height="85"
            className="d-inline-block align-top"
            alt="golden shoe"
          />
        </Link>
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

          <div className="nav-cart">
            <span>{cartItem.length}</span>
            <Nav.Link as={NavLink} to={"/cart"}>
              🛒
            </Nav.Link>
          </div>

          {user.token ? (
            <Nav.Link as={NavLink} to={"/myorder"}>
              My Order
            </Nav.Link>
          ) : null}

          {token ? (
            <LoggedIn />
          ) : (
            <Nav.Link as={NavLink} to={"/login"}>
              Login
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
