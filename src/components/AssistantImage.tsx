import { FunctionComponent } from "react";
import styles from "./AssistantImage.module.css";

export type AssistantImageType = {
  className?: string;
};

const AssistantImage: FunctionComponent<AssistantImageType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.separator, className].join(" ")}>
      <div className={styles.deviceImagePair}>
        <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
        <img
          className={styles.image4Icon}
          loading="lazy"
          alt=""
          src="/image-4@2x.png"
        />
      </div>
    </div>
  );
};

export default AssistantImage;
