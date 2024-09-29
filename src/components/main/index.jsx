import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./style.module.css";
import Banner from "../../assets/img/Banner.png";
import MainItem from "../mainItem";
const ALL_ITEM_URL = "https://66f3c84a77b5e8897096cd57.mockapi.io/productData";
const CART_ITEM_URL = "https://66f3c84a77b5e8897096cd57.mockapi.io/cartItem";

export default function Main() {
  const [mainData, setMainData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getAllItems();
  }, []);

  async function getAllItems() {
    try {
      const res = await axios.get(ALL_ITEM_URL);
      setMainData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function addToCart(item) {
    const cartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    };

    try {
      const res = await axios.post(CART_ITEM_URL, cartItem, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setCart((prev) => [...prev, res.data]);
      console.log("Item added to cart:", res.data);
      console.log(cartItem);
      console.log("Cart: ", cart);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }

  async function removeFromCart(id) {
    try {
      console.log(`${CART_ITEM_URL}/${id}`);
      await axios.delete(`${CART_ITEM_URL}/${id}`);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.bannerImg}>
        <img src={Banner} className={styles.banner} alt="Banner" />
      </div>
      <div className={styles.productsWrapper}>
        <div className={styles.headingWrapper}>
          <h1>Товары</h1>
        </div>
        <div className={styles.productsFeed}>
          {mainData.map((item) => (
            <MainItem
              key={item.id}
              {...item}
              item={item}
              removeFromCart={removeFromCart}
              toCart={addToCart}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
