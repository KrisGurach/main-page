"use client";
import Link from "next/link";
import styles from "./Projects.module.css";

const projects = [
  {
    id: 1,
    title: "Международный аэропорт г. Астаны им. Н. Назарбаева",
    date: "2025-09-05",
    description:
      "В 2016–2017 гг. реализован проект по техническому переоснащению средств и систем радиосвязи Международного аэропорта города Астаны им. Нурсултана Назарбаева.",
    image: "/project1.png",
    link: "/projects/airport-astana",
  },
  {
    id: 2,
    title: "Казахстанско-Китайский трубопровод",
    date: "2025-09-20",
    description:
      "Модернизация систем радиосвязи и обеспечение надежности коммуникаций для международного транспортного объекта.",
    image: "/project2.png",
    link: "/projects/kaz-china-pipeline",
  },
  {
    id: 3,
    title: "АО «КазТрансОйл»",
    date: "2025-10-01",
    description:
      "Реализация проекта по обновлению технических систем для повышения эффективности и безопасности производства.",
    image: "/project3.png",
    link: "/projects/kaztransoil",
  },
];


export default function Projects() {
  return (
    <section className={styles.projects} aria-labelledby="projects-title">
      <div className={styles.container}>
        <h2 id="projects-title" className={styles.title}>
          Наши проекты
        </h2>
        <Link href="/projects" className={styles.button} aria-label="Все проекты">
          Все проекты
        </Link>
      </div>

      <div className={styles.cardsWrapper}>
        {projects.map((item) => (
          <article key={item.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={item.image}
                alt={`Фото проекта: ${item.title}`}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <p className={styles.description}>{item.description}</p>
                <Link
                  href={item.link}
                  className={styles.buttonCard}
                  aria-label={`Подробнее о проекте ${item.title}`}
                >
                  Подробнее
                </Link>
              </div>
            </div>

            <div className={styles.content}>
              <h3 className={styles.titleCard}>{item.title}</h3>
              <time dateTime={item.date} className={styles.date}>
                {item.date}
              </time>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
