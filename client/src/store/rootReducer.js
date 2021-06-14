import { combineReducers } from "redux";

import user from "./user/reducer";
import category from "./category/reducer";
import product from "./product/reducer";
import cart from "./cart/reducer";
import userOrder from "./userOrder/reducer";
import coupon from "./coupon/reducer";

const reducer = combineReducers({
  user,
  category,
  product,
  cart,
  userOrder,
  coupon,
});

export default reducer;
