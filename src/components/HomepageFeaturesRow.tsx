import { FunctionComponent } from "react";
import styles from "./HomepageFeaturesRow.module.css";

export type HomepageFeaturesRowType = {
  className?: string;
};

const HomepageFeaturesRow: FunctionComponent<HomepageFeaturesRowType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.row, className].join(" ")}>
      <div className={styles.frame}>
        <div className={styles.goalCompleteNotificationParent}>
          <img
            className={styles.goalCompleteNotification}
            alt=""
            src="/goal-complete-notification@2x.png"
          />
          <img
            className={styles.stepsIcon}
            loading="lazy"
            alt=""
            src="/steps@2x.png"
          />
          <img
            className={styles.heartRateDetails}
            alt=""
            src="/heart-rate-details@2x.png"
          />
        </div>
      </div>
      <div className={styles.colLeft}>
        <div className={styles.tagMaster}>
          <div className={styles.pricing}>Feature 3</div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.headingParent}>
            <h3
              className={styles.heading}
            >{`Predictive Health & Anomaly Detection`}</h3>
            <div className={styles.ourAnomalyDetection}>
              Our anomaly detection technology detects any abnormalities from
              your health, backed with docplus AI technology.
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frame1}>
              <div className={styles.accuracy}>Accuracy</div>
              <div className={styles.div}>99.487%</div>
            </div>
            <div className={styles.frame2}>
              <div className={styles.progressBlue} />
            </div>
          </div>
        </div>
        <button className={styles.buttonWrapper}>
          <div className={styles.button}>
            <div className={styles.content}>
              <b className={styles.text}>Learn More</b>
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

export default HomepageFeaturesRow;
