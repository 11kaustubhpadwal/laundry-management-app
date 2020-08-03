import {
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_ERROR,
  CLEAR_FEEDBACK,
  VERIFY_LINK_ERROR,
  VERIFY_LINK_SUCCESS,
} from "../actions/types";

const initialState = {
  emailSent: null,
  emailSendError: null,
  verifyLinkError: null,
  verifyLinkSuccess: null,
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
    case VERIFY_LINK_SUCCESS: {
      return {
        ...state,
        verifyLinkSuccess: action.payload,
      };
    }
    case VERIFY_LINK_ERROR: {
      return {
        ...state,
        verifyLinkError: action.payload,
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
