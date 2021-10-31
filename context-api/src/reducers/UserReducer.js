const initalState = {
  name: "VIsitante",
  email: "visitante@gmail.com",
};

export default (state = initalState, action = {}) => {
  switch (action.type) {
    case "setName":
      return { ...state, user: action.name };
      break;
    case "setEmail":
      return { ...state, user: action.email };
      break;
  }

  return state;
};
