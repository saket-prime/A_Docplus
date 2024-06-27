import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AboutUsValuesCard.module.css";

export type AboutUsValuesCardType = {
  className?: string;
  monotoneAdd?: string;
  heading?: string;
  text?: string;

  /** Style props */
  propOverflow?: CSSProperties["overflow"];
};

const AboutUsValuesCard: FunctionComponent<AboutUsValuesCardType> = ({
  className = "",
  monotoneAdd,
  heading,
  text,
  propOverflow,
}) => {
  const monotoneAddIcon7Style: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div className={[styles.aboutUsCoreValues, className].join(" ")}>
      <div className={styles.buttonIconFab}>
        <img
          className={styles.monotoneAddIcon}
          alt=""
          src={monotoneAdd}
          style={monotoneAddIcon7Style}
        />
      </div>
      <div className={styles.headingText}>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

export default AboutUsValuesCard;
