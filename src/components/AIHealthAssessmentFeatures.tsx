import { FunctionComponent } from "react";
import styles from "./AIHealthAssessmentFeatures.module.css";

export type AIHealthAssessmentFeaturesType = {
  className?: string;
};

const AIHealthAssessmentFeatures: FunctionComponent<
  AIHealthAssessmentFeaturesType
> = ({ className = "" }) => {
  return (
    <section className={[styles.features, className].join(" ")}>
      <div className={styles.featuresContainer}>
        <div className={styles.featureItem}>
          <div className={styles.featureDetails}>
            <img
              className={styles.featureTitleIcon}
              loading="lazy"
              alt=""
              src="/frame3.svg"
            />
            <div className={styles.featureDescription}>
              <div className={styles.accuracyTitle}>99.8%</div>
              <div className={styles.accuracyTitle1}>
                <h3 className={styles.accuracy}>Accuracy</h3>
                <div className={styles.progressBar}>
                  <div className={styles.progress}>
                    <div className={styles.progressBarAtom} />
                    <div className={styles.atom} />
                    <div className={styles.atom} />
                    <div className={styles.atom} />
                    <div className={styles.atom} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.keyFeaturesContentWrapper}>
          <div className={styles.keyFeaturesContent}>
            <div className={styles.keyFeaturesDescription}>
              <h1 className={styles.keyFeatures}>Key Features</h1>
              <div className={styles.ourAiHealth}>
                Our AI Health Assessment is at the forefront of modern
                healthcare, providing personalized insights and guidance for
                individuals seeking to optimize their well-being.
              </div>
            </div>
            <button className={styles.button}>
              <div className={styles.content}>
                <a className={styles.text}>Learn More</a>
                <img
                  className={styles.monotoneAddIcon}
                  alt=""
                  src="/monotone-add1.svg"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHealthAssessmentFeatures;
