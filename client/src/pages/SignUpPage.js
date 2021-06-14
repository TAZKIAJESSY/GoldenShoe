import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Col, Button, Container, Form } from "react-bootstrap";

import { signUp } from "../store/user/actions";
import { selectToken } from "../store/user/selectors";

export default function SignUp() {
  const [firstName, set_firstName] = useState("");
  const [lastName, set_lastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(firstName, lastName, email, password, address));

    setEmail("");
    setPassword("");
    set_firstName("");
    set_lastName("");
    setAddress("");
  }

  return (
    <Container
      style={{
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Color_icon_white.svg/1200px-Color_icon_white.svg.png")`,
        marginTop: "5rem",
      }}
    >
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Signup</h1>
        <Form.Group controlId="formBasicName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            value={firstName}
            onChange={(event) => set_firstName(event.target.value)}
            type="text"
            placeholder="Enter first name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            value={lastName}
            onChange={(event) => set_lastName(event.target.value)}
            type="text"
            placeholder="Enter last name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            type="text"
            placeholder="Address"
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Sign up
          </Button>
        </Form.Group>
        <Link to="/login">Click here to log in</Link>
      </Form>
    </Container>
  );
}
