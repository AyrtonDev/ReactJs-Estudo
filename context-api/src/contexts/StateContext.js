import { createContext, useContext, useReducer } from "react";

const initalState = {
  theme: "light",
  user: {
    name: "Pedro",
    email: "pedro@hotmail.com",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setTheme":
      return { ...state, theme: action.theme };
      break;
    case "setName":
      let newUserName = { ...state.user };
      newUserName.name = action.name;
      return { ...state, user: newUserName };
      break;
    case "setName":
      let newUserEmail = { ...state.user };
      newUserEmail.email = action.email;
      return { ...state, user: newUserEmail };
      break;
  }

  return state;
};

export const StateContext = createContext();

export const StateProvider = ({ children, value }) => (
  <StateContext.Provider value={useReducer(reducer, initalState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
