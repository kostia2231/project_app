import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import CartItem from "../catItem";
import axios from "axios";

export default function Cart() {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    getCartItems();
  }, []);

  //Получение данных
  const CART_ITEM_URL = "https://66f3c84a77b5e8897096cd57.mockapi.io/cartItem";
  async function getCartItems() {
    try {
      const res = await axios.get(CART_ITEM_URL);
      setCartList(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  //Подсчет общей суммы
  const getTotalPrice = () => {
    return cartList.reduce((acc, item) => {
      const price =
        typeof item.price === "string" ? parseFloat(item.price) : item.price;
      return acc + price;
    }, 0);
  };

  //Удаление из корзины
  function removeFromCart(id) {
    setCartList((prevCartList) =>
      prevCartList.filter((item) => item.id !== id)
    );
  }

  return (
    <div className={styles.cart}>
      <h1>Корзина</h1>
      {cartList.length === 0 ? (
        <h3>Ваша корзина пуста...</h3>
      ) : (
        <div className={styles.cartBody}>
          <div className={styles.itemWrapper}>
            {cartList.map((item) => {
              return (
                <CartItem key={item.id} {...item} onRemove={removeFromCart} />
              );
            })}
          </div>
          <div className={styles.cartTotalWrapper}>
            <h2>Итого</h2>
            <div className={styles.cartItems}>
              {cartList.map((item) => {
                return <p key={item.id}>{item.name}</p>;
              })}
            </div>
            <div className={styles.totalPriceWrapper}>
              <h3>ЦЕНА: </h3>
              <p className={styles.totalPrice}>{getTotalPrice()} €</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
