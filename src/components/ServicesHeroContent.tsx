import { FunctionComponent } from "react";
import styles from "./ServicesHeroContent.module.css";

export type ServicesHeroContentType = {
  className?: string;
};

const ServicesHeroContent: FunctionComponent<ServicesHeroContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.tagMaster}>
        <div className={styles.pricing}>Our Purpose</div>
      </div>
      <div className={styles.weEmpowerYourContainer}>
        <span>{`We Empower Your Health with `}</span>
        <span className={styles.aiml}>AI/ML.</span>
      </div>
      <div className={styles.button}>
        <div className={styles.videoButton}>
          <b className={styles.text}>Learn More</b>
          <img
            className={styles.monotoneAddIcon}
            alt=""
            src="/monotone-add1.svg"
          />
        </div>
      </div>
      <div className={styles.content2}>
        <div className={styles.frame}>
          <b className={styles.scrollDown}>Scroll Down</b>
          <img
            className={styles.solidDoubleChevronDown}
            alt=""
            src="/solid-double-chevron-down.svg"
          />
        </div>
        <div className={styles.heroVideo}>
          <div className={styles.videoButton}>
            <div className={styles.buttonIconFab}>
              <img
                className={styles.monotoneAddIcon1}
                alt=""
                src="/monotone-add18.svg"
              />
            </div>
            <b className={styles.playVideo}>Play Video</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHeroContent;
