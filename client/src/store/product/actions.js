import axios from "axios";
import { API_URL } from "../../config";

export function startLoading() {
  return { type: "product/startLoading" };
}

export function productsFetched(productList) {
  return { type: "product/productsFetched", payload: productList };
}

export function detailsFetched(specific) {
  return { type: "product/showDetails", payload: specific };
}

export async function fetchProductList(dispatch) {
  dispatch(startLoading());
  try {
    const response = await axios.get(`${API_URL}/products`);
    console.log("All products", response);

    const productList = response.data;
    console.log("Product List", productList);
    dispatch(productsFetched(productList));
  } catch (e) {
    console.log(e.message);
  }
}

// export const fetchProductList = () => async (dispatch) => {
//   dispatch(startLoading());
//   try {
//     const response = await axios.get(`${API_URL}/products`);
//     console.log("All products", response);

//     const productList = response.data;
//     console.log("Product List", productList);
//     dispatch(productsFetched(productList));
//   } catch (e) {
//     console.log(e.message);
//   }
// };

export const showDeatils = (id) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const response = await axios.get(`${API_URL}/products/${id}`);
    console.log("Product details:", response.data);
    dispatch(detailsFetched(response.data));
  } catch (e) {
    console.log(e.message);
  }
};
