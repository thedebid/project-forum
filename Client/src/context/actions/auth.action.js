import axiosInstance from "../../utils/axiosInstance";
import toast from "../../utils/toast";

import {
  USER_LOGIN,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../Types";

export const userLogin = (data) => (dispatch) => {
  dispatch({ type: USER_LOGIN });
  axiosInstance
    .POST("/auth/login", data)
    .then((out) => {
      console.log(out);
      dispatch({ type: USER_LOGIN_SUCCESS, payload: out.data });
      toast.success("Login Successful");
    })

    .catch((error) => {
      dispatch({
        type: USER_LOGIN_FAILURE,
        message: error.response.data.error,
      });
      toast.error(error.response.data.error);
    });
};

export const userLogout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
  toast.info("Logout Successful");
};
