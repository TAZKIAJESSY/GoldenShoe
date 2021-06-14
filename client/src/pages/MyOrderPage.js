import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Spinner } from "react-bootstrap";

import OrderCard from "../component/OrderCard";
import { getUserOrder } from "../store/userOrder/actions";
import {
  selectUserOrder,
  selectOrderLoading,
} from "../store/userOrder/selectors";

export default function MyOrderPage() {
  const dispatch = useDispatch();
  const order = useSelector(selectUserOrder);
  const loading = useSelector(selectOrderLoading);

  useEffect(() => {
    dispatch(getUserOrder());
  }, [dispatch]);

  return (
    <div>
      {" "}
      <div>
        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center mt-5"
            style={{ height: 700, margin: "auto" }}
          >
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <div>
            <div className="row">
              {order ? (
                order.map((p, index) => {
                  return (
                    <div
                      className=""
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexFlow: "wrap",
                        // border: "1px solid #ddd",
                        margin: "20px",
                        padding: "10px",
                        // boxShadow: "2px 8px 20px #ddd",
                        borderRadius: "10px",
                      }}
                      key={index}
                    >
                      <OrderCard
                        id={p.id}
                        expectedDelivery={p.expectedDelivery}
                        status={p.status}
                        products={p.products}
                      />
                    </div>
                  );
                })
              ) : (
                <p>No order found!</p>
              )}{" "}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
