import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
} from "./../Types";

function reducer(state, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("username", action.payload.username);
      return {
        loading: false,
        loggedIn: true,
        username: action.payload.username,
      };
    case USER_LOGIN_FAILURE:
      return {
        loading: false,
        message: action.message,
      };
    case USER_LOGOUT:
      localStorage.clear();
      return {
        loggedIn: false,
      };
    default:
      return {
        ...state,
      };
  }
}

export default reducer;
