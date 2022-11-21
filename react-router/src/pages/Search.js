import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import "./Search.css";
const Search = () => {
  const [searchParams] = useSearchParams();
  const url = "http://localhost:3000/products?" + searchParams;
  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <h1>Resultados disponíveis</h1>
      <div className="results">
        <ul>
          {items &&
            items.map((item) => (
              <li>
                <div key={item.id}>
                  <h2>{item.name}</h2>
                  <p>R$: {item.price}</p>
                  <Link to={`/products/${item.id}`}>Detalhes</Link>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
