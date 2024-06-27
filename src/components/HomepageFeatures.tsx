import { FunctionComponent } from "react";
import styles from "./HomepageFeatures.module.css";

export type HomepageFeaturesType = {
  className?: string;
};

const HomepageFeatures: FunctionComponent<HomepageFeaturesType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.footerWrapper, className].join(" ")}>
      <div className={styles.footer}>
        <img className={styles.logoMarkIcon} alt="" src="/logo-mark1.svg" />
        <div className={styles.frameWrapper}>
          <div className={styles.frame}>
            <div className={styles.frameContainer}>
              <div className={styles.frame1}>
                <div className={styles.logoSquareWrapper}>
                  <img
                    className={styles.logoSquareIcon}
                    loading="lazy"
                    alt=""
                    src="/logo-square-1.svg"
                  />
                </div>
                <div className={styles.text}>
                  Revolutionizing The Personalized Health Industry through the
                  power of AI Technology and Machine Learning.
                </div>
              </div>
            </div>
            <div className={styles.frame2}>
              <div className={styles.frame3}>
                <div className={styles.address}>Homepage</div>
                <div className={styles.atomWrapper}>
                  <div className={styles.atom} />
                </div>
              </div>
              <div className={styles.links}>Services</div>
              <div className={styles.links1}>Platform</div>
              <div className={styles.links2}>About Us</div>
              <div className={styles.links3}>Contact Us</div>
            </div>
            <div className={styles.logoSquareWrapper}>
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
            <div className={styles.copyrightLegalLinksWrapper}>
              <div className={styles.copyrightLegalLinks}>
                <div className={styles.copyright2023Docplus}>
                  Copyright© 2023 docplus. inc
                </div>
                <div className={styles.legalInfo}>
                  <div className={styles.vector} />
                </div>
                <a className={styles.privacyPolicy}>Privacy Policy</a>
                <div className={styles.legalInfo}>
                  <div className={styles.vector} />
                </div>
                <a className={styles.termsConditions}>{`Terms & Conditions`}</a>
              </div>
            </div>
          </div>
        </div>
        <footer className={styles.frame4}>
          <div className={styles.buttonsRow}>
            <div className={styles.button}>
              <div className={styles.content}>
                <b className={styles.text1}>Google Play</b>
                <img
                  className={styles.monotoneAddIcon}
                  alt=""
                  src="/monotone-add-16.svg"
                />
              </div>
            </div>
            <button className={styles.button1}>
              <div className={styles.content}>
                <b className={styles.text2}>Apple Store</b>
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

export default HomepageFeatures;
