import { FunctionComponent } from "react";
import styles from "./FAQTags.module.css";

export type FAQTagsType = {
  className?: string;
};

const FAQTags: FunctionComponent<FAQTagsType> = ({ className = "" }) => {
  return (
    <div className={[styles.frame, className].join(" ")}>
      <div className={styles.topics}>Topics</div>
      <div className={styles.tagsList}>
        <div className={styles.tagMaster}>
          <div className={styles.pricing}>Analytics</div>
        </div>
        <div className={styles.tagMaster1}>
          <div className={styles.pricing1}>Pricing</div>
        </div>
        <div className={styles.tagMaster2}>
          <div className={styles.pricing2}>Security</div>
        </div>
        <div className={styles.tagMaster2}>
          <div className={styles.pricing3}>Account</div>
        </div>
        <div className={styles.tagMaster4}>
          <div className={styles.pricing4}>18+</div>
        </div>
      </div>
    </div>
  );
};

export default FAQTags;
