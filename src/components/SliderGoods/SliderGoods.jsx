"use client";
import { useState } from "react";
import styles from "./SliderGoods.module.css";

const productsData = {
  new: [
    {
      id: 1,
      label: "New",
      img: "/products1.webp",
      title: "Рация Hytera",
      desc: "Портативная цифровая рация",
      oldPrice: null,
      price: "45 000 ₸",
    },
    {
      id: 2,
      label: "New",
      img: "/products2.webp",
      title: "Антенна Motorola",
      desc: "Антенна для рации",
      oldPrice: null,
      price: "12 000 ₸",
    },
    {
      id: 3,
      label: "New",
      img: "/products3.webp",
      title: "Рация Kenwood",
      desc: "Автомобильная рация",
      oldPrice: null,
      price: "58 000 ₸",
    },
    {
      id: 4,
      label: "New",
      img: "/products1.webp",
      title: "Гарнитура",
      desc: "Профессиональная гарнитура",
      oldPrice: null,
      price: "9 900 ₸",
    },
  ],
  sale: [
    {
      id: 5,
      label: "Sale",
      img: "/products2.webp",
      title: "Рация Icom",
      desc: "Компактная рация",
      oldPrice: "70 000 ₸",
      price: "55 000 ₸",
    },
    {
      id: 6,
      label: "Sale",
      img: "/products3.webp",
      title: "Батарея для рации",
      desc: "Запасная батарея",
      oldPrice: "15 000 ₸",
      price: "9 900 ₸",
    },
    {
      id: 7,
      label: "Sale",
      img: "/products1.webp",
      title: "Рация Baofeng",
      desc: "Доступная рация",
      oldPrice: "18 000 ₸",
      price: "12 000 ₸",
    },
  ],
};


export default function SliderGoods() {
  const [tab, setTab] = useState("new");
  const [current, setCurrent] = useState(0);

  const products = productsData[tab];
  const visibleSlides = 3;
  const totalSlides = products.length;

  const nextSlide = () => {
    if (current + visibleSlides < totalSlides) {
      setCurrent((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${tab === "new" ? styles.activeTab : ""}`}
          onClick={() => {
            setTab("new");
            setCurrent(0);
          }}
        >
          Новинки
        </button>
        <button
          className={`${styles.tab} ${tab === "sale" ? styles.activeTab : ""}`}
          onClick={() => {
            setTab("sale");
            setCurrent(0);
          }}
        >
          Товар недели
        </button>
      </div>

      {/* Слайдер */}
      <div className={styles.slider}>
        {totalSlides > visibleSlides && (
          <button className={styles.arrow} onClick={prevSlide} disabled={current === 0}>
            ‹
          </button>
        )}

        <div className={styles.slidesWrapper}>
          <div
            className={styles.slides}
            style={{ transform: `translateX(-${current * (100 / visibleSlides)}%)` }}
          >
            {products.map((product) => (
              <div key={product.id} className={styles.slide}>
                <div className={styles.imageWrapper}>
                  <img src={product.img} alt={product.title} />
                  <span
                    className={`${styles.label} ${
                      product.label === "New" ? styles.new : styles.sale
                    }`}
                  >
                    {product.label}
                  </span>
                </div>

                <h3 className={styles.title}>{product.title}</h3>
                <p className={styles.desc}>{product.desc}</p>

                <div className={styles.prices}>
                  {product.oldPrice && (
                    <span className={styles.oldPrice}>{product.oldPrice}</span>
                  )}
                  <span className={styles.price}>{product.price}</span>
                </div>

                <button className={styles.button}>Оформить запрос</button>
              </div>
            ))}
          </div>
        </div>

        {totalSlides > visibleSlides && (
          <button
            className={styles.arrow}
            onClick={nextSlide}
            disabled={current + visibleSlides >= totalSlides}
          >
            ›
          </button>
        )}
      </div>
    </div>
  );
}