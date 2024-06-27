import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FAQHelpCard.module.css";

export type FAQHelpCardType = {
  className?: string;
  monotoneAdd?: string;
  helpCenter?: string;
  monotoneAdd1?: string;

  /** Style props */
  monotoneAddIconBackgroundColor?: CSSProperties["backgroundColor"];
  monotoneAddIconColor?: CSSProperties["color"];
};

const FAQHelpCard: FunctionComponent<FAQHelpCardType> = ({
  className = "",
  monotoneAdd,
  helpCenter,
  monotoneAdd1,
  monotoneAddIconBackgroundColor,
  monotoneAddIconColor,
}) => {
  const frame1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: monotoneAddIconBackgroundColor,
    };
  }, [monotoneAddIconBackgroundColor]);

  const helpCenterStyle: CSSProperties = useMemo(() => {
    return {
      color: monotoneAddIconColor,
    };
  }, [monotoneAddIconColor]);

  return (
    <div className={[styles.frame, className].join(" ")} style={frame1Style}>
      <img className={styles.monotoneAddIcon} alt="" src={monotoneAdd} />
      <div className={styles.companyInfo}>
        <div className={styles.helpCenter} style={helpCenterStyle}>
          {helpCenter}
        </div>
        <img className={styles.monotoneAddIcon1} alt="" src={monotoneAdd1} />
      </div>
    </div>
  );
};

export default FAQHelpCard;
