export const selectSpecificProductQuantity = (id) => (reduxState) => {
  const clonedCart = reduxState.cart.items;
  const specificProductQuantity = clonedCart?.map((item) => {
    if (item.quantity) {
      if (item.product.id === id) {
        return item.quantity;
      } else {
        return null;
      }
    } else {
      return null;
    }
  });
  return specificProductQuantity;
};

//need all cart items
export const selectCartItems = () => (reduxState) => reduxState.cart.items;

//need total Cart Price
export const selectTotalCartPrice = () => (reduxState) => {
  const totalPrice = [...reduxState.cart.items];
  return totalPrice.reduce((a, c) => a + c.product.price * c.quantity, 0);
};
