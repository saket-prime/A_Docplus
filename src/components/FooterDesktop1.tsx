import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import styles from "./FooterDesktop1.module.css";

export type FooterDesktop1Type = {
  className?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const FooterDesktop1: FunctionComponent<FooterDesktop1Type> = ({
  className = "",
  propPadding,
}) => {
  const frameSectionStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <section
      className={[styles.footerWrapper, className].join(" ")}
      style={frameSectionStyle}
    >
      <div className={styles.footer}>
        <img className={styles.logoMarkIcon} alt="" src="/logo-mark1.svg" />
        <div className={styles.footerContent}>
          <div className={styles.footerNavigation}>
            <div className={styles.copyright}>
              <div className={styles.brandingContainer}>
                <div className={styles.footerLogoContainer}>
                  <img
                    className={styles.logoSquareIcon}
                    loading="lazy"
                    alt=""
                    src="/logo-square-1.svg"
                  />
                </div>
                <div className={styles.brandName}>
                  Revolutionizing The Personalized Health Industry through the
                  power of AI Technology and Machine Learning.
                </div>
              </div>
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.socialContainer}>
                <div className={styles.socialTitle}>Homepage</div>
                <div className={styles.footerMoreLinkIcon}>
                  <div className={styles.atom} />
                </div>
              </div>
              <Link to={'/services'}><div className={styles.linkList}>Services</div></Link>
              <Link to={'/about-us'}><div className={styles.linkList2}>About Us</div></Link>
              <Link to={'/platform'}><div className={styles.linkList1}>Platform</div></Link>
              <Link to={'/contact-us'}><div className={styles.linkList3}>Contact Us</div></Link>
            </div>
            <div className={styles.footerLogoContainer}>
              <div className={styles.row}>
                <img
                  className={styles.iconFacebook}
                  loading="lazy"
                  alt=""
                  src="/icon-facebook.svg"
                />
                <img
                  className={styles.iconFacebook}
                  loading="lazy"
                  alt=""
                  src="/icon-youtube.svg"
                />
                <img
                  className={styles.iconFacebook}
                  loading="lazy"
                  alt=""
                  src="/icon-instagram.svg"
                />
                <img
                  className={styles.iconFacebook}
                  loading="lazy"
                  alt=""
                  src="/icon-linkedin.svg"
                />
              </div>
            </div>
            <div className={styles.footerCopyright}>
              <div className={styles.copyrightLegalLinks}>
                <div className={styles.copyright2023Docplus}>
                  Copyright© 2023 docplus. inc
                </div>
                <div className={styles.copyrightContent}>
                  <div className={styles.vector} />
                </div>
                <a className={styles.privacyPolicy}>Privacy Policy</a>
                <div className={styles.copyrightContent}>
                  <div className={styles.vector} />
                </div>
                <a className={styles.termsConditions}>{`Terms & Conditions`}</a>
              </div>
            </div>
          </div>
        </div>
        <footer className={styles.language}>
          <div className={styles.languageButtons}>
            <div className={styles.button}>
              <div className={styles.content}>
                <b className={styles.languageName}>Google Play</b>
                <img
                  className={styles.monotoneAddIcon}
                  loading="lazy"
                  alt=""
                  src="/monotone-add-16.svg"
                />
              </div>
            </div>
            <button className={styles.button1}>
              <div className={styles.content}>
                <b className={styles.text}>Apple Store</b>
                <img
                  className={styles.monotoneAddIcon}
                  alt=""
                  src="/monotone-add-16.svg"
                />
              </div>
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default FooterDesktop1;
