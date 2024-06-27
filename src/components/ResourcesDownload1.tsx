import { FunctionComponent } from "react";
import styles from "./ResourcesDownload1.module.css";

export type ResourcesDownload1Type = {
  className?: string;
};

const ResourcesDownload1: FunctionComponent<ResourcesDownload1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.downloadCallToAction, className].join(" ")}>
      <div className={styles.frame}>
        <h1 className={styles.downloadAppTo}>
          Download App to Gain More Insight
        </h1>
        <div className={styles.orSubscribeTo}>
          Or subscribe to our newsletter to receive weekly article
          recommendations.
        </div>
        <button className={styles.button}>
          <div className={styles.content}>
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
  );
};

export default ResourcesDownload1;
