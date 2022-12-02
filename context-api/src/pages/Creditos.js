import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";
const Creditos = () => {
  const { counter } = useContext(CounterContext);
  const {color} = useTitleColorContext();

  return (
    <div>
      <h1 style={{color:color}}>Creditos</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default Creditos;
