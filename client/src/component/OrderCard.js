import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Card, Button, Form } from "react-bootstrap";

import { returnProduct } from "../store/userOrder/actions";

export default function OrderCard(props) {
  const dispatch = useDispatch();

  //usestate
  const [returnChecked, setReturnChecked] = useState(false);

  const [returnProducts, setReturnProducts] = useState([]);

  const handleAddReturnProduct = (pid, reason) => {
    setReturnProducts([
      ...returnProducts,
      {
        productId: pid,
        reason: reason,
      },
    ]);
  };

  console.log("handleAddReturnProduct: ", returnProducts);

  function submitReturn() {
    dispatch(returnProduct(props.id, returnProducts));
  }

  //console.log("productId: ", productId);

  return (
    <div>
      <Card
        style={{
          width: "18rem",
          borderRadius: "15px",
        }}
        className="shadow-lg p-3 mb-5 bg-white"
      >
        <div>
          {props.products
            ? props.products.map((p, index) => {
                return (
                  <div key={index}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={p.id}
                        onChange={(e) => setReturnChecked(!returnChecked)}
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Check to return
                      </label>
                    </div>
                    <br />
                    <div>
                      <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="inlineFormCustomSelectPref"
                        custom
                        onChange={(event) =>
                          handleAddReturnProduct(p.id, event.target.value)
                        }
                        required
                      >
                        <option value="0">Reason...</option>
                        <option value="Incorrect shoe size">
                          Incorrect shoe size
                        </option>
                        <option value="Didn't like the shoe style">
                          Didn't like the shoe style
                        </option>
                        <option value="Didn't like the color">
                          Didn't like the color
                        </option>
                        <option value="Others">Others</option>
                      </Form.Control>
                    </div>
                    <Card.Text style={{ color: "grey", fontSize: 20 }}>
                      <span>
                        {" "}
                        <b>{p.name}</b>
                      </span>
                      <span style={{ marginLeft: "5rem" }}>${p.price}</span>
                    </Card.Text>
                    <Card.Img
                      variant="top"
                      src={p.imageUrl}
                      style={{ width: 250, height: 200 }}
                    />{" "}
                    {/* <Card.Text>Quantity: {p.orderItem.quantity}</Card.Text> */}
                  </div>
                );
              })
            : null}
        </div>
        <Card.Body>
          <Card.Text className="container">
            {" "}
            <b>Delivery: </b>
            {props.expectedDelivery}
          </Card.Text>
          <Card.Text className="container">
            <b>Order status: </b>
            {props.status}
          </Card.Text>
        </Card.Body>{" "}
        <br />
        <Button variant="secondary" onClick={submitReturn}>
          Return
        </Button>
      </Card>
    </div>
  );
}
