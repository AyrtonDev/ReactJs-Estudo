import { useReducer } from "react";

const initalState = {
  contagem: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, contagem: state.contagem + 1 };
      break;
    case "decrement":
      return { ...state, contagem: state.contagem - 1 };
      break;
    case "double":
      return { ...state, contagem: state.contagem * 2 };
      break;
    case "set":
      return { ...state, contagem: action.novacontagem };
      break;
  }

  return state;
};

export default () => {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <span>{state.contagem}</span>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "double" })}>Dobrar</button>

      <button onClick={() => dispatch({ type: "set", novacontagem: 0 })}>
        Setar para 0
      </button>
      <button onClick={() => dispatch({ type: "set", novacontagem: 50 })}>
        Setar para 50
      </button>
    </div>
  );
};
