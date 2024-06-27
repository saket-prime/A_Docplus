import { FunctionComponent } from "react";
import styles from "./AboutUsTeam.module.css";

export type AboutUsTeamType = {
  className?: string;
};

const AboutUsTeam: FunctionComponent<AboutUsTeamType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.team, className].join(" ")}>
      <div className={styles.joinContent}>
        <div className={styles.content}>
          <h1 className={styles.joinTitle}>
            <span>{`Our vision is to empower individuals with `}</span>
            <span className={styles.personalized}>
              <span className={styles.personalized1}>personalized</span>
            </span>
            <span className={styles.personalized}>{` `}</span>
            <span className={styles.healthcareSolutions}>
              healthcare solutions.
            </span>
          </h1>
          <div className={styles.joinSubtitle}>
            We are committed to pushing the boundaries of what is possible in
            the field of healthcare, using AI to develop innovative solutions
            that are tailored to each individual's unique needs and preferences.
          </div>
        </div>
        <div className={styles.content1}>
          <div className={styles.iconContainer}>
            <img
              className={styles.monotoneHealthPlus}
              loading="lazy"
              alt=""
              src="/monotone-health-plus.svg"
            />
            <div className={styles.frame}>
              <h1 className={styles.joinOurTeam}>Join Our Team</h1>
              <div className={styles.jobOpeningsAvailable}>
                25 Job Openings Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsTeam;
