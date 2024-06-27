import { FunctionComponent } from "react";
import styles from "./AIHealthAssessmentScore.module.css";

export type AIHealthAssessmentScoreType = {
  className?: string;
};

const AIHealthAssessmentScore: FunctionComponent<
  AIHealthAssessmentScoreType
> = ({ className = "" }) => {
  return (
    <section className={[styles.resultContentWrapper, className].join(" ")}>
      <div className={styles.resultContent}>
        <div className={styles.resultInnerWrapper}>
          <div className={styles.resultInner}>
            <div className={styles.resultTitleContainer}>
              <img
                className={styles.monotoneAddIcon}
                loading="lazy"
                alt=""
                src="/monotone-add-92.svg"
              />
              <h1 className={styles.assessmentCompleted}>
                Assessment Completed.
              </h1>
            </div>
            <div className={styles.resultType}>
              <div className={styles.resultTypeContainer}>
                <div className={styles.resultTypeIcons}>
                  <img
                    className={styles.solidProcessorIcon}
                    loading="lazy"
                    alt=""
                    src="/solid-processor1.svg"
                  />
                  <div className={styles.resultTypeIcon}>102</div>
                </div>
                <div className={styles.aiSuggestions}>AI Suggestions</div>
              </div>
              <div className={styles.resultTypeContainer1}>
                <div className={styles.resultTypeIcons}>
                  <img
                    className={styles.solidWarningIcon}
                    loading="lazy"
                    alt=""
                    src="/solid-warning.svg"
                  />
                  <div className={styles.div}>84</div>
                </div>
                <div className={styles.aiSuggestions}>Health Anomalies</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.resultPlaceholderParent}>
            <div className={styles.resultPlaceholder}>
              <div className={styles.resultScorePlaceholder}>89</div>
            </div>
            <div className={styles.resultScoreContainer}>
              <div className={styles.resultScorePlaceholder}>89</div>
            </div>
          </div>
          <div className={styles.resultScore}>
            <div className={styles.scoreLabels}>
              <h3 className={styles.yourHealthScore}>Your health score is:</h3>
            </div>
            <div className={styles.resultScoreSpacer}>89</div>
            <div className={styles.scoreLabels1}>
              <h3 className={styles.youAreVeryContainer}>
                <span className={styles.youAre}>{`You are `}</span>
                <span className={styles.veryHealthy}>very healthy.</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHealthAssessmentScore;
