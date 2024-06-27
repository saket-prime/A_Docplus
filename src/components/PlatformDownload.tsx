import { FunctionComponent } from "react";
import styles from "./PlatformDownload.module.css";

export type PlatformDownloadType = {
  className?: string;
};

const PlatformDownload: FunctionComponent<PlatformDownloadType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.ctaSectionWrapper, className].join(" ")}>
      <div className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.callToActionWrapper}>
            <img
              className={styles.callToActionSpacing}
              loading="lazy"
              alt=""
              src="/frame-31@2x.png"
            />
            <div className={styles.content}>
              <h1 className={styles.downloadItFor}>
                Download it For Free, Right Now!
              </h1>
              <div className={styles.downloadDescription}>
                <div className={styles.paragraph}>
                  Well? What do you waiting for? Let’s get healthy as soon as
                  possible.
                </div>
                <button className={styles.button}>
                  <div className={styles.content1}>
                    <b className={styles.text}>Download The App</b>
                    <img
                      className={styles.monotoneAddIcon}
                      alt=""
                      src="/monotone-add11.svg"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformDownload;
