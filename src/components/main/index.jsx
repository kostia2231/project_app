import React from "react";
import styles from "./style.module.css";
import Banner from "../../assets/img/Banner.png";

export default function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.bannerImg}>
        <img src={Banner} className={styles.banner} />
      </div>
      <div className={styles.productsWrapper}>
        <div className={styles.headingWrapper}>
          <h1>Товары</h1>
        </div>
        <div className={styles.productsFeed}></div>
      </div>
    </main>
  );
}
