import axios from "axios";
import { API_URL } from "../../config";
import { emptyCart } from "../cart/actions";
import { selectToken } from "../user/selectors";

export function startLoading() {
  return { type: "userOrder/startLoading" };
}

export function fetchedOrder(list) {
  return { type: "userOrder/fetchedOrder", payload: list };
}

// export function fetchedReturnProduct(returnproduct) {
//   return { type: "userOrder/fetchedReturnProduct", payload: returnproduct };
// }

//create new order
export const createOrder = (items) => async (dispatch, getState) => {
  dispatch(startLoading());

  try {
    const token = selectToken(getState());

    const response = await axios.post(
      `${API_URL}/orders`,
      { items: items },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log("Order created: ", response);

    dispatch(emptyCart());
  } catch (e) {
    console.log(e.message);
  }
};

//get user order
export const getUserOrder = () => async (dispatch, getState) => {
  dispatch(startLoading());

  try {
    const token = selectToken(getState());

    const response = await axios.get(
      `${API_URL}/orders`,

      { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log("Specific user order: ", response);
    dispatch(fetchedOrder(response.data));
  } catch (error) {
    console.log(error.message);
  }
};

//return user order
export const returnProduct =
  (orderId, returnProducts) => async (dispatch, getState) => {
    try {
      const token = selectToken(getState());

      const response = await axios.post(
        `${API_URL}/orders/returnproduct`,
        { orderId: orderId, returnProducts: returnProducts },

        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("return product: ", response);

      //dispatch(fetchedReturnProduct(response.data));

      const response1 = await axios.get(
        `${API_URL}/orders`,

        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("Specific user order: ", response1);
      dispatch(fetchedOrder(response1.data));
    } catch (error) {
      console.log(error.message);
    }
  };
