export const addOneToCart = (product) => {
  console.log("product to add: ", product);
  return {
    type: "cart/addOneToCart",
    payload: product,
  };
};

export const removeOneFromCart = (product) => {
  return {
    type: "cart/removeOneFromCart",
    payload: product,
  };
};

export const emptyCart = () => {
  return {
    type: "cart/emptyCart",
  };
};

export const removeFromCart = (product) => {
  return {
    type: "cart/removeFromCart",
    payload: product,
  };
};
