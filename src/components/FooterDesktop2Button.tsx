import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FooterDesktop2Button.module.css";

export type FooterDesktop2ButtonType = {
  className?: string;
  buttonLabels?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  buttonBorder?: CSSProperties["border"];
};

const FooterDesktop2Button: FunctionComponent<FooterDesktop2ButtonType> = ({
  className = "",
  buttonLabels,
  propFlex,
  propMinWidth,
  buttonBorder,
}) => {
  const button1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      border: buttonBorder,
    };
  }, [propFlex, propMinWidth, buttonBorder]);

  return (
    <div className={[styles.button, className].join(" ")} style={button1Style}>
      <div className={styles.content}>
        <b className={styles.buttonLabels}>{buttonLabels}</b>
        <img
          className={styles.monotoneAddIcon}
          loading="lazy"
          alt=""
          src="/monotone-add-16.svg"
        />
      </div>
    </div>
  );
};

export default FooterDesktop2Button;
