import { NavLink } from "react-router-dom";
import styles from "./style.module.css";

export default function Header() {
  return (
    <div>
      This is Header component
      <nav className={styles.navbar}>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/cart">Корзина</NavLink>
        <NavLink to="/contacts">Контакты</NavLink>
      </nav>
    </div>
  );
}
