"use client";
import { useState } from "react";
import styles from "./News.module.css";

const newsData = {
  news: [
    {
      id: 1,
      img: "./news1.webp",
      date: "05.09.2025",
      title: "Запуск новой линейки раций",
    },
    {
      id: 2,
      img: "./news2.webp",
      date: "01.09.2025",
      title: "Обновление ПО для оборудования",
    },
    {
      id: 3,
      img: "./news3.webp",
      date: "28.08.2025",
      title: "Открытие нового филиала",
    },
  ],
  events: [
    {
      id: 5,
      img: "./event1.jpg",
      date: "15.09.2025",
      title: "Выставка связи 2025",
    },
    {
      id: 6,
      img: "./event2.jpg",
      date: "10.09.2025",
      title: "Семинар по радиосвязи",
    },
    {
      id: 7,
      img: "./event3.jpg",
      date: "05.08.2025",
      title: "Обучение для партнеров",
    },
  ],
};

export default function News() {
  const [tab, setTab] = useState("news");

  const items = newsData[tab].slice(0, 3); // берём только последние 3

  return (
    <div className={styles.wrapper}>
      {/* Табы */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${tab === "news" ? styles.activeTab : ""}`}
          onClick={() => setTab("news")}
        >
          Новости
        </button>
        <button
          className={`${styles.tab} ${tab === "events" ? styles.activeTab : ""}`}
          onClick={() => setTab("events")}
        >
          Мероприятия
        </button>
      </div>

      {/* Карточки */}
      <div className={styles.cards}>
        {items.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={item.img} alt={item.title} />
            </div>
            <p className={styles.date}>{item.date}</p>
            <h3 className={styles.title}>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
