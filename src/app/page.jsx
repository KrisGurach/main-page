"use client";
import styles from "./page.module.css";
import Slider from "../components/Slider/Slider";
import SliderGoods from "../components/SliderGoods/SliderGoods";
import News from "../components/News/News";
import Company from "../components/Company/Company";
import Projects from "../components/Projects/Projects";
import Info from "../components/Header/Info/Info";
import Navbar from "../components/Header/Navbar/Navbar"

export default function Home() {
  

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Info />
        <Navbar />
      </header>

      <main className={styles.main}>
        <Slider />
        <SliderGoods />
        <News />
        <Company />
        <Projects />
      </main>
      
      <footer className={styles.footer}>

      </footer>
    </div>
  );
}
