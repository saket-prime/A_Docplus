import { FunctionComponent } from "react";
import styles from "./HomepageFeaturesRow1.module.css";

export type HomepageFeaturesRow1Type = {
  className?: string;
};

const HomepageFeaturesRow1: FunctionComponent<HomepageFeaturesRow1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.row, className].join(" ")}>
      <div className={styles.anomalyCardFirstParent}>
        <div className={styles.anomalyCardFirst}>
          <button className={styles.tagMaster}>
            <div className={styles.pricing}>Feature 2</div>
          </button>
          <div className={styles.cardFirstBody}>
            <div className={styles.cardFirstTitle}>
              <h3 className={styles.heading}>Wellness AI Chatbot</h3>
              <div className={styles.cardDescription}>
                Say goodbye to healthcare 2.0 because we have wellness AI
                Chatbot technology at your fingertips. Experience it today, for
                free.
              </div>
            </div>
            <div className={styles.cardDetails}>
              <div className={styles.detailFirstRow}>
                <div className={styles.text}>0.145</div>
                <div className={styles.text1}>Response Speed</div>
              </div>
              <div className={styles.detailFirstRow}>
                <div className={styles.text2}>50M+</div>
                <div className={styles.text3}>LLM Datas</div>
              </div>
            </div>
          </div>
          <button className={styles.anomalyCardButtonWrapper}>
            <div className={styles.button}>
              <div className={styles.content}>
                <b className={styles.text4}>Learn More</b>
                <img
                  className={styles.monotoneAddIcon}
                  alt=""
                  src="/monotone-add6.svg"
                />
              </div>
            </div>
          </button>
        </div>
        <img
          className={styles.anomalyCardSecond}
          loading="lazy"
          alt=""
          src="/frame-12@2x.png"
        />
      </div>
    </div>
  );
};

export default HomepageFeaturesRow1;
