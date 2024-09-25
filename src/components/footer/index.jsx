import React from "react";
import styles from "./style.module.css";
import { ReactComponent as FacebookLogo } from "../../assets/img/f.svg";
import { ReactComponent as XLogo } from "../../assets/img/x.svg";
import { ReactComponent as InstagramLogo } from "../../assets/img/i.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerConto}>
          <h1>Контакты</h1>
          <p>
            8 800 000 00 00 <br />
            emailexample@email.com
          </p>
        </div>
        <div className={styles.icons}>
          <FacebookLogo />
          <XLogo />
          <InstagramLogo />
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div>
          <p>2024 Сникер-магазин. Все права защищены</p>
        </div>
        <div className={styles.inputWrapper}>
          <input type="text" placeholder="Введите свой email:" />
        </div>
      </div>
    </footer>
  );
}
