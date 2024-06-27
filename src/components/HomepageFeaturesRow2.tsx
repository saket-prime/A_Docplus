import { FunctionComponent } from "react";
import styles from "./HomepageFeaturesRow2.module.css";

export type HomepageFeaturesRow2Type = {
  className?: string;
};

const HomepageFeaturesRow2: FunctionComponent<HomepageFeaturesRow2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.row, className].join(" ")}>
      <div className={styles.anomalyFirstRow}>
        <div className={styles.anomalyCard}>
          <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
          <img
            className={styles.image12Icon}
            loading="lazy"
            alt=""
            src="/image-12@2x.png"
          />
        </div>
      </div>
      <div className={styles.colLeft}>
        <div className={styles.tagMaster}>
          <div className={styles.pricing}>Feature 1</div>
        </div>
        <div className={styles.listBody}>
          <div className={styles.frame}>
            <h3 className={styles.heading}>AI Health Analytics</h3>
            <div className={styles.listDescription}>
              We provide multiple AI Health analytics system for to ensure
              patient health is our priority. Here’s a few health metrics that
              we measure.
            </div>
          </div>
          <div className={styles.checklistGroup}>
            <div className={styles.checklistItemText}>
              <input className={styles.solidCheckSquare} type="checkbox" />
              <div className={styles.text}>symptom checker</div>
            </div>
            <div className={styles.checklistItemText}>
              <input className={styles.solidCheckSquare} type="checkbox" />
              <div className={styles.text}>health risk assessment</div>
            </div>
            <div className={styles.checklistItemText}>
              <input className={styles.solidCheckSquare} type="checkbox" />
              <div className={styles.text}>chronic condition monitoring</div>
            </div>
          </div>
        </div>
        <button className={styles.listButtonWrapper}>
          <div className={styles.button}>
            <div className={styles.content}>
              <b className={styles.text3}>Learn More</b>
              <img
                className={styles.monotoneAddIcon}
                alt=""
                src="/monotone-add6.svg"
              />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HomepageFeaturesRow2;
