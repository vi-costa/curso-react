import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";

const Navbar = () => {
  const user = useAuthValue();
  const {logout} = useAuthentication();

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Início
          </NavLink>
        </li>
        {user && (
          <>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Mural
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Novo Post
              </NavLink>
            </li>
          </>
        )}
        {!user && (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Entrar
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Cadastrar
              </NavLink>
            </li>
          </>
        )}

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>
        {user && (
          <li onClick={logout}>
            <NavLink>
           Sair
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
