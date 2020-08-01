import {
  GET_ORDERS_ERROR,
  GET_ORDERS_SUCCESS,
  PLACE_ORDER_ERROR,
  PLACE_ORDER_SUCCESS,
  CANCEL_ORDER_ERROR,
  CANCEL_ORDER_SUCCESS,
} from "./types";
import axios from "axios";

// Get a list of all orders
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

// Place a new order
export const placeOrder = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/api/orders",
        headers: { "x-auth-token": localStorage.getItem("token") },
        data: formData,
      });

      dispatch({ type: PLACE_ORDER_SUCCESS, payload: "Success." });

      dispatch(getOrders());
    } catch (error) {
      dispatch({ type: PLACE_ORDER_ERROR, payload: error.response.data });
    }
  };
};

// Cancel an order
export const cancelOrder = (orderID) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "patch",
        url: `http://localhost:5000/api/orders/${orderID}`,
        headers: { "x-auth-token": localStorage.getItem("token") },
      });

      dispatch({ type: CANCEL_ORDER_SUCCESS, payload: "Cancelled." });

      dispatch(getOrders());
    } catch (error) {
      dispatch({ type: CANCEL_ORDER_ERROR, payload: error.response.data });
    }
  };
};
