import React from "react";
import styles from "./style.module.css";
import removeIcon from "../../assets/icons/delete.svg";

export default function CartItem({ id, name, price, image, onRemove }) {
  return (
    <div className={styles.item}>
      <img src={image} alt="product_image" />
      <h3>{name}</h3>
      <p>Цена</p>
      <p>{price}</p>
      <img
        onClick={() => {
          onRemove(id);
        }}
        src={removeIcon}
        alt="remove_icon"
      />
    </div>
  );
}
