import { FunctionComponent } from "react";
import ServicesCoreFeatures from "./ServicesCoreFeatures";
import styles from "./ServicesContent1.module.css";

export type ServicesContent1Type = {
  className?: string;
};

const ServicesContent1: FunctionComponent<ServicesContent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.section, className].join(" ")}>
      <ServicesCoreFeatures />
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
    </div>
  );
};

export default ServicesContent1;
