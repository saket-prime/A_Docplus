import { FunctionComponent } from "react";
import ServicesInfoContent1 from "./ServicesInfoContent1";
import styles from "./ServicesInfoContent.module.css";

export type ServicesInfoContentType = {
  className?: string;
};

const ServicesInfoContent: FunctionComponent<ServicesInfoContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <img className={styles.colIcon} alt="" src="/col@2x.png" />
      <ServicesInfoContent1 />
    </div>
  );
};

export default ServicesInfoContent;
