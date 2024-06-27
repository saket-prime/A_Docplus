import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AboutUsBtn.module.css";

export type AboutUsBtnType = {
  className?: string;
  text?: string;
  monotoneAdd?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  textColor?: CSSProperties["color"];
  textDisplay?: CSSProperties["display"];
  textMinWidth?: CSSProperties["minWidth"];
};

const AboutUsBtn: FunctionComponent<AboutUsBtnType> = ({
  className = "",
  text,
  propBackgroundColor,
  textColor,
  textDisplay,
  textMinWidth,
  monotoneAdd,
}) => {
  const button2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const text1Style: CSSProperties = useMemo(() => {
    return {
      color: textColor,
      display: textDisplay,
      minWidth: textMinWidth,
    };
  }, [textColor, textDisplay, textMinWidth]);

  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/testimonials");
  }, [navigate]);

  return (
    <button
      className={[styles.button, className].join(" ")}
      onClick={onButtonClick}
      style={button2Style}
    >
      <div className={styles.content}>
        <b className={styles.text} style={text1Style}>
          {text}
        </b>
        <img className={styles.monotoneAddIcon} alt="" src={monotoneAdd} />
      </div>
    </button>
  );
};

export default AboutUsBtn;
