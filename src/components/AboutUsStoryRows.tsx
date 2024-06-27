import { FunctionComponent } from "react";
import styles from "./AboutUsStoryRows.module.css";

export type AboutUsStoryRowsType = {
  className?: string;
  text?: string;
  milestoneTitle?: string;
  theJourneyOfDocPlusBegins?: string;
};

const AboutUsStoryRows: FunctionComponent<AboutUsStoryRowsType> = ({
  className = "",
  text,
  milestoneTitle,
  theJourneyOfDocPlusBegins,
}) => {
  return (
    <div className={[styles.ourStoryTimelineWrapper, className].join(" ")}>
      <div className={styles.ourStoryTimeline}>
        <div className={styles.text}>{text}</div>
        <div className={styles.buttonIconFab}>
          <img
            className={styles.monotoneAddIcon}
            alt=""
            src="/monotone-add-5.svg"
          />
        </div>
        <div className={styles.milestoneDescription}>
          <div className={styles.milestoneTitle}>{milestoneTitle}</div>
          <div className={styles.theJourneyOf}>{theJourneyOfDocPlusBegins}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsStoryRows;
