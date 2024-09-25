import React from "react";
import styles from "./style.module.css";

export default function MainItem({ id, name, image, price, toCart }) {
  return (
    <div className={styles.mainItem}>
      <img src={image} alt="product_image" />
      <h3>{name}</h3>
      <div>
        <p>ЦЕНА:</p>
        <p>{price} €</p>
      </div>
      <div
        onClick={() => {
          toCart(id);
        }}
      >
        +
      </div>
    </div>
  );
}
