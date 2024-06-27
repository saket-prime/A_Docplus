import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CareerJobOpeningsDropdown.module.css";

export type CareerJobOpeningsDropdownType = {
  className?: string;
  name1?: string;
  monotoneGenderMale?: string;
  loremusIpsumusD?: string;

  /** Style props */
  propOverflow?: CSSProperties["overflow"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const CareerJobOpeningsDropdown: FunctionComponent<
  CareerJobOpeningsDropdownType
> = ({
  className = "",
  name1,
  monotoneGenderMale,
  loremusIpsumusD,
  propOverflow,
  propDisplay,
  propMinWidth,
}) => {
  const monotoneGenderMaleStyle: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const loremusIpsumusDStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={[styles.inputText, className].join(" ")}>
      <div className={styles.name}>{name1}</div>
      <div className={styles.content}>
        <div className={styles.text}>
          <img
            className={styles.monotoneGenderMale}
            alt=""
            src={monotoneGenderMale}
            style={monotoneGenderMaleStyle}
          />
          <div className={styles.loremusIpsumusD} style={loremusIpsumusDStyle}>
            {loremusIpsumusD}
          </div>
        </div>
        <img className={styles.solidEyeIcon} alt="" src="/solid-eye-4.svg" />
      </div>
    </div>
  );
};

export default CareerJobOpeningsDropdown;
