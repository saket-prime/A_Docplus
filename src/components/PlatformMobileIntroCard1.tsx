import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PlatformMobileIntroCard1.module.css";

export type PlatformMobileIntroCard1Type = {
  className?: string;
  heading?: string;

  /** Style props */
  propOverflow?: CSSProperties["overflow"];
};

const PlatformMobileIntroCard1: FunctionComponent<
  PlatformMobileIntroCard1Type
> = ({ className = "", heading, propOverflow }) => {
  const monotoneAdd1Style: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div className={[styles.frame, className].join(" ")}>
      <div className={styles.frame1}>
        <div className={styles.buttonIconFab}>
          <input
            className={styles.monotoneAdd}
            type="checkbox"
            style={monotoneAdd1Style}
          />
        </div>
        <b className={styles.heading}>{heading}</b>
      </div>
      <div className={styles.secondGridItem}>
        <div className={styles.atom} />
      </div>
    </div>
  );
};

export default PlatformMobileIntroCard1;
