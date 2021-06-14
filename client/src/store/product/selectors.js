export const selectProductLoading = (reduxState) => {
  return reduxState.product.loading;
};

export const selectProduct = (reduxState) => {
  return reduxState.product.products;
};

export const selectDetails = (reduxState) => {
  return reduxState.product.details;
};

export const selectOneProduct = (id) => (reduxState) => {
  const clonedProducts = [...reduxState.product?.products];

  const specificProduct = clonedProducts.find((product) => {
    return id === product.id;
  });

  return specificProduct; //need total Cart Price
};
