import Botao from "./Botao";
import { useStateValue } from "../contexts/StateContext";

export default () => {
  const [state, dispatch] = useStateValue();

  return (
    <aside className={`box theme-${state.theme}`}>
      <Botao />
    </aside>
  );
};
