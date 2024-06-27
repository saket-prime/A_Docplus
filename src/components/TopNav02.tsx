import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TopNav02.module.css";

export type TopNav02Type = {
  className?: string;
};

const TopNav02: FunctionComponent<TopNav02Type> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onText4Click = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onText5Click = useCallback(() => {
    navigate("/platform");
  }, [navigate]);

  const onLogoSquareImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onText1Click = useCallback(() => {
    navigate("/resources");
  }, [navigate]);

  const onText2Click = useCallback(() => {
    // Please sync "Contact Us (Desktop)" to the project
  }, []);

  return (
    <header className={[styles.topNav, className].join(" ")}>
      <div className={styles.navColumnWrapper}>
        <div className={styles.navColumn}>
          <div className={styles.navItem}>
            <div className={styles.atom} />
          </div>
          <nav className={styles.frame}>
            <a className={styles.text}>Home</a>
            <a className={styles.text1} onClick={onText4Click}>
              Services
            </a>
            <a className={styles.text1} onClick={onText5Click}>
              Platform
            </a>
          </nav>
        </div>
      </div>
      <img
        className={styles.logoSquareIcon}
        loading="lazy"
        alt=""
        src="/logo-square21@2x.png"
        onClick={onLogoSquareImageClick}
      />
      <nav className={styles.branding}>
        <nav className={styles.frame1}>
          <a className={styles.text3} onClick={onTextClick}>
            About Us
          </a>
          <a className={styles.text4} onClick={onText1Click}>
            Resources
          </a>
          <a className={styles.text5} onClick={onText2Click}>
            Contact
          </a>
        </nav>
      </nav>
    </header>
  );
};

export default TopNav02;
