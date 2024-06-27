import { FunctionComponent } from "react";
import styles from "./AssistantLLM.module.css";

export type AssistantLLMType = {
  className?: string;
};

const AssistantLLM: FunctionComponent<AssistantLLMType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.containerWrapper, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.workflowHeaderWrapper}>
          <div className={styles.workflowHeader}>
            <div className={styles.workflowTagContainerParent}>
              <div className={styles.workflowTagContainer}>
                <button className={styles.tagMaster}>
                  <div className={styles.pricing}>How It Works</div>
                </button>
              </div>
              <h1 className={styles.howOurAi}>How Our AI LLM Works</h1>
            </div>
            <div className={styles.leverageThePowerContainer}>
              <p className={styles.leverageThePower}>
                Leverage the power of AI to predict potential health issues.
              </p>
              <p className={styles.leverageThePower}>
                Receive proactive recommendations for preventive care based on
                data analytics.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.workflowSteps}>
          <div className={styles.stepsHorizontal}>
            <div className={styles.progressWrapper}>
              <div className={styles.frame}>
                <img
                  className={styles.stepsTailHorizontalActive}
                  alt=""
                  src="/steps-tail-horizontal-active.svg"
                />
              </div>
              <div className={styles.stepsItem}>
                <div className={styles.atom} />
              </div>
              <div className={styles.frame1}>
                <img
                  className={styles.stepsTailHorizontalActive1}
                  alt=""
                  src="/steps-tail-horizontal-active.svg"
                />
              </div>
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.stepOneStatus}>
                <div className={styles.finished}>User Input</div>
              </div>
              <div className={styles.explainYourStep}>
                Receive personalized health insight
              </div>
            </div>
          </div>
          <div className={styles.stepsHorizontalParent}>
            <div className={styles.stepsHorizontal1}>
              <div className={styles.progressWrapper1}>
                <div className={styles.frame1}>
                  <img
                    className={styles.stepsTailHorizontalActive1}
                    alt=""
                    src="/steps-tail-horizontal-active.svg"
                  />
                </div>
                <div className={styles.stepsItem}>
                  <div className={styles.atom} />
                </div>
                <div className={styles.frame1}>
                  <img
                    className={styles.stepsTailHorizontalActive1}
                    alt=""
                    src="/steps-tail-horizontal-active.svg"
                  />
                </div>
              </div>
              <div className={styles.textWrapper1}>
                <div className={styles.finished1}>AI Algorithms</div>
                <div
                  className={styles.explainYourStep1}
                >{`Analyze  input & Metrics`}</div>
              </div>
            </div>
            <div className={styles.stepsHorizontal2}>
              <div className={styles.progressWrapper2}>
                <div className={styles.frame4}>
                  <img
                    className={styles.stepsTailHorizontalActive1}
                    alt=""
                    src="/steps-tail-horizontal-active.svg"
                  />
                </div>
                <div className={styles.stepsItem2}>
                  <img
                    className={styles.monotoneCheckIcon}
                    loading="lazy"
                    alt=""
                    src="/monotone-check.svg"
                  />
                </div>
                <div className={styles.frame4}>
                  <img
                    className={styles.stepsTailHorizontalActive1}
                    alt=""
                    src="/steps-tail-horizontal-active.svg"
                  />
                </div>
              </div>
              <div className={styles.textWrapper2}>
                <div className={styles.finished1}>AI Recommendation</div>
                <div className={styles.explainYourStep}>
                  Receive personalized health
                </div>
              </div>
            </div>
          </div>
          <div className={styles.stepsHorizontal}>
            <div className={styles.progressWrapper1}>
              <div className={styles.frame1}>
                <img
                  className={styles.stepsTailHorizontalActive1}
                  alt=""
                  src="/steps-tail-horizontal-active-5.svg"
                />
              </div>
              <div className={styles.stepsItem3}>
                <div className={styles.atom2} />
              </div>
              <div className={styles.frame}>
                <img
                  className={styles.stepsTailHorizontalActive}
                  alt=""
                  src="/steps-tail-horizontal-active-5.svg"
                />
              </div>
            </div>
            <div className={styles.textWrapper1}>
              <div className={styles.finished1}>Iterative Improvement</div>
              <div className={styles.explainYourStep3}>
                The AI learns from user interactions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssistantLLM;
