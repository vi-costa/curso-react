import "./App.css";
import React from "react";

//pages
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
