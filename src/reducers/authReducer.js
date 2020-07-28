import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  CLEAR_ERROR,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
} from "../actions/types";

const initialState = {
  user: null,
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
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case REGISTER_ERROR:
    case GET_USER_ERROR:
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
