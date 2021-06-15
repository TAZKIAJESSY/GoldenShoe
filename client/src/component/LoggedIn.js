import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Nav } from "react-bootstrap";

import { selectUser } from "../store/user/selectors";
import { logOut } from "../store/user/actions";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <Nav.Item style={{ padding: ".5rem 1rem" }}>
        <i style={{ color: "white" }}> Hello</i>{" "}
        <b style={{ color: "yellow" }}> 🌸 {user.firstName}</b>
      </Nav.Item>
      <Button variant="warning" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </>
  );
}
