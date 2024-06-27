import { FunctionComponent } from "react";
import styles from "./TestimonialsNews.module.css";

export type TestimonialsNewsType = {
  className?: string;
};

const TestimonialsNews: FunctionComponent<TestimonialsNewsType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.newsCoverageSection, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.row}>
            <h1
              className={styles.pressReleasesCoverage}
            >{`Press Releases & Coverage`}</h1>
            <div className={styles.tagMaster}>
              <div className={styles.pricing}>24 Total</div>
            </div>
          </div>
          <div className={styles.row1}>
            <div className={styles.frame}>
              <div className={styles.pressLogoInnerCard}>
                <b className={styles.cvsPharma}>CVS Pharma</b>
                <div className={styles.frame1}>
                  <img
                    className={styles.groupIcon}
                    loading="lazy"
                    alt=""
                    src="/group.svg"
                  />
                  <img
                    className={styles.solidArrowTopRight}
                    alt=""
                    src="/solid-arrow-top-right.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frame}>
              <div className={styles.pressLogoInnerCard}>
                <b className={styles.cvsPharma1}>Netflix</b>
                <div className={styles.frame4}>
                  <img
                    className={styles.vectorIcon}
                    loading="lazy"
                    alt=""
                    src="/vector3.svg"
                  />
                  <img
                    className={styles.solidArrowTopRight}
                    alt=""
                    src="/solid-arrow-top-right-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frame}>
              <div className={styles.pressLogoInnerCard}>
                <b className={styles.cvsPharma2}>Youtube</b>
                <div className={styles.frame4}>
                  <img
                    className={styles.groupIcon1}
                    alt=""
                    src="/group-1@2x.png"
                  />
                  <img
                    className={styles.solidArrowTopRight}
                    alt=""
                    src="/solid-arrow-top-right-2.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frame}>
              <div className={styles.pressLogoInnerCard}>
                <b className={styles.cvsPharma3}>Google</b>
                <div className={styles.frame4}>
                  <img
                    className={styles.groupIcon2}
                    loading="lazy"
                    alt=""
                    src="/group-2.svg"
                  />
                  <img
                    className={styles.solidArrowTopRight}
                    alt=""
                    src="/solid-arrow-top-right-3.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frame}>
              <div className={styles.pressLogoInnerCard}>
                <b className={styles.cvsPharma4}>Star Wars</b>
                <div className={styles.frame4}>
                  <img
                    className={styles.vectorIcon1}
                    loading="lazy"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <img
                    className={styles.solidArrowTopRight}
                    loading="lazy"
                    alt=""
                    src="/solid-arrow-top-right-4.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frame}>
              <div className={styles.pressLogoInnerCard}>
                <b className={styles.cvsPharma}>CVS Pharma</b>
                <div className={styles.frame1}>
                  <img
                    className={styles.groupIcon}
                    loading="lazy"
                    alt=""
                    src="/group.svg"
                  />
                  <img
                    className={styles.solidArrowTopRight}
                    alt=""
                    src="/solid-arrow-top-right.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frame}>
              <div className={styles.pressLogoInnerCard}>
                <b className={styles.cvsPharma1}>Netflix</b>
                <div className={styles.frame4}>
                  <img
                    className={styles.vectorIcon}
                    loading="lazy"
                    alt=""
                    src="/vector3.svg"
                  />
                  <img
                    className={styles.solidArrowTopRight}
                    alt=""
                    src="/solid-arrow-top-right-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frame}>
              <div className={styles.pressLogoInnerCard}>
                <b className={styles.cvsPharma2}>Youtube</b>
                <div className={styles.frame4}>
                  <img
                    className={styles.groupIcon1}
                    loading="lazy"
                    alt=""
                    src="/group-1@2x.png"
                  />
                  <img
                    className={styles.solidArrowTopRight}
                    alt=""
                    src="/solid-arrow-top-right-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsNews;
