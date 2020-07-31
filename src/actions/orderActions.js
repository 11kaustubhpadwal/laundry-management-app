import {
  GET_ORDERS_ERROR,
  GET_ORDERS_SUCCESS,
  PLACE_ORDER_ERROR,
  PLACE_ORDER_SUCCESS,
  CANCEL_ORDER_ERROR,
  CANCEL_ORDER_SUCCESS,
} from "./types";
import axios from "axios";

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:5000/api/orders",
        headers: { "x-auth-token": localStorage.getItem("token") },
      });

      dispatch({ type: GET_ORDERS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_ORDERS_ERROR, payload: error.response.data });
    }
  };
};
