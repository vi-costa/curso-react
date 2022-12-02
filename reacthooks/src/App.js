import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { HookUseContext } from "./components/HookUseContext";

function App() {
  return (
    <div className="App">
      <HookUseContext>
        <BrowserRouter>
          <Navbar />
          <h1>React Hooks</h1>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </BrowserRouter>
      </HookUseContext>
    </div>
  );
}

export default App;
