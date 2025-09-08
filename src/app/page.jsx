"use client";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  return (
    <div className={styles.page}>
      <header className={styles.header}>

        <div className={styles.headerInfo}>
          <div className={styles.infoWrapper}>
            <img className={styles.infoLogo} src="/logo.svg" alt="Logo" />
            <p className={styles.infoText}>Профессиональные <span className={styles.infoSpan}>средства связи</span></p>
          </div>

          <div className={styles.infoWrapper}>
            <div className={`${styles.infoContainer} ${styles.infoContainerPhone}`}>
              <img src="/header__call.png" alt="Call" />
              <p className={styles.infoTextBold}>+7 (727) 261 69 69</p>
              <img className={styles.infoIcon} src="/arrow_down.svg" alt="Drop down" />

              {/* скрытый попап */}
              <div className={styles.infoDropdown}>
                <p>+7 (771) 719 88 05</p>
                <p>+7 (771) 705 17 40</p>
              </div>
            </div>

            <div className={styles.infoContainer}>
              <img src="/header__price.png" alt="Price" />
              <p className={styles.infoTextBold}>Прайс-лист</p>
            </div>
            <div className={styles.infoContainer}>
              <img src="/header__work-time.png" alt="Work-time" />
              <p>Пн-Пт с <span className={styles.infoTextGreen}>08:00 до 17:00</span></p>
            </div>
          </div>
        </div>

        <div className={styles.headerNavbar}>
          <div className={styles.navbarWrapper}>
         {/* Бургер-меню */}
<div className={styles.navbarCatalogWrapper}>
  <button 
    className={styles.navbarCatalog} 
    onClick={() => setIsCatalogOpen(!isCatalogOpen)}
  >
    <p className={styles.navbarCatalogText}>Каталог товаров</p>
    <img className={styles.navbarBurger} src="/burger-menu.svg" alt="Кнопка меню" />
  </button>

{isCatalogOpen && (
  <div className={styles.catalogPopup}>
    <div className={styles.catalogMenu}>
      <ul>
        <li className={styles.catalogItem}>
          Рации
          <ul className={styles.catalogSubmenu}>
            <li><a href="#">Портативные</a></li>
            <li><a href="#">Автомобильные</a></li>
            <li><a href="#">Базовые станции</a></li>
          </ul>
        </li>

        <li className={styles.catalogItem}>
          Антенны
          <ul className={styles.catalogSubmenu}>
            <li><a href="#">Нагрудные</a></li>
            <li><a href="#">Автомобильные</a></li>
          </ul>
        </li>

        <li className={styles.catalogItem}>
          Аксессуары
          <ul className={styles.catalogSubmenu}>
            <li><a href="#">Гарнитуры</a></li>
            <li><a href="#">Кабели</a></li>
          </ul>
        </li>
      </ul>
    </div>
  
<div className={styles.catalogSpacer}></div> 
  
      <div className={styles.catalogImageContainer}>
        <a href="#">
          <img className={styles.catalogImage} src="/SHytera.png" alt="Спецпредложение" />
        </a>
      </div>
      </div>
)}

</div>

            {/* Навигация */}
            <nav className={styles.nav}>
              <ul className={styles.navList}>

                <li className={styles.hasDropdown}>
                  <div className={styles.dropdownLabel}>
                    <p className={styles.dropdownText}>Услуги</p>
                    <img src="/arrow-white-down.png" alt="Меню разделов" className={styles.dropdownIcon} />
                  </div>
                  <ul className={styles.dropdown}>
                    <li className={styles.dropdownList}><a href="#">Системы и сети связи</a></li>
                    <li className={styles.dropdownList}><a href="#">Транкинговые системы связи</a></li>
                    <li className={styles.dropdownList}><a href="#">Технические средства защиты информации</a></li>
                    <li className={styles.dropdownList}><a href="#">Технические средства для оперативно-розыскных мероприятий</a></li>
                    <li className={styles.dropdownList}><a href="#">Системы громкоговорящей связи и оповещения</a></li>
                    <li className={styles.dropdownList}><a href="#">Радиорелейные системы связи, беспроводные системы связи WiMax, Wi-Fi</a></li>
                    <li className={styles.dropdownList}><a href="#">Системы видеонаблюдения и контроля доступа</a></li>
                    <li className={styles.dropdownList}><a href="#">Системы видеоконференцсвязи</a></li>
                    <li className={styles.dropdownList}><a href="#">Мобильные комплексы</a></li>
                  </ul>
                </li>

                <li className={styles.hasDropdown}>
                  <div className={styles.dropdownLabel}>
                    <p className={styles.dropdownText}>Информация</p>
                    <img src="/arrow-white-down.png" alt="Меню разделов" className={styles.dropdownIcon} />
                  </div>
                  <ul className={styles.dropdown}>
                    <li className={styles.dropdownList}><a href="/info1">FAQ (Часто задаваемые вопросы)</a></li>
                    <li className={styles.dropdownList}><a href="/info2">Нормативная база</a></li>
                    <li className={styles.dropdownList}><a href="/info2">Доставка</a></li>
                    <li className={styles.dropdownList}><a href="/info2">Оплата</a></li>
                  </ul>
                </li>

                <li className={styles.hasDropdown}>
                  <div className={styles.dropdownLabel}>
                    <p className={styles.dropdownText}>О компании</p>
                    <img src="/arrow-white-down.png" alt="Меню разделов" className={styles.dropdownIcon} />
                  </div>
                  <ul className={styles.dropdown}>
                    <li className={styles.dropdownList}><a href="/about">Проекты</a></li>
                    <li className={styles.dropdownList}><a href="/team">Партнеры</a></li>
                    <li className={styles.dropdownList}><a href="/team">Клиенты</a></li>
                    <li className={styles.dropdownList}><a href="/team">Обучение</a></li>
                    <li className={styles.dropdownList}><a href="/team">Лицензии</a></li>
                    <li className={styles.dropdownList}><a href="/team">Благодарственные письма</a></li>
                    <li className={styles.dropdownList}><a href="/team">Вакансии</a></li>
                  </ul>
                </li>

                <li>
                  <p className={styles.dropdownText}>Контакты</p>
                </li>
              </ul>
            </nav>

            {/* Поиск */}
            <div className={styles.search}>
              <input type="text" placeholder="Поиск..." />
              <button>🔍</button>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>

      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  );
}
