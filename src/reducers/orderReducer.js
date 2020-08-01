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
  orderPlaced: null,
  orderCancelled: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_SUCCESS: {
      return {
        ...state,
        orders: action.payload,
      };
    }
    case GET_ORDERS_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case PLACE_ORDER_SUCCESS: {
      return {
        ...state,
        orderPlaced: action.payload,
      };
    }
    case PLACE_ORDER_ERROR: {
      return {
        ...state,
        orderCancelled: action.payload,
      };
    }
    case CANCEL_ORDER_SUCCESS: {
      return {
        ...state,
        orderCancelled: action.payload,
      };
    }
    case CANCEL_ORDER_ERROR: {
      return {
        ...state,
        orderCancelled: action.payload,
      };
    }
    default:
      return state;
  }
};
