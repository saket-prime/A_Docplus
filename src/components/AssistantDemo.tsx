import { FunctionComponent } from "react";
import styles from "./AssistantDemo.module.css";

export type AssistantDemoType = {
  className?: string;
};

const AssistantDemo: FunctionComponent<AssistantDemoType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.demoSection, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.demoInfo}>
          <div className={styles.row}>
            <h1 className={styles.tryTheDemoContainer}>
              <p className={styles.tryTheDemo}>Try The Demo.</p>
              <p className={styles.tryTheDemo}>It’s Free.</p>
            </h1>
            <div className={styles.frame}>
              <div className={styles.empowerYourWellness}>
                Empower your wellness journey with the AI Health Assistant,
                offering conversational support, personalized guidance.
              </div>
              <div className={styles.frame1}>
                <div className={styles.tagMaster}>
                  <img
                    className={styles.solidBrainIcon}
                    loading="lazy"
                    alt=""
                    src="/solid-brain.svg"
                  />
                  <div className={styles.pricing}>Intelligent</div>
                </div>
                <div className={styles.tagMaster1}>
                  <img
                    className={styles.solidBrainIcon}
                    loading="lazy"
                    alt=""
                    src="/solid-stats.svg"
                  />
                  <div className={styles.pricing1}>Fast Response</div>
                </div>
                <button className={styles.tagMaster2}>
                  <img
                    className={styles.solidProcessorIcon}
                    alt=""
                    src="/solid-processor11.svg"
                  />
                  <div className={styles.pricing2}>Accurate</div>
                </button>
                <button className={styles.tagMaster3}>
                  <img
                    className={styles.solidGearIcon}
                    alt=""
                    src="/solid-gear.svg"
                  />
                  <div className={styles.pricing3}>+15 More</div>
                </button>
              </div>
            </div>
          </div>
          <img
            className={styles.image5Icon}
            loading="lazy"
            alt=""
            src="/image-5@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default AssistantDemo;
