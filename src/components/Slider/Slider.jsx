"use client";
import { useState } from "react";
import styles from "./Slider.module.css";

const slides = [
  { id: 1, img: "/slider4.webp", alt: "Слайд 1", title:"Металлодетекторы арочные", text:"От ведущих производителей" },
  { id: 2, img: "/slider2.webp", alt: "Слайд 2", title:"Большой выбор радиостанций", text:"От ведущих производителей" },
  { id: 3, img: "/slider3.webp", alt: "Слайд 3", title:"Средства защиты информации", text:"Собственное производство" },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  return (
    <div className={styles.slide}>
      <img src={slides[current].img} alt={slides[current].alt} />

      <div className={styles.slideContent}>
        <p className={styles.title}>{slides[current].title}</p>
        <p className={styles.text}>{slides[current].text}</p>
        <button className={styles.button}>Подробнее</button>
      </div>

      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === current ? styles.activeDot : ""
              }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
