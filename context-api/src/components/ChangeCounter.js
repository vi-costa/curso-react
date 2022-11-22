import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import "./ChangeCounter.css";

const ChangeCounter = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      <button className="sub" onClick={() => setCounter(counter - 1)}>-1</button>
      <button className="sum" onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  );
};

export default ChangeCounter;
