const initialState = {
  loading: false,
  products: [],
  details: null,
};

export default function productSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "product/startLoading": {
      return { ...state, loading: true };
    }
    case "product/productsFetched": {
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    }
    case "product/showDetails": {
      return {
        ...state,
        loading: false,
        details: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
