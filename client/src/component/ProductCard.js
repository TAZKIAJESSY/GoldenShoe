import React from "react";
import { Link } from "react-router-dom";

import { Card } from "react-bootstrap";
import CartButton from "./CartButton";
import "./ProductCard.css";

export default function ProductCard(props) {
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          borderRadius: "20px",
          height: "90%",
        }}
        className="shadow-lg p-3 mb-5 bg-white"
      >
        <Link to={`/details/${props.id}`}>
          <Card.Img
            variant="top"
            src={props.imageUrl}
            style={{ width: 250, height: 200 }}
          />{" "}
        </Link>
        <Card.Body>
          <Link to={`/details/${props.id}`}>
            <Card.Title
              style={{
                color: "black",
                textDecoration: "none",
                textTransform: " uppercase",
              }}
            >
              {props.name}
            </Card.Title>
          </Link>
          <Card.Text className="container">{props.description}</Card.Text>

          <p>
            <strong>${props.price}</strong>
          </p>
        </Card.Body>{" "}
        <CartButton id={props.id} />
      </Card>
    </div>
  );
}
