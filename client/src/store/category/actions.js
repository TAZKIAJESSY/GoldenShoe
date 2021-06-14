import axios from "axios";
import { API_URL } from "../../config";

export function categoryFetched(categoryList) {
  return { type: "category/categoryFetched", payload: categoryList };
}

export async function fetchCategoryList(dispatch) {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    console.log("All categories", response);

    const categoryList = response.data;
    // console.log("Category list", categoryList);
    dispatch(categoryFetched(categoryList));
  } catch (e) {
    console.log(e.message);
  }
}
