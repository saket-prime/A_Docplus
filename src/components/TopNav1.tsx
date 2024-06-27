import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TopNav1.module.css";

export type TopNav1Type = {
  className?: string;

  /** Style props */
  buttonIconFABFlex?: CSSProperties["flex"];
  buttonIconFABPosition?: CSSProperties["position"];
  buttonIconFABTop?: CSSProperties["top"];
  buttonIconFABLeft?: CSSProperties["left"];
  buttonIconFABWidth?: CSSProperties["width"];
};

const TopNav1: FunctionComponent<TopNav1Type> = ({
  className = "",
  buttonIconFABFlex,
  buttonIconFABPosition,
  buttonIconFABTop,
  buttonIconFABLeft,
  buttonIconFABWidth,
}) => {
  const topNav1Style: CSSProperties = useMemo(() => {
    return {
      flex: buttonIconFABFlex,
      position: buttonIconFABPosition,
      top: buttonIconFABTop,
      left: buttonIconFABLeft,
      width: buttonIconFABWidth,
    };
  }, [
    buttonIconFABFlex,
    buttonIconFABPosition,
    buttonIconFABTop,
    buttonIconFABLeft,
    buttonIconFABWidth,
  ]);

  return (
    <div className={[styles.topNav, className].join(" ")} style={topNav1Style}>
      <img
        className={styles.logoSquareIcon}
        loading="lazy"
        alt=""
        src="/logo-square2.svg"
      />
      <div className={styles.heroAddButton}>
        <div className={styles.buttonIconFab}>
          <img
            className={styles.monotoneAddIcon}
            loading="lazy"
            alt=""
            src="/monotone-add14.svg"
          />
        </div>
        <div className={styles.buttonIconFab}>
          <img
            className={styles.monotoneAddIcon}
            loading="lazy"
            alt=""
            src="/monotone-add-1.svg"
          />
        </div>
        <button className={styles.button}>
          <div className={styles.content}>
            <a className={styles.text}>Menu</a>
            <div className={styles.monotoneAdd}>
              <div className={styles.vector} />
              <div className={styles.vector1} />
              <div className={styles.vector2} />
              <div className={styles.vector3} />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default TopNav1;
