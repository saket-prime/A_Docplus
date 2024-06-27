import { FunctionComponent } from "react";
import AIHealthAssessmentForm from "./AIHealthAssessmentForm";
import styles from "./AIHealthAssessmentContent.module.css";

export type AIHealthAssessmentContentType = {
  className?: string;
};

const AIHealthAssessmentContent: FunctionComponent<
  AIHealthAssessmentContentType
> = ({ className = "" }) => {
  return (
    <div className={[styles.assessmentContent, className].join(" ")}>
      <div className={styles.assessmentHeader}>
        <img
          className={styles.monotoneAddIcon}
          loading="lazy"
          alt=""
          src="/monotone-add-23.svg"
        />
        <h1 className={styles.docplusAiHealth}>DocPlus AI Health Assessment</h1>
      </div>
      <AIHealthAssessmentForm />
    </div>
  );
};

export default AIHealthAssessmentContent;
