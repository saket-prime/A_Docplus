import { FunctionComponent } from "react";
import ServicesContent from "./ServicesContent";
import styles from "./ServicesCore.module.css";

export type ServicesCoreType = {
  className?: string;
};

const ServicesCore: FunctionComponent<ServicesCoreType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.whyUsSection, className].join(" ")}>
      <div className={styles.container}>
        <ServicesContent />
      </div>
    </div>
  );
};

export default ServicesCore;
