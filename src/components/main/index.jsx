import React from "react";
import styles from "./style.module.css";
import Banner from "../../assets/img/Banner.png";

export default function Main() {
  return (
    <main>
      <div className={styles.bannerImg}>
        <img src={Banner} className={styles.banner} />
      </div>
    </main>
  );
}
