const initialState = {
  coupon: null,
};

export default function couponSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "coupon/fetchedSpeciicCoupon": {
      return {
        ...state,
        coupon: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
