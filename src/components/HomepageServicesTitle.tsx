import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./HomepageServicesTitle.module.css";

export type HomepageServicesTitleType = {
  className?: string;
  pricing?: string;
  heading?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propAlignSelf1?: CSSProperties["alignSelf"];
};

const HomepageServicesTitle: FunctionComponent<HomepageServicesTitleType> = ({
  className = "",
  pricing,
  heading,
  propAlignSelf,
  propAlignSelf1,
}) => {
  const rowStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const headingStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  return (
    <div className={[styles.row, className].join(" ")} style={rowStyle}>
      <button className={styles.tagMaster}>
        <div className={styles.pricing}>{pricing}</div>
      </button>
      <h1 className={styles.heading} style={headingStyle}>
        {heading}
      </h1>
    </div>
  );
};

export default HomepageServicesTitle;
