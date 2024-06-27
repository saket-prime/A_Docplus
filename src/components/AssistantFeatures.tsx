import { FunctionComponent } from "react";
import AssistantFeaturesCards from "./AssistantFeaturesCards";
import styles from "./AssistantFeatures.module.css";

export type AssistantFeaturesType = {
  className?: string;
};

const AssistantFeatures: FunctionComponent<AssistantFeaturesType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.containerWrapper, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <div className={styles.frame}>
              <div className={styles.tagMaster}>
                <div className={styles.pricing}>Health Revolution 4.0</div>
              </div>
              <div className={styles.frame1}>
                <h1 className={styles.aiHealthAssistant}>
                  AI Health Assistant Features
                </h1>
                <div className={styles.benefitFromEvidencebased}>
                  Benefit from evidence-based insights derived from AI analysis
                  of your health metrics and historical data.
                </div>
              </div>
            </div>
            <div className={styles.tabGroupText}>
              <div className={styles.tabSingle}>
                <b className={styles.a}>For Physician</b>
              </div>
              <button className={styles.tabSingle1}>
                <b className={styles.a1}>For Individual</b>
              </button>
              <div className={styles.tabSingle2}>
                <b className={styles.a2}>1 Month</b>
              </div>
              <div className={styles.tabSingle3}>
                <b className={styles.a2}>1 Year</b>
              </div>
              <div className={styles.tabSingle4}>
                <b className={styles.a4}>For Pharmacy</b>
              </div>
            </div>
          </div>
          <img
            className={styles.image2Icon}
            loading="lazy"
            alt=""
            src="/image-2@2x.png"
          />
          <div className={styles.section1}>
            <AssistantFeaturesCards
              monotoneAdd="/monotone-add-51.svg"
              empatheticInteraction="Empathetic Interaction"
              engageInNaturalAndInforma="Engage in natural and informative conversations with our AI Health Assistant. Ask questions about your health."
            />
            <AssistantFeaturesCards
              monotoneAdd="/monotone-add-7.svg"
              empatheticInteraction="Natural Language Understanding"
              engageInNaturalAndInforma="Engage in natural and informative conversations with the AI Health Assistant, making it easy."
              propOverflow="hidden"
            />
            <AssistantFeaturesCards
              monotoneAdd="/monotone-add-91.svg"
              empatheticInteraction="Proactive Health Insights"
              engageInNaturalAndInforma="Benefit from proactive health insights derived from AI-driven predictive analytics  every single day."
              propOverflow="unset"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssistantFeatures;
