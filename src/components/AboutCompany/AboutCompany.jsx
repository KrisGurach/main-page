"use client";
import { useState } from "react";
import styles from "./AboutCompany.module.css";

export default function Home() {
    const tabs = [
        {
            id: "pro",
            label: "Профессионалы своего дела",
            icon: "/icons/pro.svg",
            content: (
                <>
                    <p className={styles.subtitile}>Профессионалы своего дела</p>
                    <p className={styles.text}>Профессионализм и надежность - главный принцип компании</p>
                    <p className={styles.text}> 
                        Компания успешно работает в Казахстане c 1999 года. За двадцать два
                        года деятельности мы достигли уровня профессионализма, который в
                        полной мере соответствует мировым стандартам.
                    </p>
                    <p className={styles.text}>
                        Накопленный опыт работы в разных сферах, мощный потенциал и используемые
                        передовые технологии позволяют нашей компании успешно решать задачи
                        любой сложности.
                    </p>
                </>
            ),
        },
        {
            id: "dist",
            label: "Официальный дистрибьютор",
            icon: "/icons/dist.svg",
            content: (
                <>
                    <p className={styles.subtitile}>Официальный дистрибьютор</p>
                    <p className={styles.text}>
                        Компания является авторизированным дистрибьютором на территории Республики Казахстан ведущих компаний, таких как, Hytera, SAF Tehnika.
                    </p>
                    <p className={styles.text}>  
                        Все оборудование надежно и имеет долгий срок эксплуатации. Оно отличается высокой производительностью 
                        и емкостью, компактно и удобно в использовании,
                        совместимо с остальными системами и средствами связи.
                    </p>
                </>
            ),
        },
        {
            id: "conf",
            label: "Конфиденциальность",
            icon: "/icons/conf.svg",
            content: (
                <>
                    <p className={styles.subtitile}>Конфиденциальность</p>
                    <p className={styles.text}>
                        В компании созданы все условия для работы с госсекретами, функционирует ПЗГС.
                    </p>
                    <p className={styles.text}>
                        За 22 года деятельности наша компания достигла высокого уровня профессионализма, полностью соответствующего мировым стандартам.
                        Работники компании имеют допуска к государственным секретам.
                    </p>
                </>
            ),
        },
        {
            id: "servis",
            label: "Сервисный центр",
            icon: "/icons/servis.svg",
            content: (
                <>
                    <p className={styles.subtitile}>Сервисный центр</p>
                    <p className={styles.text}>
                        Наличие в компании собственного сервисного центра с годовым гарантийным и постгарантийным обслуживанием.
                    </p>
                    <p className={styles.text}>
                        Наши специалисты проходят курсы повышения квалификации и необходимое обучение в учебном центре 
                        «Hytera Communications Corporation Limited» дающее им право на проведение всех видов сервисных 
                        и ремонтных работ на оборудовании систем транкинговой радиосвязи цифрового стандарта DMR компании Hytera.
                    </p>
                </>
            ),
        },
        {
            id: "proiz",
            label: "Собственное производство",
            icon: "/icons/proizv.svg",
            content: (
                <>
                    <p className={styles.subtitile}>Собственное производство</p>
                    <p className={styles.text}>
                        С течением времени появились свои производственные сборочные и ремонтные площади, 
                        благодаря чему к услугам компании добавилось собственное производство продукции 
                        (оборудование защиты средств информации).
                    </p>
                    <p className={styles.text}>
                        Продукция Компании внесена в «Реестр доверенной продукции электронной промышленности и программного обеспечения»
                    </p>
                </>
            ),
        },
    ];
    const [activeTab, setActiveTab] = useState("pro");

  return (
    <section className={styles.tabsSection}>
      <h3 className={styles.title}>О компании</h3>  
      <div className={styles.tabButtons}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabButton} ${
              activeTab === tab.id ? styles.active : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <img
              src={tab.icon}
              alt=""
              aria-hidden="true"
              className={`${styles.icon} ${
                activeTab === tab.id ? styles.iconActive : styles.iconInactive
              }`}
            />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>
        <img className={styles.image} src="./image.png" />
        <div>
          {tabs.find((tab) => tab.id === activeTab)?.content}
          <button className={styles.button}>Подробнее</button>
        </div>
      </div>
    </section>
  );
}