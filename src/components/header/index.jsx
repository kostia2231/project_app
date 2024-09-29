import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
import React from "react";

export default function Header() {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.navbarMain}>
          <NavLink to="/">Сникер-магазин</NavLink>
        </div>
        <div className={styles.navbarLinks}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#ffffff80",
            })}
          >
            Главная
          </NavLink>
          <NavLink
            to="/cart"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#ffffff80",
            })}
          >
            Корзина
          </NavLink>
          <NavLink
            to="/contacts"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#ffffff80",
            })}
          >
            Контакты
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
