import {
  GET_ORDERS_ERROR,
  GET_ORDERS_SUCCESS,
  PLACE_ORDER_ERROR,
  PLACE_ORDER_SUCCESS,
  CANCEL_ORDER_ERROR,
  CANCEL_ORDER_SUCCESS,
} from "../actions/types";

const initialState = {
  orders: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
