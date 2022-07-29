import React, { createContext, useReducer } from "react";

import AuthReducer from "./reducers/auth.reducer";
import TopicReducer from "./reducers/topic.reducer";
const loginInitState = {
  message: null,
  loggedIn: !!localStorage.getItem("token"),
  loading: false,
  username: localStorage.getItem("username"),
};

const topicInitialState = {
  topics: [],
  loading: false,
};

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [loginState, loginDispatch] = useReducer(AuthReducer, loginInitState);
  const [topics, topicDispatch] = useReducer(TopicReducer, topicInitialState);

  return (
    <GlobalContext.Provider
      value={{
        loginState,
        loginDispatch,
        topics,
        topicDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
