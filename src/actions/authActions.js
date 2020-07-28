import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  SET_LOADING,
  CLEAR_ERROR,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
} from "./types";

export const getUser = () => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:5000/api/auth",
        headers: { "x-auth-token": localStorage.getItem("token") },
      });

      dispatch({ type: GET_USER_SUCCESS, payload: response.data });
    } catch (error) {
      localStorage.removeItem("token");
      dispatch({ type: GET_USER_ERROR, payload: error.response.data });

      setTimeout(() => {
        dispatch({ type: CLEAR_ERROR });
      }, 8000);
    }
  };
};

export const registerUser = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/api/users",
        headers: {
          "Content-Type": "application/json",
        },
        data: formData,
      });

      localStorage.setItem("token", response.data.token);
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    } catch (error) {
      localStorage.removeItem("token");
      dispatch({ type: REGISTER_ERROR, payload: error.response.data });

      setTimeout(() => {
        dispatch({ type: CLEAR_ERROR });
      }, 8000);
    }
  };
};

export const setLoading = () => {
  return { type: SET_LOADING };
};
