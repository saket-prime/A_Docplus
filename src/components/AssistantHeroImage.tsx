import { FunctionComponent } from "react";
import styles from "./AssistantHeroImage.module.css";

export type AssistantHeroImageType = {
  className?: string;
};

const AssistantHeroImage: FunctionComponent<AssistantHeroImageType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.containerWrapper, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.group}>
          <img
            className={styles.mockupIcon}
            loading="lazy"
            alt=""
            src="/mockup@2x.png"
          />
          <img className={styles.frameIcon} alt="" src="/frame11@2x.png" />
          <img className={styles.mockupIcon1} alt="" src="/mockup-1@2x.png" />
          <img className={styles.mockupIcon2} alt="" src="/mockup-2@2x.png" />
          <img className={styles.mockupIcon3} alt="" src="/mockup-3@2x.png" />
        </div>
      </div>
    </section>
  );
};

export default AssistantHeroImage;
