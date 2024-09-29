import React from "react";
import styles from "./style.module.css";
import { ReactComponent as X } from "../../assets/img/x_logo_big.svg";
import { useForm } from "react-hook-form";

export default function Contacts() {
  return (
    <div className={styles.main}>
      <div className={styles.contactsH}>
        <h1>Контакты</h1>
      </div>
      <div>
        <div className={styles.formEx}>
          <p>8 800 000 00 00</p>
          <p>emailexample@email.com</p>
        </div>
      </div>
      <div className={styles.contactWrapper}>
        <div className={styles.formAndButtonW}>
          <form className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="Ваш email"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Ваше имя"
            />
            <textarea
              className={styles.textarea}
              type="text"
              placeholder="Введите сообщение"
            />
          </form>
          <button className={styles.sendButton}>Отправить</button>
        </div>
        <div className={styles.findUs}>
          <h3>Найдите нас</h3>
          <div>
            <X />
          </div>
        </div>
      </div>
    </div>
  );
}
