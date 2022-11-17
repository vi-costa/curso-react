import React, { useState } from "react";
import "./App.css";
import LoadingSpin from "react-loading-spin";
import { FaTrashAlt } from "react-icons/fa";

// 4 - custom hook
import { useFetch } from "./hooks/useFetch";
const url = "http://localhost:3000/products";

function App() {
  // 4 - custom
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 2 - add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      price,
    };

    //5 - refatorando post
    httpConfig(product, "POST");
    setName("");
    setPrice("");
  };

  // 8 - desafio 6
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };
  
  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6 - loading */}
      {loading && (
        <div className="loader">
          <LoadingSpin size={20} />
        </div>
      )}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id} className="item">
                {product.name} - R$ {product.price}
                <button
                  className="delete-button"
                  onClick={() => handleRemove(product.id)}
                >
                  <FaTrashAlt />
                </button>
              </li>
            ))}
        </ul>
      )}

      <div className="add-product">
        <h2>Cadastre um novo produto!</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* 7 - state de loading no post */}
          {!loading && <button type="submit"> Cadastrar </button>}
          {loading && (
            <button type="submit" disabled className="cursor-not-allowed">
              Aguarde
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
