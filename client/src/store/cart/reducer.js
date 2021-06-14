const initialState = {
  items: [], //[{  product: {id: X}, quantity: XX  }]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "cart/addOneToCart": {
      const product = action.payload;

      const result = state.items?.find(
        (item) => item.product.id === product.id
      );
      //if the product is not addeded in cart yet
      if (!result) {
        return {
          ...state,
          items: [...state.items, { product: product, quantity: 1 }],
        };
      }
      //if the product is already added in cart
      const addedItem = state.items.map((item) => {
        if (item.product.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item; //if the product in cart does not have the id of product looked for, return the same
        }
      });

      return {
        ...state,
        items: addedItem,
      };
    }
    case "cart/removeOneFromCart": {
      const product = action.payload;
      const result = state.items.find((item) => item.product.id === product.id);
      //if the product to remove is in cart and its quantiy is 1
      if (result.quantity === 1) {
        return {
          ...state,
          items: state.items.filter((item) => item.product.id !== product.id),
        };
      }
      //if the product-to-remove 's quantiy is more than 1
      const removedItem = state.items.map((item) => {
        if (item.product.id === product.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else {
          return item; //if the product in cart does not have the id of product looked for, return the same
        }
      });
      return {
        ...state,
        items: removedItem,
      };
    }
    case "cart/emptyCart": {
      return initialState;
    }
    case "cart/removeFromCart": {
      return {
        ...state,
        items: state.items.filter(
          (item) => item.product.id !== action.payload.id
        ),
      };
    }

    default: {
      return state;
    }
  }
}
