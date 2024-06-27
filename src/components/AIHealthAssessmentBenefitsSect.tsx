import { FunctionComponent } from "react";
import AIHealthAssessmentBenefitConte from "./AIHealthAssessmentBenefitConte";
import styles from "./AIHealthAssessmentBenefitsSect.module.css";

export type AIHealthAssessmentBenefitsSectType = {
  className?: string;
};

const AIHealthAssessmentBenefitsSect: FunctionComponent<
  AIHealthAssessmentBenefitsSectType
> = ({ className = "" }) => {
  return (
    <section className={[styles.benefitsSection, className].join(" ")}>
      <div className={styles.container}>
        <AIHealthAssessmentBenefitConte />
      </div>
    </section>
  );
};

export default AIHealthAssessmentBenefitsSect;
