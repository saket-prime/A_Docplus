import { FunctionComponent } from "react";
import styles from "./HomepageDwnldButton.module.css";

export type HomepageDwnldButtonType = {
  className?: string;
  text?: string;
};

const HomepageDwnldButton: FunctionComponent<HomepageDwnldButtonType> = ({
  className = "",
  text,
}) => {
  return (
    <button className={[styles.buttonRow, className].join(" ")}>
      <div className={styles.button}>
        <div className={styles.content}>
          <b className={styles.text}>{text}</b>
          <img
            className={styles.monotoneAddIcon}
            alt=""
            src="/monotone-add-161.svg"
          />
        </div>
      </div>
    </button>
  );
};

export default HomepageDwnldButton;
