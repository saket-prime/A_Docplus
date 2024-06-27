import { FunctionComponent } from "react";
import styles from "./ResourcesDownload2.module.css";

export type ResourcesDownload2Type = {
  className?: string;
};

const ResourcesDownload2: FunctionComponent<ResourcesDownload2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frame, className].join(" ")}>
      <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
      <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
    </div>
  );
};

export default ResourcesDownload2;
