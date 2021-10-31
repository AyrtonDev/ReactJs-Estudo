import Botao from "./Botao";
import Contagem from "../components/Contagem";
import { useStateValue } from "../contexts/StateContext";

export default () => {
  const [state, dispatch] = useStateValue();

  const handleButton = () => {
    dispatch({
      type: "setName",
      name: "Paulo",
    });
  };

  return (
    <article className={`box theme-${state.theme}`}>
      <Botao />
      <button onClick={handleButton}>Trocar para Paulo</button>

      <hr />

      <Contagem />
    </article>
  );
};
