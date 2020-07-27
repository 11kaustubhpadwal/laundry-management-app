import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  CLEAR_ERROR,
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        error: null,
      };
    default:
      return state;
  }
};
