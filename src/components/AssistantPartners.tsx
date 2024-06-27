import { FunctionComponent } from "react";
import styles from "./AssistantPartners.module.css";

export type AssistantPartnersType = {
  className?: string;
};

const AssistantPartners: FunctionComponent<AssistantPartnersType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.trustedByBig}>
        Trusted by 100+ big companies throughout worldwide.
      </div>
      <div className={styles.companyLogos}>
        <img
          className={styles.companyLogoHealthcare}
          loading="lazy"
          alt=""
          src="/company-logo-healthcare.svg"
        />
        <img
          className={styles.companyLogoHealthcare1}
          loading="lazy"
          alt=""
          src="/company-logo-healthcare-1.svg"
        />
        <img
          className={styles.companyLogoHealthcare2}
          loading="lazy"
          alt=""
          src="/company-logo-healthcare-2.svg"
        />
        <img
          className={styles.companyLogoHealthcare1}
          loading="lazy"
          alt=""
          src="/company-logo-healthcare-3.svg"
        />
        <img
          className={styles.companyLogoHealthcare1}
          loading="lazy"
          alt=""
          src="/company-logo-healthcare-4.svg"
        />
        <img
          className={styles.companyLogoHealthcare5}
          alt=""
          src="/company-logo-healthcare-5@2x.png"
        />
        <img
          className={styles.companyLogoHealthcare1}
          loading="lazy"
          alt=""
          src="/company-logo-healthcare.svg"
        />
        <img
          className={styles.companyLogoHealthcare1}
          loading="lazy"
          alt=""
          src="/company-logo-healthcare-7.svg"
        />
        <img
          className={styles.companyLogoHealthcare1}
          loading="lazy"
          alt=""
          src="/company-logo-healthcare-8.svg"
        />
      </div>
      <div className={styles.progressBarWrapper}>
        <div className={styles.progressBar}>
          <div className={styles.progressBarAtom} />
          <div className={styles.atom} />
          <div className={styles.atom} />
          <div className={styles.atom} />
          <div className={styles.atom} />
        </div>
      </div>
    </div>
  );
};

export default AssistantPartners;
