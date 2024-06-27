import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PlatformCallToAction.module.css";

export type PlatformCallToActionType = {
  className?: string;
};

const PlatformCallToAction: FunctionComponent<PlatformCallToActionType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/ai-health-assessment");
  }, [navigate]);

  return (
    <section className={[styles.callToAction, className].join(" ")}>
      <div className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.row}>
              <img
                className={styles.monotoneAddIcon}
                loading="lazy"
                alt=""
                src="/monotone-add-22.svg"
              />
              <h1 className={styles.text}>
                Access to health information using AI/ML Anywhere.
              </h1>
            </div>
            <div className={styles.row1}>
              <div className={styles.tags}>
                <div className={styles.tagMaster}>
                  <div className={styles.pricing}>Predictive Health</div>
                </div>
                <div className={styles.tagMaster1}>
                  <div className={styles.pricing1}>AI</div>
                </div>
                <button className={styles.tagMaster2}>
                  <div className={styles.pricing2}>Analytics</div>
                </button>
                <div className={styles.tagMaster1}>
                  <div className={styles.pricing3}>Technology</div>
                </div>
                <button className={styles.tagMaster4}>
                  <div className={styles.pricing4}>Mental Health</div>
                </button>
                <div className={styles.tagMaster1}>
                  <div className={styles.pricing5}>Nutrition</div>
                </div>
                <div className={styles.tagMaster1}>
                  <div className={styles.pricing6}>Fitness</div>
                </div>
                <div className={styles.tagMaster}>
                  <div className={styles.pricing7}>Weight Loss</div>
                </div>
                <div className={styles.tagMaster1}>
                  <div className={styles.pricing8}>Sleep</div>
                </div>
                <button className={styles.tagMaster4}>
                  <div className={styles.pricing9}>AI Chatbot</div>
                </button>
                <div className={styles.tagMaster1}>
                  <div className={styles.pricing10}>Health</div>
                </div>
              </div>
              <div className={styles.btnRow}>
                <div className={styles.text1}>
                  Our platform analyzes your health data to identify trends,
                  patterns, and potential risks. This is a revolutionary
                  breakthrough in AI.
                </div>
                <button className={styles.button} onClick={onButtonClick}>
                  <div className={styles.content1}>
                    <b className={styles.text2}>Learn More</b>
                    <img
                      className={styles.monotoneAddIcon1}
                      alt=""
                      src="/monotone-add1.svg"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformCallToAction;
