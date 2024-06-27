import { FunctionComponent } from "react";
import styles from "./PlatformMobileIntroCard2.module.css";

export type PlatformMobileIntroCard2Type = {
  className?: string;
  monotoneAdd?: string;
  heading?: string;
};

const PlatformMobileIntroCard2: FunctionComponent<
  PlatformMobileIntroCard2Type
> = ({ className = "", monotoneAdd, heading }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.atomWrapper}>
        <div className={styles.atom} />
      </div>
      <div className={styles.platformAppFeatures}>
        <div className={styles.buttonIconFab}>
          <img
            className={styles.monotoneAddIcon}
            loading="lazy"
            alt=""
            src={monotoneAdd}
          />
        </div>
        <b className={styles.heading}>{heading}</b>
      </div>
    </div>
  );
};

export default PlatformMobileIntroCard2;
