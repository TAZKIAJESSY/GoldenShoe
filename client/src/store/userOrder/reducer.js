const initialState = {
  loading: false,
  orders: [],
};

export default function productSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "userOrder/startLoading": {
      return { ...state, loading: true };
    }
    case "userOrder/fetchedOrder": {
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    }
    case "userOrder/fetchedReturnProduct": {
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
