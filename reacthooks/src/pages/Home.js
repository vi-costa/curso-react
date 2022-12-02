import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer";
import HookUseState from "../components/HookUseState";
import HookUseRef from "../components/HookUseRef";

// useContext
import React, { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";
import HookUseCallback from "../components/HookUseCallback";

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      {/* 1 - useState */}
      <HookUseState />

      {/* 2 - useReducer */}
      <HookUseReducer />

      {/* 3 - useEffect */}
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do context: {contextValue}</p>
      <hr />
      <HookUseRef />
      <HookUseCallback/>
    </div>
  );
};

export default Home;
