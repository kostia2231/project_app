import React, { useState } from "react";
import styles from "./style.module.css";
import { ReactComponent as AddButton } from "../../assets/icons/+.svg";

export default function MainItem({
  id,
  name,
  image,
  price,
  toCart,
  removeFromCart,
  item,
}) {
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    toCart(item);
    setIsInCart(true);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(item.id);
    setIsInCart(false);
  };

  return (
    <div className={styles.mainItem}>
      <img src={image} alt="product_image" />
      <h3>{name}</h3>
      <div className={styles.priceAndButton}>
        <div>
          <p>ЦЕНА:</p>
          <p className={styles.price}>{price} €</p>
        </div>
        {isInCart || (
          <div className={styles.addButton} onClick={handleAddToCart}>
            <AddButton />
          </div>
        )}
        {isInCart && (
          <div className={styles.deleteButton} onClick={handleRemoveFromCart}>
            <AddButton />
          </div>
        )}
      </div>
    </div>
  );
}
