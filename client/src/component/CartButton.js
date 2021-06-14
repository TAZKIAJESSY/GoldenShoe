import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import {
  selectCartItems,
  selectSpecificProductQuantity,
} from "../store/cart/selectors";
import { selectOneProduct } from "../store/product/selectors";
//import { fetchProductList } from "../store/product/actions";
import { addOneToCart, removeOneFromCart } from "../store/cart/actions";

export default function CartButton(props) {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchProductList());
  // }, [dispatch]);

  const specificProduct = useSelector(selectOneProduct(props.id));

  const specificProductQuantity = useSelector(
    selectSpecificProductQuantity(props.id)
  );

  const cart = useSelector(selectCartItems());
  const isInCart = cart?.find((item) => {
    return item.product.id === props.id;
  });

  //console.log("is in cart:", isInCart);

  return (
    <div>
      {isInCart ? (
        <ButtonGroup>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              console.log("click");
              dispatch(removeOneFromCart(specificProduct));
            }}
          >
            -
          </Button>{" "}
          <Button variant="secondary" disabled>
            {specificProductQuantity} In Cart
          </Button>
          <Button
            variant="warning"
            size="sm"
            onClick={() => dispatch(addOneToCart(specificProduct))}
          >
            +
          </Button>
        </ButtonGroup>
      ) : (
        <ButtonGroup>
          <Button variant="warning" disabled>
            Add To Cart
          </Button>
          <Button
            variant="warning"
            size="sm"
            onClick={() => {
              console.log("clickToAdd");
              dispatch(addOneToCart(specificProduct));
            }}
          >
            +
          </Button>
        </ButtonGroup>
      )}
    </div>
  );
}
