import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./style.module.css";
import Banner from "../../assets/img/Banner.png";
import MainItem from "../mainItem";

export default function Main() {
  const ALL_ITEM_URL =
    "https://66f3c84a77b5e8897096cd57.mockapi.io/productData";

  const [mainData, setMainData] = useState([]);

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
  return (
    <main className={styles.main}>
      <div className={styles.bannerImg}>
        <img src={Banner} className={styles.banner} />
      </div>
      <div className={styles.productsWrapper}>
        <div className={styles.headingWrapper}>
          <h1>Товары</h1>
        </div>
        <div className={styles.productsFeed}>
          {mainData.map((item) => {
            return <MainItem key={item.id} {...item} />;
          })}
        </div>
      </div>
    </main>
  );
}
