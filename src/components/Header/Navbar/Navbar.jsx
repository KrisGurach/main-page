"use client";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [isCatalogOpen, setIsCatalogOpen] = useState(false);

    return (
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
    );
}