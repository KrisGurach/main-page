"use client";
import styles from "./Company.module.css";


export default function Company() {

    return (
        <section className={styles.company}>
            <div className={styles.container}>
                <h2 className={styles.title}>О компании</h2>
                <p className={styles.text}>
                    <span className={styles.boldText}>
                        Компания «Тополь»
                    </span> 
                    – лидер рынка телекоммуникационных систем Казахстана Мы, команда профессиональных специалистов, уже более 25 лет
                    предлагаем клиентам передовые технологии и качественное оборудование.
                </p>

                <p className={styles.text}>
                    <span className={styles.boldText}>
                        Среди наших клиентов
                    </span>
                    — ведущие предприятия нефтедобывающего сектора, компании горнодобывающей сферы, компании перерабатывающего сектора,
                    областные департаменты полиции, сегмент банковского рынка, охранные агентства, областные комитеты лесного хозяйства, организации системы здравоохранения.
                </p>

                <p className={styles.text}>
                    <span className={styles.boldText}>
                        Географическое покрытие поставок включает все области Казахстана: от Алматы до дальних уголков страны.
                    </span>
                </p>

                <button className={styles.button}>Подробнее</button>
            </div>
            <img className={styles.image} src="./map.png" alt="Map of shops" />
        </section>
    )
};