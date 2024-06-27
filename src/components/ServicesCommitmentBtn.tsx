import { FunctionComponent } from "react";
import styles from "./ServicesCommitmentBtn.module.css";

export type ServicesCommitmentBtnType = {
  className?: string;
};

const ServicesCommitmentBtn: FunctionComponent<ServicesCommitmentBtnType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.whoWeServeButton, className].join(" ")}>
      <div className={styles.button}>
        <div className={styles.content}>
          <b className={styles.text}>Learn More</b>
          <img
            className={styles.monotoneAddIcon}
            alt=""
            src="/monotone-add6.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesCommitmentBtn;
