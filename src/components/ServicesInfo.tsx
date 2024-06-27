import { FunctionComponent } from "react";
import ServicesInfoContent from "./ServicesInfoContent";
import styles from "./ServicesInfo.module.css";

export type ServicesInfoType = {
  className?: string;
};

const ServicesInfo: FunctionComponent<ServicesInfoType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.services, className].join(" ")}>
      <div className={styles.servicesSection}>
        <div className={styles.container}>
          <ServicesInfoContent />
        </div>
      </div>
    </div>
  );
};

export default ServicesInfo;
