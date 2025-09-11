"use client";
import styles from "./Footer.module.css";

export default function Footer() {
  
  return (
    <div className={styles.container}>
        <div className={styles.footerGrid}>
    <div className="footerLeft">

      <div className={styles.footerLogo}>
        <img src="./logo.svg" alt="Логотип" />
      </div>

      <div className={styles.footerSection}>
        <h4>Каталог продукции:</h4>
        <ul>
          <li>Видеорегистраторы</li>
          <li>Радиостанции</li>
          <li>Антидроны</li>
          <li>Аксессуары</li>
          <li>MItel</li>
        </ul>
      </div>

      <div className={styles.footerSection}>
        <h4>Услуги:</h4>
        <ul>
          <li>Системы и сети связи</li>
          <li>Транкинговые системы связи</li>
          <li>Технические средства защиты информации</li>
          <li>Технические средства для ОРМ</li>
          <li>Системы громкоговорящей связи и оповещения</li>
        </ul>
      </div>

      <div className={styles.footerSection}>
        <h4>О компании</h4>
        <h4>Полезная информация</h4>
      </div>

      <div className={styles.footerSection}>
        <h4>Новости</h4>
        <h4>Контакты</h4>
      </div>

      <div className={styles.footerContacts}>
        <p>+7 (771) 719 88 05</p>
        <p>topol@topol.kz</p>
        <p>+7 (727) 261 69 69</p>
        <p>+7 (771) 705 17 40</p>
      </div>
    </div>

    <div className={styles.footerRight}>
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A3ff2a47a3c91ff4f82c53e59516c84220c7362edbc9c72feccf25f2317c847a0&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
    </div>
  </div>

    </div>
  );
}  