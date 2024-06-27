import { FunctionComponent } from "react";
import styles from "./FAQTab.module.css";

export type FAQTabType = {
  className?: string;
};

const FAQTab: FunctionComponent<FAQTabType> = ({ className = "" }) => {
  return (
    <div className={[styles.tabGroupText, className].join(" ")}>
      <div className={styles.tabSingle}>
        <b className={styles.a}>Authentication</b>
      </div>
      <div className={styles.tabSingle1}>
        <b className={styles.a1}>Authorization 3.0</b>
      </div>
      <div className={styles.tabSingle2}>
        <b className={styles.a2}>1 Month</b>
      </div>
      <div className={styles.tabSingle2}>
        <b className={styles.a2}>1 Year</b>
      </div>
      <div className={styles.tabSingle2}>
        <b className={styles.a4}>Crptographic Method</b>
      </div>
    </div>
  );
};

export default FAQTab;
