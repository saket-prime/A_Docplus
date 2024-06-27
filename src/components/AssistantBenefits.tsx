import { FunctionComponent } from "react";
import AssistantRow from "./AssistantRow";
import styles from "./AssistantBenefits.module.css";

export type AssistantBenefitsType = {
  className?: string;
};

const AssistantBenefits: FunctionComponent<AssistantBenefitsType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.assistantWrapper, className].join(" ")}>
      <div className={styles.assistant}>
        <div className={styles.assistantInfo}>
          <div className={styles.tagMaster}>
            <div className={styles.pricing}>Our Core Benefits</div>
          </div>
          <div className={styles.assistantTitle}>
            <h2 className={styles.intuitiveWellnessAi}>
              Intuitive Wellness AI Assistant
            </h2>
            <div className={styles.benefitFromEvidencebased}>
              Benefit from evidence-based insights derived from AI analysis of
              your health metrics and historical data.
            </div>
          </div>
        </div>
        <AssistantRow />
      </div>
    </section>
  );
};

export default AssistantBenefits;
