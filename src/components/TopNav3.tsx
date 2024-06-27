import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TopNav3.module.css";

export type TopNav3Type = {
  className?: string;
  logoSquare?: string;
  solidChevronDownMd?: string;
  monotoneAdd?: string;

  /** Style props */
  propMargin?: CSSProperties["margin"];
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];

  /** Action props */
  onTextClick?: () => void;
  onDropdownContainerClick?: () => void;
  onTextClick1?: () => void;
};

const TopNav3: FunctionComponent<TopNav3Type> = ({
  className = "",
  logoSquare,
  solidChevronDownMd,
  monotoneAdd,
  propMargin,
  propPosition,
  propTop,
  propLeft,
  onTextClick,
  onDropdownContainerClick,
  onTextClick1,
}) => {
  const topNavStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propMargin, propPosition, propTop, propLeft]);

  const navigate = useNavigate();

  const onLogoSquareImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onText23Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onText25Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onNavLinkDropdownToggleClick = useCallback(() => {
    navigate("/resources");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    // Please sync "Contact Us (Desktop)" to the project
  }, []);

  return (
    <div className={[styles.topNav, className].join(" ")} style={topNavStyle}>
      <img
        className={styles.logoSquareIcon}
        alt=""
        src={logoSquare}
        onClick={onLogoSquareImageClick}
      />
      <div className={styles.navLinks}>
        <div className={styles.frame}>
          <div className={styles.navLinkItem}>
            <div className={styles.atom} />
          </div>
          <div className={styles.navLinkDropdown}>
            <div className={styles.navLinkDropdownItems}>
              <b className={styles.text} onClick={onText23Click}>
                Homepage
              </b>
            </div>
            <div className={styles.navLinkDropdownItems1}>
              <b className={styles.text1} onClick={onTextClick}>
                Services
              </b>
            </div>
            <div className={styles.navLinkDropdownItems1}>
              <b className={styles.text2} onClick={onText25Click}>
                About Us
              </b>
            </div>
            <div
              className={styles.navLinkDropdownToggle}
              onClick={onNavLinkDropdownToggleClick}
            >
              <b className={styles.text3} onClick={onDropdownContainerClick}>
                Resources
              </b>
              <img
                className={styles.solidChevronDownMd}
                alt=""
                src={solidChevronDownMd}
              />
            </div>
            <div className={styles.navLinkDropdownItems1}>
              <b className={styles.text4} onClick={onTextClick1}>
                Careers
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <div className={styles.content}>
          <b className={styles.text5}>Get In Touch</b>
          <img className={styles.solidChevronDownMd} alt="" src={monotoneAdd} />
        </div>
      </div>
    </div>
  );
};

export default TopNav3;
