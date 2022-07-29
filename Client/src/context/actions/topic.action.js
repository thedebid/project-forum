import axiosInstance from "../../utils/axiosInstance";
import toast from "../../utils/toast";
import { TOPIC_FETCH, TOPIC_FETCH_SUCCESS, USER_LOGOUT } from "../Types";

export const fetchTopics = () => (dispatch) => {
  dispatch({ type: TOPIC_FETCH });
  axiosInstance
    .GET("/topics")
    .then((res) => {
      dispatch({
        type: TOPIC_FETCH_SUCCESS,
        payload: {
          res,
        },
      });
    })
    .catch((error) => {});
};
