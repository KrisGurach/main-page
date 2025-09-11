"use client";
import styles from "./Info.module.css";

export default function Info() {
    return (
        <div className={styles.headerInfo}>
            <div className={styles.infoWrapper}>
                <img className={styles.infoLogo} src="./logo.svg" alt="Logo" />
                <p className={styles.infoText}>Профессиональные <span className={styles.infoSpan}>средства связи</span></p>
            </div>

            <div className={styles.infoWrapper}>
                <div className={`${styles.infoContainer} ${styles.infoContainerPhone}`}>
                    <img src="./header__call.png" alt="Call" />
                    <p className={styles.infoTextBold}>+7 (727) 261 69 69</p>
                    <img className={styles.infoIcon} src="./arrow_down.svg" alt="Drop down" />

                    {/* скрытый попап */}
                    <div className={styles.infoDropdown}>
                        <p>+7 (771) 719 88 05</p>
                        <p>+7 (771) 705 17 40</p>
                    </div>
                </div>

                <div className={styles.infoContainer}>
                    <img src="./header__price.png" alt="Price" />
                    <p className={styles.infoTextBold}>Прайс-лист</p>
                </div>
                <div className={styles.infoContainer}>
                    <img src="./header__work-time.png" alt="Work-time" />
                    <p>Пн-Пт с <span className={styles.infoTextGreen}>08:00 до 17:00</span></p>
                </div>
            </div>
        </div>
    );
}