import { FunctionComponent } from "react";
import styles from "./ServicesContent2.module.css";

export type ServicesContent2Type = {
  className?: string;
};

const ServicesContent2: FunctionComponent<ServicesContent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.section, className].join(" ")}>
      <div className={styles.tagMaster}>
        <div className={styles.pricing}>Our Core Services</div>
      </div>
      <div className={styles.reasonTitle}>
        <div className={styles.whyChooseOur}>Why choose our service?</div>
        <div className={styles.discoverANew}>
          Discover a new era of personalized health and wellness with Asclepios.
          Our services are meticulously designed to empower you on a holistic
          journey towards optimal well-being with the power of machine learning.
        </div>
      </div>
    </div>
  );
};

export default ServicesContent2;
