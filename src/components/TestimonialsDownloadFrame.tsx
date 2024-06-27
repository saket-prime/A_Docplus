import { FunctionComponent } from "react";
import styles from "./TestimonialsDownloadFrame.module.css";

export type TestimonialsDownloadFrameType = {
  className?: string;
};

const TestimonialsDownloadFrame: FunctionComponent<
  TestimonialsDownloadFrameType
> = ({ className = "" }) => {
  return (
    <section className={[styles.containerWrapper, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.section}>
          <img className={styles.mockupIcon} alt="" src="/mockup2@2x.png" />
          <img
            className={styles.componentIcon}
            loading="lazy"
            alt=""
            src="/component@2x.png"
          />
          <img
            className={styles.componentIcon1}
            alt=""
            src="/component-1@2x.png"
          />
          <img
            className={styles.asklepiosScoreOverview}
            loading="lazy"
            alt=""
            src="/asklepios-score-overview@2x.png"
          />
        </div>
        <div className={styles.downloadContainerWrapper}>
          <div className={styles.downloadContainer}>
            <div className={styles.downloadContent}>
              <h2 className={styles.getYourHealth}>
                Get Your Health Personalized With AI!
              </h2>
              <div className={styles.letsDownloadThe}>
                Let’s download the docplus app and get healthy as soon as
                possible and live to 120 years old.
              </div>
            </div>
            <div className={styles.downloadBadges}>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsDownloadFrame;
