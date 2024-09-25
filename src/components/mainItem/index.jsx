import React from "react";
import styles from "./style.module.css";
import { ReactComponent as AddButton } from "../../assets/icons/+.svg";

export default function MainItem({ id, name, image, price, toCart }) {
  return (
    <div className={styles.mainItem}>
      <img src={image} alt="product_image" />
      <h3>{name}</h3>
      <div className={styles.priceAndButton}>
        <div>
          <p>ЦЕНА:</p>
          <p className={styles.price}>{price} €</p>
        </div>
        <div className={styles.addButton}>
          <AddButton />
        </div>
      </div>
    </div>
  );
}
