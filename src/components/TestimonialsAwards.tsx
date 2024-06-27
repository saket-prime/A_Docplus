import { FunctionComponent } from "react";
import styles from "./TestimonialsAwards.module.css";

export type TestimonialsAwardsType = {
  className?: string;
};

const TestimonialsAwards: FunctionComponent<TestimonialsAwardsType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.containerWrapper, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.frame}>
          <img
            className={styles.handsPeopleWithGoldenTroph}
            alt=""
            src="/hands-people-with-golden-trophy-sport-business-competition-concept@2x.png"
          />
          <div className={styles.buttonIconFab}>
            <img
              className={styles.monotoneAddIcon}
              loading="lazy"
              alt=""
              src="/monotone-add6.svg"
            />
          </div>
        </div>
        <div className={styles.awardsContainerWrapper}>
          <div className={styles.awardsContainer}>
            <h1 className={styles.awardsRecognitions}>
              <span>{`Awards & Recognitions`}</span>
              <span className={styles.span}>*</span>
            </h1>
            <div className={styles.awardsIconsList}>
              <div className={styles.frame1}>
                <img
                  className={styles.solidCheckSquare}
                  alt=""
                  src="/solid-check-square.svg"
                />
                <b className={styles.healthStartupAwards}>
                  Health Startup Awards
                </b>
                <b className={styles.awardEmptySpace}>12</b>
              </div>
              <div className={styles.frame2}>
                <img
                  className={styles.solidCheckSquare1}
                  loading="lazy"
                  alt=""
                  src="/solid-check-square.svg"
                />
                <div className={styles.healthStartupAwardsContainer}>
                  <b>International Health Awards</b>
                </div>
                <b className={styles.b}>8</b>
              </div>
              <div className={styles.frame2}>
                <img
                  className={styles.solidCheckSquare1}
                  loading="lazy"
                  alt=""
                  src="/solid-check-square.svg"
                />
                <div className={styles.healthStartupAwardsContainer1}>
                  <b>Regional Health Awards</b>
                </div>
                <b className={styles.b}>4</b>
              </div>
              <div className={styles.frame2}>
                <img
                  className={styles.solidCheckSquare1}
                  loading="lazy"
                  alt=""
                  src="/solid-check-square.svg"
                />
                <b className={styles.healthStartupAwards1}>
                  Local Health Awards
                </b>
                <b className={styles.b2}>2</b>
              </div>
            </div>
            <div className={styles.weMayHave}>
              *We may have exagerrated the number a bit for marketing purposes.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAwards;
