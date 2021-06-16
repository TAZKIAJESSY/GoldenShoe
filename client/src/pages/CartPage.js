import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Button, Table, Jumbotron, Container, Form } from "react-bootstrap";

import CartButton from "../component/CartButton";
import { selectCartItems, selectTotalCartPrice } from "../store/cart/selectors";
import { emptyCart } from "../store/cart/actions";
import { specificCoupon } from "../store/coupon/actions";
import { selectCoupon } from "../store/coupon/selectors";
import { selectToken } from "../store/user/selectors";

export default function Cart() {
  const [code, set_code] = useState("");
  const [showLink, setShowLink] = useState(false);

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems());
  const coupon = useSelector(selectCoupon);
  const totalCartPrice = useSelector(selectTotalCartPrice());
  const token = useSelector(selectToken);
  const history = useHistory();

  function getCoupon(event) {
    event.preventDefault();

    dispatch(specificCoupon(code));
  }

  function getOrder() {
    if (token) {
      setShowLink(false);
      history.push("/orderform");
    } else {
      setShowLink(true);
    }
  }

  return (
    <Container>
      {cartItems.length ? (
        <div>
          <Jumbotron
            style={{
              marginTop: 50,
              backgroundColor: "#d9c65d",
              color: "#0D4D4D",
              textAlign: "center",
              overflow: "auto",
            }}
          >
            <h1>Your Shopping Cart</h1>
          </Jumbotron>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>

                <th>Details</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>

                  <td>
                    <Link
                      style={{ color: "black" }}
                      to={`/details/${item.product.id}`}
                    >
                      {item.product.name}
                    </Link>
                    <p> {`${item.quantity} x €${item.product.price}`}</p>
                  </td>
                  <td>
                    {" "}
                    <CartButton id={item.product.id} />
                  </td>
                  <td>
                    €
                    {Math.round(item.quantity * item.product.price * 100) / 100}
                  </td>
                </tr>
              ))}

              <tr>
                <td>
                  <strong>Total:</strong>
                </td>
                <td> </td>
                <td> </td>
                <td>
                  <strong>€{Math.round(totalCartPrice * 100) / 100}</strong>
                </td>
              </tr>
              {/* if coupon exist then calculate total price */}
              {coupon ? (
                <>
                  {" "}
                  <tr>
                    <td>
                      <strong>Coupon:</strong>
                    </td>
                    <td> </td>
                    <td> </td>
                    <td>
                      <strong> - €{coupon?.value}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>SubTotal:</strong>
                    </td>
                    <td> </td>
                    <td> </td>
                    <td>
                      <strong>
                        €
                        {Math.round((totalCartPrice - coupon?.value) * 100) /
                          100}
                      </strong>
                    </td>
                  </tr>
                </>
              ) : (
                <></>
              )}
            </tbody>
          </Table>
          <div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Your Coupon Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter code"
                  value={code}
                  onChange={(event) => set_code(event.target.value)}
                />
              </Form.Group>

              <Button
                variant="dark"
                type="submit"
                onClick={getCoupon}
                style={{ marginTop: 15, marginBottom: 20 }}
              >
                Apply Coupon
              </Button>
            </Form>
          </div>
          <Button variant="warning" onClick={() => dispatch(emptyCart())}>
            Empty Cart
          </Button>{" "}
          <Button variant="secondary" onClick={getOrder}>
            Place Order
          </Button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              allignItems: "center",
              marginTop: "8rem",
              fontSize: "2rem",
              color: "",
            }}
          >
            {" "}
            {showLink ? (
              <Link to={`/login`}>Please Login to place order!</Link>
            ) : null}{" "}
          </div>
        </div>
      ) : (
        <Jumbotron
          style={{
            marginTop: 40,
            backgroundColor: "#d9c65d",
            color: "#0D4D4D",
            textAlign: "center",
            overflow: "auto",
          }}
        >
          <h2>Nothing In Your Shopping Cart Yet :( </h2>
        </Jumbotron>
      )}
    </Container>
  );
}
