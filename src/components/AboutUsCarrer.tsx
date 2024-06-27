import { FunctionComponent } from "react";
import AboutUsBtn from "./AboutUsBtn";
import AboutUsBtn3 from "./AboutUsBtn3";
import styles from "./AboutUsCarrer.module.css";

export type AboutUsCarrerType = {
  className?: string;
};

const AboutUsCarrer: FunctionComponent<AboutUsCarrerType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.containerWrapper, className].join(" ")}>
      <div className={styles.container}>
        <img className={styles.firstLabelIcon} alt="" src="/frame-3@2x.png" />
        <div className={styles.labelContentWrapper}>
          <div className={styles.labelContent}>
            <div className={styles.labelMain}>
              <div className={styles.labelIcon}>
                <div className={styles.atom} />
              </div>
              <b className={styles.text}>Join Our Team!</b>
            </div>
            <h1 className={styles.heading}>25 Job Openings Available</h1>
            <div className={styles.frame}>
              <AboutUsBtn
                text="See Openings"
                propBackgroundColor="#fff"
                textColor="#0f67fe"
                textDisplay="inline-block"
                textMinWidth="121px"
                monotoneAdd="/monotone-add-211.svg"
              />
              <AboutUsBtn3 buttonLabel="About Us" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsCarrer;
