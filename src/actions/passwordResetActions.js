import { SEND_EMAIL_ERROR, SEND_EMAIL_SUCCESS, CLEAR_FEEDBACK } from "./types";
import axios from "axios";

export const sendEmail = (email) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/api/users/forgot-password",
        headers: {
          "Content-Type": "application/json",
        },
        data: { email: email },
      });

      dispatch({ type: SEND_EMAIL_SUCCESS, payload: response.data.msg });

      setTimeout(() => {
        dispatch({ type: CLEAR_FEEDBACK });
      }, 8000);
    } catch (error) {
      if (error.response.data.errors !== undefined) {
        dispatch({
          type: SEND_EMAIL_ERROR,
          payload: error.response.data.errors[0].msg,
        });
      } else {
        dispatch({
          type: SEND_EMAIL_ERROR,
          payload: error.response.data.msg,
        });
      }

      setTimeout(() => {
        dispatch({ type: CLEAR_FEEDBACK });
      }, 8000);
    }
  };
};
