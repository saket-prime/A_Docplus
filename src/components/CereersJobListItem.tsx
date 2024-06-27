import { FunctionComponent } from "react";
import styles from "./CereersJobListItem.module.css";

export type CereersJobListItemType = {
  className?: string;
  jobPosition?: string;
  docPlusTowerNY?: string;
  fullTime?: string;
};

const CereersJobListItem: FunctionComponent<CereersJobListItemType> = ({
  className = "",
  jobPosition,
  docPlusTowerNY,
  fullTime,
}) => {
  return (
    <div className={[styles.cereersJobListItem, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.jobInfo}>
          <div className={styles.jobTitleTags}>
            <div className={styles.jobPosition}>{jobPosition}</div>
            <div className={styles.tags}>
              <div className={styles.tagLabel}>engineer</div>
              <div className={styles.tagIcon}>
                <div className={styles.atom} />
              </div>
              <div className={styles.jobLocation}>$250k</div>
              <div className={styles.tagIcon}>
                <div className={styles.atom} />
              </div>
              <div className={styles.tagLabel}>full time</div>
            </div>
          </div>
        </div>
        <div className={styles.address}>
          <img
            className={styles.monotoneLocationIcon}
            alt=""
            src="/monotone-location.svg"
          />
          <div className={styles.docplusTowerNyFullContainer}>
            <p className={styles.docplusTowerNy}>{docPlusTowerNY}</p>
            <p className={styles.docplusTowerNy}>{fullTime}</p>
          </div>
        </div>
        <div className={styles.applyButton}>
          <div className={styles.buttonIconFab}>
            <img
              className={styles.monotoneAddIcon}
              alt=""
              src="/monotone-add24.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CereersJobListItem;
