import { FunctionComponent } from "react";
import ServiceBenefits1 from "./ServiceBenefits1";
import ServicesBenefits from "./ServicesBenefits";
import styles from "./ServiceBenefits.module.css";

export type ServiceBenefitsType = {
  className?: string;
};

const ServiceBenefits: FunctionComponent<ServiceBenefitsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.serviceBenefits, className].join(" ")}>
      <div className={styles.container}>
        <ServiceBenefits1 />
        <ServicesBenefits />
      </div>
    </div>
  );
};

export default ServiceBenefits;
