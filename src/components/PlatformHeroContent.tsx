import { FunctionComponent } from "react";
import styles from "./PlatformHeroContent.module.css";

export type PlatformHeroContentType = {
  className?: string;
};

const PlatformHeroContent: FunctionComponent<PlatformHeroContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.heroContent, className].join(" ")}>
      <div className={styles.group}>
        <div className={styles.text}>
          <p className={styles.sayGoodbyeTo}>
            Say goodbye to the era of digital healthcare.
          </p>
          <p className={styles.sayGoodbyeTo}>
            Because healthcare AI 3.0 is here!
          </p>
        </div>
        <div className={styles.assets}>
          <img className={styles.dAssetIcon} alt="" src="/d-asset4@2x.png" />
          <img
            className={styles.dAssetIcon1}
            loading="lazy"
            alt=""
            src="/d-asset-11@2x.png"
          />
          <div className={styles.vector} />
          <img
            className={styles.dashboardIcon}
            alt=""
            src="/dashboard@2x.png"
          />
        </div>
      </div>
      <h1 className={styles.introducingDocplus}>Introducing docplus 4.0</h1>
    </div>
  );
};

export default PlatformHeroContent;
