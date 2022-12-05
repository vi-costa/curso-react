import { useState } from "react";
import usePrevious from "../hooks/usePrevious";

const HookCustom = () => {
  const [number, setNumber] = useState(0);
  const previousValue = usePrevious(number);

  return (
    <div>
      <h2>Custom Hook</h2>
      <h3>usePrevious</h3>

      <h4>Atual: {number}</h4>
      <h5>Anterior: {previousValue}</h5>
      <button
        onClick={() =>
          setNumber(Math.floor(Math.random(number) * (11 - 1) + 1))
        }
      >
        Alterar!
      </button>
      <hr />
    </div>
  );
};

export default HookCustom;
