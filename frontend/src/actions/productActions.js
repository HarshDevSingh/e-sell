import {
  PRDUCT_LIST_REQUEST,
  PRDUCT_LIST_SUCCESS,
  PRDUCT_LIST_FAIL,
  PRDUCT_DETAIL_REQUEST,
  PRDUCT_DETAIL_SUCCESS,
  PRDUCT_DETAIL_FAIL,
} from "../constants/productConstants";

import axios from "axios";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRDUCT_LIST_REQUEST });
    const { data } = await axios.get("/api/products/");
    dispatch({ type: PRDUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    const msg = `${error.response.status}  ${error.response.statusText}`;
    dispatch({
      type: PRDUCT_LIST_FAIL,
      payload: msg ? msg : "something went wrong",
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRDUCT_DETAIL_REQUEST });
    const { data } = await axios.get(`/api/products/${id}/`);
    dispatch({ type: PRDUCT_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    const msg = `${error.response.status}  ${error.response.statusText}`;
    dispatch({
      type: PRDUCT_DETAIL_FAIL,
      payload: msg ? msg : "something went wrong",
    });
  }
};
