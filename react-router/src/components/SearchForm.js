import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchForm.css";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("search?q=" + query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input  type="text" placeholder="Pesquise um produto!"  onChange={(e) => setQuery(e.target.value)} autoFocus />
      <button type="submit"> Buscar</button>
    </form>
  );
};

export default SearchForm;
