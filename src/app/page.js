import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>

        <div className={styles.header__information}>
          <div className={styles.header__wrapper}>
            <img className={styles.header__logo} src="/logo.svg" alt="Logo" />
            <p className={styles.header__text}>Профессиональные <span className={styles.header__span}>средства связи</span></p>
          </div>

          <div className={styles.header__wrapper}>
            <div className={`${styles.header__container} ${styles.header__container_phone}`}>
              <img src="/header__call.png" alt="Call" />
              <p className={styles.header__text_bold}>+7 (727) 261 69 69</p>
              <img src="/arrow_down.svg" alt="Drop down" />

              {/* скрытый попап */}
              <div className={styles.header__dropdown}>
                <p>+7 (771) 719 88 05</p>
                <p>+7 (771) 705 17 40</p>
              </div>
            </div>

            <div className={styles.header__container}>
              <img src="/header__price.png" alt="Price" />
              <p className={styles.header__text_bold}>Прайс-лист</p>
            </div>
            <div className={styles.header__container}>
              <img src="/header__work-time.png" alt="Work-time" />
              <p>Пн-Пт с <span className={styles.header__text_green}>08:00 до 17:00</span></p>
            </div>
          </div>
        </div>

        <div className={styles.header__navbar}>
          <p>Catalog</p>
        </div>
      </header>

      <main className={styles.main}>

      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  );
}
