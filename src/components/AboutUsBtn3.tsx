import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AboutUsBtn3.module.css";

export type AboutUsBtn3Type = {
  className?: string;
  buttonLabel?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const AboutUsBtn3: FunctionComponent<AboutUsBtn3Type> = ({
  className = "",
  buttonLabel,
  propMinWidth,
}) => {
  const text2Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <button className={[styles.button, className].join(" ")}>
      <div className={styles.content}>
        <b className={styles.text} style={text2Style}>
          {buttonLabel}
        </b>
        <img
          className={styles.monotoneAddIcon}
          alt=""
          src="/monotone-add-211.svg"
        />
      </div>
    </button>
  );
};

export default AboutUsBtn3;
