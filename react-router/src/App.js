import "./App.css";
import React from "react";

// 1 - config react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// components
import Navbar from "./components/Navbar";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import SearchForm from "./components/SearchForm";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* 2 - links com react router */}
        <Navbar />
        {/* 9 - search */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 6 - nested route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 4 - rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
         {/* 10 - redirect */}
         <Route path = "/company" element={<Navigate to = "/about"/>}></Route>
          {/* 7 - no match route */}
          <Route path="*" element={<NotFound />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
