import { FunctionComponent } from "react";
import styles from "./CareerCTASection.module.css";

export type CareerCTASectionType = {
  className?: string;
};

const CareerCTASection: FunctionComponent<CareerCTASectionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.ctaSection, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.actionWrapper}>
          <div className={styles.section}>
            <div className={styles.tagMaster}>
              <div className={styles.pricing}>Let’s get healthy.</div>
            </div>
            <div className={styles.actionHeading}>
              <div className={styles.getStartedToday}>Get started today!</div>
              <div className={styles.selectThePlan}>
                Select the plan that suits your lifestyle and kickstart your
                journey to a healthier, more vibrant you with Asclepios.
              </div>
            </div>
            <div className={styles.frame}>
              <div className={styles.button}>
                <div className={styles.content}>
                  <b className={styles.choiceLabel}>Try Demo</b>
                  <img
                    className={styles.monotoneAddIcon}
                    alt=""
                    src="/monotone-add-12.svg"
                  />
                </div>
              </div>
              <div className={styles.button1}>
                <div className={styles.content}>
                  <b className={styles.text}>Download For Free</b>
                  <img
                    className={styles.monotoneAddIcon}
                    alt=""
                    src="/monotone-add11.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imageWrapperParent}>
          <div className={styles.imageWrapper}>
            <img
              className={styles.topImageIcon}
              alt=""
              src="/top-image@2x.png"
            />
          </div>
          <div className={styles.placeholder}>
            <img
              className={styles.leftImageIcon}
              alt=""
              src="/left-image@2x.png"
            />
            <img
              className={styles.rightImageIcon}
              alt=""
              src="/right-image@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCTASection;
