import {
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_ERROR,
  CLEAR_FEEDBACK,
} from "../actions/types";

const initialState = {
  emailSent: null,
  emailSendError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_EMAIL_SUCCESS: {
      return {
        ...state,
        emailSent: action.payload,
      };
    }
    case SEND_EMAIL_ERROR: {
      return {
        ...state,
        emailSendError: action.payload,
      };
    }
    case CLEAR_FEEDBACK: {
      return {
        ...state,
        emailSendError: null,
        emailSent: null,
      };
    }
    default:
      return state;
  }
};
