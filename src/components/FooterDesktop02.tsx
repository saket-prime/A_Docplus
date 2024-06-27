import { FunctionComponent } from "react";
import styles from "./FooterDesktop02.module.css";

export type FooterDesktop02Type = {
  className?: string;
};

const FooterDesktop02: FunctionComponent<FooterDesktop02Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <img className={styles.logoMarkIcon} alt="" src="/logo-mark1.svg" />
      <div className={styles.frame}>
        <div className={styles.logoSquareHorizontal}>
          <img
            className={styles.logoSquareIcon}
            loading="lazy"
            alt=""
            src="/logo-square1.svg"
          />
          <img className={styles.asklepiosIcon} alt="" src="/asklepios.svg" />
        </div>
        <div className={styles.content}>
          <div className={styles.row}>
            <h2 className={styles.solutions}>Solutions</h2>
            <h3 className={styles.medicalDevicesPersonalizedContainer}>
              <p className={styles.medicalDevices}>Medical Devices</p>
              <p className={styles.medicalDevices}>Personalized Health</p>
              <p className={styles.medicalDevices}>Healthy Alert</p>
              <p className={styles.medicalDevices}>AI Recommendations</p>
            </h3>
          </div>
          <div className={styles.row}>
            <h2 className={styles.solutions}>Company</h2>
            <h3 className={styles.aboutOurApproachContainer}>
              <p className={styles.medicalDevices}>About</p>
              <p className={styles.medicalDevices}>Our Approach</p>
              <p className={styles.medicalDevices}>Careers</p>
              <p className={styles.medicalDevices}>Contact</p>
            </h3>
          </div>
          <div className={styles.row}>
            <h2 className={styles.solutions}>Resources</h2>
            <h3 className={styles.aboutOurApproachContainer}>
              <p className={styles.medicalDevices}>Resource Library</p>
              <p className={styles.medicalDevices}>Newsroom</p>
              <p className={styles.medicalDevices}>Insights</p>
            </h3>
          </div>
          <div className={styles.row3}>
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
      </div>
      <footer className={styles.button}>
        <div className={styles.content1}>
          <b className={styles.text}>Download The App</b>
          <img
            className={styles.monotoneAddIcon}
            loading="lazy"
            alt=""
            src="/monotone-add11.svg"
          />
        </div>
      </footer>
    </section>
  );
};

export default FooterDesktop02;
