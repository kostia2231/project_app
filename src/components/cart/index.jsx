import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import CartItem from "../catItem";
import axios from "axios";

export default function Cart() {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    getCartItems();
  }, []);

  async function getCartItems() {
    try {
      const res = await axios.get(
        "https://66ced65d901aab24841fc4b1.mockapi.io/cartItem"
      );
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
        <div>
          <div>
            {cartList.map((item) => {
              return (
                <CartItem key={item.id} {...item} onRemove={removeFromCart} />
              );
            })}
          </div>
          <div>
            <h3>Итого: </h3>
            <div>
              {cartList.map((item) => {
                return <p key={item.id}>{item.name}</p>;
              })}
            </div>
            <h3>Общая цена: </h3>
            <p>{getTotalPrice()}</p>
          </div>
        </div>
      )}
    </div>
  );
}
