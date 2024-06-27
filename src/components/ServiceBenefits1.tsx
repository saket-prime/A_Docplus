import { FunctionComponent } from "react";
import styles from "./ServiceBenefits1.module.css";

export type ServiceBenefits1Type = {
  className?: string;
};

const ServiceBenefits1: FunctionComponent<ServiceBenefits1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.serviceBenefitsContent, className].join(" ")}>
      <div className={styles.serviceBenefitsHeader}>
        <div className={styles.tagMaster}>
          <div className={styles.pricing}>Our Specialty</div>
        </div>
        <div className={styles.serviceBenefits}>Service Benefits</div>
        <div className={styles.weOfferA}>
          We offer a variety of specialty care services, so you can get the care
          you need from a specialist who is an expert in their field.
        </div>
      </div>
    </div>
  );
};

export default ServiceBenefits1;
