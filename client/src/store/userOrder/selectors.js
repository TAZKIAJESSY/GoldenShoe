export const selectUserOrder = (reduxState) => {
  return reduxState.userOrder.orders;
};

export const selectOrderLoading = (reduxState) => {
  return reduxState.userOrder.loading;
};
