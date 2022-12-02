import React, { useState } from "react";
const HookUseState = () => {
  // 1 - useState
  let userName = "João";

  const [name, setName] = useState("Matheus");

  const changeNames = () => {
    userName = "João Souza";
    setName("Matheus Battisti");
  };

  // 2 - useState e input
  const [age, setAge] = useState(18);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // envio a uma API
    console.log(age);
  };

  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes!</button>
      {/* 2 - useState e input */}
      <form onSubmit={handleSubmit}>
        <p>Digite a sua idade: </p>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Sua idade é de {age} anos!</p>
      <hr />
    </div>
  );
};

export default HookUseState;
