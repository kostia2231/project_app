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

  // Получение всех продуктов
  async function getAllItems() {
    try {
      const res = await axios.get(ALL_ITEM_URL);
      setMainData(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  // Добавление товара в корзину ????
  async function addToCart(item) {
    try {
      const res = await axios.post(CART_ITEM_URL, {
        image: item.image,
        name: item.name,
        price: item.price,
        id: item.id,
      });
      console.log(mainData);
      console.log(item);
      setCart((prev) => [...prev, res.data]);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(cart);

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
            <MainItem key={item.id} {...item} toCart={addToCart} />
          ))}
        </div>
      </div>
    </main>
  );
}
