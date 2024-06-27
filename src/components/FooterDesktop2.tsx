import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FooterDesktop2.module.css";

export type FooterDesktop2Type = {
  className?: string;
  logoMark?: string;
  logoSquare?: string;
  asklepios?: string;
  iconFacebook?: string;
  iconYoutube?: string;
  iconInstagram?: string;
  iconLinkedin?: string;
  monotoneAdd?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propMargin?: CSSProperties["margin"];
  propMargin1?: CSSProperties["margin"];
  propMargin2?: CSSProperties["margin"];
};

const FooterDesktop2: FunctionComponent<FooterDesktop2Type> = ({
  className = "",
  logoMark,
  logoSquare,
  asklepios,
  iconFacebook,
  iconYoutube,
  iconInstagram,
  iconLinkedin,
  monotoneAdd,
  propWidth,
  propAlignSelf,
  propMargin,
  propMargin1,
  propMargin2,
}) => {
  const frameSection1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const solutionsStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  const company1Style: CSSProperties = useMemo(() => {
    return {
      margin: propMargin1,
    };
  }, [propMargin1]);

  const solutions1Style: CSSProperties = useMemo(() => {
    return {
      margin: propMargin2,
    };
  }, [propMargin2]);

  return (
    <section
      className={[styles.footerWrapper, className].join(" ")}
      style={frameSection1Style}
    >
      <div className={styles.footer}>
        <img className={styles.logoMarkIcon} alt="" src={logoMark} />
        <div className={styles.footerContent}>
          <div className={styles.logoSquareHorizontal}>
            <img className={styles.logoSquareIcon} alt="" src={logoSquare} />
            <img className={styles.asklepiosIcon} alt="" src={asklepios} />
          </div>
          <div className={styles.content}>
            <div className={styles.row}>
              <div className={styles.solutions} style={solutionsStyle}>
                Solutions
              </div>
              <div className={styles.medicalDevicesPersonalizedContainer}>
                <p className={styles.medicalDevices}>Medical Devices</p>
                <p className={styles.medicalDevices}>Personalized Health</p>
                <p className={styles.medicalDevices}>Healthy Alert</p>
                <p className={styles.medicalDevices}>AI Recommendations</p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.solutions} style={company1Style}>
                Company
              </div>
              <div className={styles.aboutOurApproachContainer}>
                <p className={styles.medicalDevices}>About</p>
                <p className={styles.medicalDevices}>Our Approach</p>
                <p className={styles.medicalDevices}>Careers</p>
                <p className={styles.medicalDevices}>Contact</p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.solutions} style={solutions1Style}>
                Resources
              </div>
              <div className={styles.aboutOurApproachContainer}>
                <p className={styles.medicalDevices}>Resource Library</p>
                <p className={styles.medicalDevices}>Newsroom</p>
                <p className={styles.medicalDevices}>Insights</p>
              </div>
            </div>
            <div className={styles.row3}>
              <img
                className={styles.iconFacebook}
                loading="lazy"
                alt=""
                src={iconFacebook}
              />
              <img
                className={styles.iconFacebook}
                loading="lazy"
                alt=""
                src={iconYoutube}
              />
              <img
                className={styles.iconFacebook}
                loading="lazy"
                alt=""
                src={iconInstagram}
              />
              <img
                className={styles.iconFacebook}
                loading="lazy"
                alt=""
                src={iconLinkedin}
              />
            </div>
          </div>
        </div>
        <footer className={styles.button}>
          <div className={styles.content1}>
            <b className={styles.text}>Download The App</b>
            <img className={styles.monotoneAddIcon} alt="" src={monotoneAdd} />
          </div>
        </footer>
      </div>
    </section>
  );
};

export default FooterDesktop2;
