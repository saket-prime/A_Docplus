import { FunctionComponent } from "react";
import ServicesCommitmentTitle from "./ServicesCommitmentTitle";
import ServicesCommitmentCards from "./ServicesCommitmentCards";
import ServicesCommitmentBtn from "./ServicesCommitmentBtn";
import styles from "./ServicesCommitment.module.css";

export type ServicesCommitmentType = {
  className?: string;
};

const ServicesCommitment: FunctionComponent<ServicesCommitmentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.whoWeServeContainerWrapper, className].join(" ")}>
      <div className={styles.whoWeServeContainer}>
        <ServicesCommitmentTitle />
        <ServicesCommitmentCards />
        <ServicesCommitmentBtn />
      </div>
    </div>
  );
};

export default ServicesCommitment;
