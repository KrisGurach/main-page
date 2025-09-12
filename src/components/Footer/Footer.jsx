"use client";
import styles from "./Footer.module.css";
import FooterMapsComponent from "../FooterMapsComponent/FooterMapsComponent"

export default function Footer() {
  
  return (
    <div className={styles.container}>
        <div className={styles.footerGrid}>
    <div className={styles.footerLeft}>

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
            <div>
              <div className={styles.footerContainer}>
                <div className={styles.footerIcon}>
                  <img src="../icons/call.svg" alt="Call" />
                </div>
                <p>+7 (771) 719 88 05</p>
              </div>
              <div className={styles.footerContainer}>
                <div className={styles.footerIcon}>
                  <img src="../icons/mail.svg" alt="Mail" />
                </div>
                <p>topol@topol.kz</p>
              </div>
            </div>
            <div>
              <div className={styles.footerContainer}>
                <div className={styles.footerIcon}>
                  <img src="../icons/call.svg" alt="Call" />
                </div>
                <p>+7 (727) 261 69 69</p>
              </div>
              <div className={styles.footerContainer}>
                <div className={styles.footerIcon}>
                  <img src="../icons/WA.svg" alt="WhatsApp" />
                </div>
                <p>+7 (771) 705 17 40</p>
              </div>
            </div>
          </div>
        </div>
    <FooterMapsComponent />
  </div>

    </div>
  );
}  