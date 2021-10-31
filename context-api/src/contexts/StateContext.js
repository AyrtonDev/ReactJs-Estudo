import { createContext, useContext, useReducer } from "react";

import ThemeReducer from "../reducers/ThemeReducer";
import UserReducer from "../reducers/UserReducer";

const initalState = {
  theme: ThemeReducer(),
  user: UserReducer(),
};

const MainReducer = (state, action) => ({
  theme: ThemeReducer(state.theme, action),
  user: UserReducer(state.user, action),
});

export const StateContext = createContext();

export const StateProvider = ({ children, value }) => (
  <StateContext.Provider value={useReducer(MainReducer, initalState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
