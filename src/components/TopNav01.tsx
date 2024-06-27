import { FunctionComponent } from "react";
import styles from "./TopNav01.module.css";

export type TopNav01Type = {
  className?: string;
};

const TopNav01: FunctionComponent<TopNav01Type> = ({ className = "" }) => {
  return (
    <header className={[styles.topNav, className].join(" ")}>
      <img className={styles.logoSquareIcon} alt="" src="/logo-square2.svg" />
      <div className={styles.addButtons}>
        <div className={styles.buttonIconFab}>
          <img
            className={styles.monotoneAddIcon}
            alt=""
            src="/monotone-add14.svg"
          />
        </div>
        <div className={styles.buttonIconFab}>
          <img
            className={styles.monotoneAddIcon}
            alt=""
            src="/monotone-add-1.svg"
          />
        </div>
        <button className={styles.button}>
          <div className={styles.content}>
            <a className={styles.text}>Menu</a>
            <div className={styles.monotoneAdd}>
              <div className={styles.vector} />
              <div className={styles.vector1} />
              <div className={styles.vector2} />
              <div className={styles.vector3} />
            </div>
          </div>
        </button>
      </div>
    </header>
  );
};

export default TopNav01;
