import React from "react";

import { Card, Button } from "react-bootstrap";

export default function OrderCard(props) {
  return (
    <div>
      <div>
        <Card
          style={{
            width: "18rem",
            borderRadius: "20px",
            height: "90%",
          }}
          className="shadow-lg p-3 mb-5 bg-white"
        >
          <div>
            {props.products
              ? props.products.map((p, index) => {
                  return (
                    <div key={index}>
                      <Card.Img
                        variant="top"
                        src={p.imageUrl}
                        style={{ width: 250, height: 200 }}
                      />{" "}
                    </div>
                  );
                })
              : null}
            <Card.Body>
              <Card.Title
                style={{
                  color: "black",
                  textDecoration: "none",
                  textTransform: " uppercase",
                }}
              >
                {props.name}
              </Card.Title>
              <Card.Text className="container">{props.description}</Card.Text>
            </Card.Body>{" "}
          </div>
          <Card.Body>
            <Card.Title
              style={{
                color: "black",
                textDecoration: "none",
                textTransform: " uppercase",
              }}
            >
              {props.name}
            </Card.Title>
            <Card.Text className="container">{props.description}</Card.Text>

            <p>
              <strong>{props.expectedDelivery}</strong>
            </p>
            <p>
              <strong>Order status:</strong> {props.status}
            </p>
          </Card.Body>{" "}
          <Button variant="secondary">Return</Button>
        </Card>
      </div>
    </div>
  );
}
