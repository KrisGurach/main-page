"use client";
import styles from "./Projects.module.css";

const projects = [
  {
    id: 1,
    title: "Международный аэропорт г.Астаны, им. Н. Назарбаева",
    date: "05.09.2025",
    description: "В 2016 - 2017 году реализован проект по техническому переоснащению средств и систем радиосвязи «Международного аэропорта города Астаны им. Нурсултана Назарбаева",
    image: "/project1.png",
  },
  {
    id: 2,
    title: "Казахстанско-Китайский трубопровод",
    date: "20.09.2025",
    description: "В 2016 - 2017 году реализован проект по техническому переоснащению средств и систем радиосвязи «Международного аэропорта города Астаны им. Нурсултана Назарбаева",
    image: "/project2.png",
  },
  {
    id: 3,
    title: "АО «КазТрансОйл»",
    date: "01.10.2025",
    description: "В 2016 - 2017 году реализован проект по техническому переоснащению средств и систем радиосвязи «Международного аэропорта города Астаны им. Нурсултана Назарбаева",
    image: "/project3.png",
  },
];

export default function Projects() {

    return (
      <section className={styles.projects}>
        <div className={styles.container}>
          <h2 className={styles.title}>Наши проекты</h2>
          <button className={styles.button}>Все проекты</button>
        </div>
        <div className={styles.cardsWrapper}>
            
      {projects.map((item) => (
        <div key={item.id} className={styles.card}>
          <div className={styles.imageWrapper}>
            <img src={item.image} alt={item.title} />
            <div className={styles.overlay}>
              <p className={styles.description}>{item.description}</p>
              <button className={styles.buttonCard}>Подробнее</button>
            </div>
          </div>
          <div className={styles.content}>
            <h3 className={styles.titleCard}>{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
    </section>
    )
};