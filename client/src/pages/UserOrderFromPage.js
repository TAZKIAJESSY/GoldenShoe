import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createOrder } from "../store/userOrder/actions";
import { selectCartItems } from "../store/cart/selectors";
import { selectUser } from "../store/user/selectors";

import { Form, Container, Button, Col, Jumbotron } from "react-bootstrap";
import "./UserOrderForm.css";

export default function UserOrderFormPage() {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems());
  const user = useSelector(selectUser);

  const [message, set_message] = useState("");
  function submitForm(event) {
    event.preventDefault();
    set_message("Thank you for purchasing from Golden Shoe!");

    dispatch(createOrder(cartItems));
  }

  return (
    <Container>
      <Container
        style={{
          // backgroundImage: `url("https://img.freepik.com/free-photo/white-running-shoes-water-bottle-abstract-yellow-blue-background-concept-running-training-sport_164357-3114.jpg?size=626&ext=jpg")`,
          marginTop: 30,
        }}
      >
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          {/* <h1 className="mt-5 mb-5" style={{ color: "", overflow: "auto" }}>
            Please Confirm Your Order
          </h1> */}
          <Jumbotron
            style={{
              marginTop: 50,
              backgroundColor: "#99968e",
              color: "#0D4D4D",
              display: "flex",
              justifyContent: "center",
              allignItems: "center",
              width: "100%",
              overflow: "auto",
            }}
          >
            <h1> Please Confirm Your Order</h1>
          </Jumbotron>
          <div>
            <div className="userInfo">
              Here are detailed information for you!
            </div>
            <br />
            <div>
              <p className="userInfo">
                Name: {user.firstName} {user.lastName}
              </p>
              <p className="userInfo">Delivery Address: {user.address}</p>
            </div>
          </div>

          <Form.Group className="mt-5">
            <Button
              variant="dark"
              type="submit"
              size="sm"
              style={{ width: "100%", fontSize: 20, padding: 10 }}
              onClick={submitForm}
            >
              Confirm Order
            </Button>
          </Form.Group>
        </Form>
      </Container>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          allignItems: "center",
          marginTop: 50,
          fontSize: 25,
          color: "#2898d4",
          fontFamily: "italic",
        }}
      >
        <p>
          <b>{message}</b>
        </p>
      </Container>
    </Container>
  );
}
