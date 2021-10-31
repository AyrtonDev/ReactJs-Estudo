import { useStateValue } from "../contexts/StateContext";

export default () => {
  const [state, dispatch] = useStateValue();

  return (
    <button>
      {state.user.name} - {state.theme}
    </button>
  );
};
