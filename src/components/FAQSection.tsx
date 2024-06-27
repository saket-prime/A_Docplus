import { FunctionComponent } from "react";
import FAQContent from "./FAQContent";
import styles from "./FAQSection.module.css";

export type FAQSectionType = {
  className?: string;
};

const FAQSection: FunctionComponent<FAQSectionType> = ({ className = "" }) => {
  return (
    <div className={[styles.faqSection, className].join(" ")}>
      <div className={styles.container}>
        <FAQContent />
      </div>
    </div>
  );
};

export default FAQSection;
