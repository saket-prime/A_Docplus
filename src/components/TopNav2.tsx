import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TopNav2.module.css";

export type TopNav2Type = {
  className?: string;
  logoSquare?: string;

  /** Style props */
  frameDivTop?: CSSProperties["top"];
  frameDivPosition?: CSSProperties["position"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  frameDivHeight?: CSSProperties["height"];
  frameDivMarginLeft?: CSSProperties["marginLeft"];

  /** Action props */
  onTextClick?: () => void;
  onTextClick1?: () => void;
  onTextClick2?: () => void;
  onTextClick3?: () => void;
  onTextClick4?: () => void;
};

const TopNav2: FunctionComponent<TopNav2Type> = ({
  className = "",
  logoSquare,
  frameDivTop,
  frameDivPosition,
  frameDivAlignSelf,
  frameDivHeight,
  frameDivMarginLeft,
  onTextClick,
  onTextClick1,
  onTextClick2,
  onTextClick3,
  onTextClick4,
}) => {
  const topNav2Style: CSSProperties = useMemo(() => {
    return {
      top: frameDivTop,
      position: frameDivPosition,
      alignSelf: frameDivAlignSelf,
      height: frameDivHeight,
      marginLeft: frameDivMarginLeft,
    };
  }, [
    frameDivTop,
    frameDivPosition,
    frameDivAlignSelf,
    frameDivHeight,
    frameDivMarginLeft,
  ]);

  const navigate = useNavigate();

  const onLogoSquareImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header
      className={[styles.topNav, className].join(" ")}
      style={topNav2Style}
    >
      <div className={styles.navLeft}>
        <div className={styles.navAtomContainer}>
          <div className={styles.atomWrapper}>
            <div className={styles.atom} />
          </div>
          <nav className={styles.frame}>
            <a className={styles.text}>Home</a>
            <a className={styles.text1}>Services</a>
            <a className={styles.text2} onClick={onTextClick1}>
              Platform
            </a>
          </nav>
        </div>
      </div>
      <img
        className={styles.logoSquareIcon}
        loading="lazy"
        alt=""
        src={logoSquare}
        onClick={onLogoSquareImageClick}
      />
      <nav className={styles.navRight}>
        <nav className={styles.frame1}>
          <a className={styles.navRightContent} onClick={onTextClick2}>
            About Us
          </a>
          <a className={styles.navRightContent1} onClick={onTextClick3}>
            Resources
          </a>
          <a className={styles.navRightContent2} onClick={onTextClick4}>
            Contact
          </a>
        </nav>
      </nav>
    </header>
  );
};

export default TopNav2;
