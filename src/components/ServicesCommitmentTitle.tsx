import { FunctionComponent } from "react";
import styles from "./ServicesCommitmentTitle.module.css";

export type ServicesCommitmentTitleType = {
  className?: string;
};

const ServicesCommitmentTitle: FunctionComponent<
  ServicesCommitmentTitleType
> = ({ className = "" }) => {
  return (
    <div className={[styles.whoWeServeContent, className].join(" ")}>
      <div className={styles.whoWeServeHeader}>
        <div className={styles.labelMain}>
          <div className={styles.whoWeServeTitleIcon}>
            <div className={styles.atom} />
          </div>
          <b className={styles.clientTitle}>Our Commitment</b>
        </div>
        <div className={styles.whoWeServe}>Who We Serve</div>
      </div>
      <div className={styles.weAreCommitted}>
        We are committed to revolutionizing the healthcare experience through
        the power of AI and personalized solutions. We serve many areas of
        industry, from patients to providers alike.
      </div>
    </div>
  );
};

export default ServicesCommitmentTitle;
