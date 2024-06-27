import { FunctionComponent, useCallback } from "react";
import styles from "./AboutUsBtn2.module.css";

export type AboutUsBtn2Type = {
  className?: string;
};

const AboutUsBtn2: FunctionComponent<AboutUsBtn2Type> = ({
  className = "",
}) => {
  const onButtonClick = useCallback(() => {
    // Please sync "Contact Us (Desktop)" to the project
  }, []);

  return (
    <button
      className={[styles.button, className].join(" ")}
      onClick={onButtonClick}
    >
      <div className={styles.content}>
        <b className={styles.text}>Get In Touch</b>
        <img
          className={styles.monotoneAddIcon}
          alt=""
          src="/monotone-add-5.svg"
        />
      </div>
    </button>
  );
};

export default AboutUsBtn2;
