import { FunctionComponent } from "react";
import AIHealthAssessmentContent from "./AIHealthAssessmentContent";
import AboutUsBtn from "./AboutUsBtn";
import styles from "./AIHealthAssessmentSection.module.css";

export type AIHealthAssessmentSectionType = {
  className?: string;
};

const AIHealthAssessmentSection: FunctionComponent<
  AIHealthAssessmentSectionType
> = ({ className = "" }) => {
  return (
    <section className={[styles.assessmentSection, className].join(" ")}>
      <div className={styles.assessmentContainer}>
        <AIHealthAssessmentContent />
        <AboutUsBtn
          text="Submit Assessment"
          propBackgroundColor="#8a3ffc"
          textColor="#fff"
          textDisplay="unset"
          textMinWidth="unset"
          monotoneAdd="/monotone-add1.svg"
        />
      </div>
    </section>
  );
};

export default AIHealthAssessmentSection;
