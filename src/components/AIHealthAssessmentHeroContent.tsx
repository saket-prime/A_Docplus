import { FunctionComponent } from "react";
import styles from "./AIHealthAssessmentHeroContent.module.css";

export type AIHealthAssessmentHeroContentType = {
  className?: string;
};

const AIHealthAssessmentHeroContent: FunctionComponent<
  AIHealthAssessmentHeroContentType
> = ({ className = "" }) => {
  return (
    <div className={[styles.heroContent, className].join(" ")}>
      <div className={styles.heroHeadingParent}>
        <div className={styles.heroHeading}>
          <h1 className={styles.smartAiHealth}>Smart AI Health Assessment</h1>
          <div
            className={styles.atDocplusWere}
          >{`At DocPlus, we're dedicated to harnessing the power of artificial intelligence to transform health. `}</div>
        </div>
        <div className={styles.playVideoBtn}>
          <div className={styles.buttonIconFab}>
            <img
              className={styles.monotoneAddIcon}
              loading="lazy"
              alt=""
              src="/monotone-add18.svg"
            />
          </div>
          <b className={styles.playVideo}>Play Video</b>
        </div>
      </div>
    </div>
  );
};

export default AIHealthAssessmentHeroContent;
