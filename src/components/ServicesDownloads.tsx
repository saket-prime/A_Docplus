import { FunctionComponent } from "react";
import ServicesDownloadContent from "./ServicesDownloadContent";
import styles from "./ServicesDownloads.module.css";

export type ServicesDownloadsType = {
  className?: string;
};

const ServicesDownloads: FunctionComponent<ServicesDownloadsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.ctaSectionWrapper, className].join(" ")}>
      <div className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <img className={styles.sectionIcon} alt="" src="/section@2x.png" />
            <ServicesDownloadContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDownloads;
