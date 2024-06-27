import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PlatformAppCard.module.css";

export type PlatformAppCardType = {
  className?: string;
  monotoneAdd?: string;
  heading?: string;
  paragraph?: string;
  pricing?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const PlatformAppCard: FunctionComponent<PlatformAppCardType> = ({
  className = "",
  monotoneAdd,
  heading,
  paragraph,
  pricing,
  propGap,
  propBackgroundColor,
}) => {
  const frame4Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const atom2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={[styles.frame, className].join(" ")} style={frame4Style}>
      <div className={styles.buttonIconFab}>
        <img
          className={styles.monotoneAddIcon}
          loading="lazy"
          alt=""
          src={monotoneAdd}
        />
      </div>
      <div className={styles.frame1}>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.paragraph}>{paragraph}</div>
      </div>
      <div className={styles.frame2}>
        <button className={styles.tagMaster}>
          <div className={styles.pricing}>{pricing}</div>
        </button>
        <div className={styles.frameWrapper}>
          <div className={styles.frame3}>
            <div className={styles.atom} />
            <div className={styles.atom} />
            <div className={styles.atom2} style={atom2Style} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformAppCard;
