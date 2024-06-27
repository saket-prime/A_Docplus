import { FunctionComponent } from "react";
import styles from "./AssistantDownload.module.css";

export type AssistantDownloadType = {
  className?: string;
};

const AssistantDownload: FunctionComponent<AssistantDownloadType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.containerWrapper, className].join(" ")}>
      <div className={styles.container}>
        <img className={styles.groupIcon} alt="" src="/group1@2x.png" />
        <h2 className={styles.getStartedFor}>Get Started For Free!</h2>
        <div className={styles.startYourExperience}>
          Start your experience with DocPlus for free and explore a world of
          personalized care, innovative tools, and expert guidance for everyone,
          right now.
        </div>
        <img
          className={styles.appStoreDownloadBadge}
          loading="lazy"
          alt=""
          src="/app-store-download-badge.svg"
        />
        <img
          className={styles.appStoreDownloadBadge1}
          loading="lazy"
          alt=""
          src="/app-store-download-badge-1.svg"
        />
      </div>
    </section>
  );
};

export default AssistantDownload;
