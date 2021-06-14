import { API_URL } from "../../config";
import axios from "axios";

export function fetchedSpeciicCoupon(coupon) {
  return { type: "coupon/fetchedSpeciicCoupon", payload: coupon };
}

export const specificCoupon = (code) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/coupons/${code}`);
    console.log("respose:", response);
    dispatch(fetchedSpeciicCoupon(response.data));
  } catch (error) {
    console.log(error.message);
  }
};
