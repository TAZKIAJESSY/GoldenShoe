import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Image } from "react-bootstrap";

import CartButton from "../component/CartButton";
import { showDeatils } from "../store/product/actions";
import { selectDetails } from "../store/product/selectors";

export default function DetailsPage() {
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);

  const { id } = useParams();

  useEffect(() => {
    dispatch(showDeatils(id));
  }, [dispatch, id]);

  return (
    <div>
      <br />
      {details ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            flexFlow: "wrap",
            boxShadow: "2px 8px 20px #ddd",
            padding: "20px",
            margin: "20px",
            borderRadius: "10px",
          }}
        >
          <Image width="300em" variant="top" src={details.imageUrl} alt="" />
          <div style={{ width: "500px", height: "400px" }}>
            <div>
              <div
                className="d-flex w-100 justify-content-between"
                style={{ margin: " 30px 0" }}
              >
                <h5 className="mb-1">{details.name}</h5>
                <strong style={{ color: "red" }}>{details.price}$</strong>
              </div>
              <p className="mb-1">{details.description}</p>
              <small>{details.category}</small>
              <br />

              {/* {cartItems?.map((item, index) => (
                <CartButton id={item.product.id} />
              ))} */}

              <CartButton id={details.id} />
            </div>
          </div>
        </div>
      ) : (
        <p>loading</p>
      )}
      <br />
    </div>
  );
}
