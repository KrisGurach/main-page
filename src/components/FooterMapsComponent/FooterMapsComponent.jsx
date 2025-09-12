"use client";
import styles from "./FooterMapsComponent.module.css";
import React, { useState } from "react";

export default function FooterMaps() {
  const [active, setActive] = useState("central");

  const maps = {
    central:
      "https://yandex.ru/map-widget/v1/?um=constructor%3A3ff2a47a3c91ff4f82c53e59516c84220c7362edbc9c72feccf25f2317c847a0&amp;source=constructor",
    shop:
      "https://yandex.ru/map-widget/v1/?um=constructor%3A21afe0abd0c0bd5868e05f8f582fe3b5fa4022e9a49dd3af7e713a82c7a18f2e&amp;source=constructor",
    astana:
      "https://yandex.ru/map-widget/v1/?um=constructor%3A21afe0abd0c0bd5868e05f8f582fe3b5fa4022e9a49dd3af7e713a82c7a18f2e&amp;source=constructor",
  };

  return (
  <div className={styles.footerRight}>
    <div className={styles.mapTabs}>
      <button
        className={`${styles.mapBtn} ${active === "central" ? styles.active : ""}`}
        onClick={() => setActive("central")}
      >
        Центральный офис
      </button>
      <button
        className={`${styles.mapBtn} ${active === "shop" ? styles.active : ""}`}
        onClick={() => setActive("shop")}
      >
        Магазин и сервисный центр
      </button>
      <button
        className={`${styles.mapBtn} ${active === "astana" ? styles.active : ""}`}
        onClick={() => setActive("astana")}
      >
        Филиал в Астане
      </button>
    </div>

    <div className={styles.mapContainer}>
      <iframe
        key={active}
        src={maps[active]}
        width="628px"
        height="370px"
        frameBorder="0"
        title={active}
      ></iframe>
    </div>
  </div>
);

}