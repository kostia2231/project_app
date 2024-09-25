import React from "react";
import styles from "./style.module.css";
import removeIcon from "../../assets/icons/delete.svg";

export default function CartItem({ id, name, price, image, onRemove }) {
  return (
    <div className={styles.item}>
      <div className={styles.productImgWrapper}>
        <img src={image} alt="product_image" />
      </div>
      <h3>{name}</h3>
      <div className={styles.priceWrapper}>
        <p>ЦЕНА:</p>
        <span className={styles.price}>{price} €</span>
      </div>
      <div className={styles.circleDeleteWrapper}>
        <img
          onClick={() => {
            onRemove(id);
          }}
          src={removeIcon}
          alt="remove_icon"
        />
      </div>
    </div>
  );
}
