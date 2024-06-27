import { FunctionComponent } from "react";
import AIHealthAssessmentBenefitCards from "./AIHealthAssessmentBenefitCards";
import styles from "./AIHealthAssessmentBenefitConte.module.css";

export type AIHealthAssessmentBenefitConteType = {
  className?: string;
};

const AIHealthAssessmentBenefitConte: FunctionComponent<
  AIHealthAssessmentBenefitConteType
> = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.section}>
        <button className={styles.tagMaster}>
          <div className={styles.pricing}>Our Benefits</div>
        </button>
        <div className={styles.benefitsTitleContainer}>
          <h1 className={styles.getHealthyWith}>
            Get Healthy With Our AI Health Assistant.
          </h1>
          <div className={styles.stayOnTop}>
            Stay on top of your medication schedule effortlessly. Our Medication
            Management service includes timely reminders, dosage tracking, and
            prescription management.
          </div>
        </div>
      </div>
      <AIHealthAssessmentBenefitCards />
    </div>
  );
};

export default AIHealthAssessmentBenefitConte;
