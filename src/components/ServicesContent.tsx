import { FunctionComponent } from "react";
import ServicesContent2 from "./ServicesContent2";
import ServicesContent1 from "./ServicesContent1";
import styles from "./ServicesContent.module.css";

export type ServicesContentType = {
  className?: string;
};

const ServicesContent: FunctionComponent<ServicesContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <ServicesContent2 />
      <ServicesContent1 />
    </div>
  );
};

export default ServicesContent;
