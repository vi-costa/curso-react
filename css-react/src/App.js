import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./Components/MyComponent";
import { useState } from "react";
import Title from "./Components/Title";

function App() {
  const n = 10;
  const [redTitle,setRedTitle] = useState(false);

  const mudarTitulo =()=> { 
    redTitle ? setRedTitle(false): setRedTitle(true) 
  
  }
  return (
    <div className="App">
      {/** CSS global */}
      <h1>React com CSS</h1>
      {/** CSS de Componente */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/** inline CSS */}
      <p
        style={{
          backgroundColor: "green",
          color: "white",
          border: "2px solid black",
        }}
      >
        Inline CSS
      </p>
      {/** dinamic inline CSS */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "red" }}>
        CSS dinâmico{" "}
      </h2>

      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter classe dinâmica</h2>
        <button onClick={mudarTitulo}>Mudar classe do título</button>
        <Title/>
    </div>
  );
}

export default App;
