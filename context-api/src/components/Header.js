import { useStateValue } from "../contexts/StateContext";

export default () => {
  const [state, dispatch] = useStateValue();

  return (
    <header className={`box theme-${state.theme}`}>
      {state.theme === "light" ? (
        <button onClick={() => dispatch({ type: "setTheme", theme: "dark" })}>
          Dark
        </button>
      ) : (
        <button onClick={() => dispatch({ type: "setTheme", theme: "light" })}>
          Light
        </button>
      )}
    </header>
  );
};
