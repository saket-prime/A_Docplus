import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopNav2 from "./TopNav2";
import styles from "./AboutUsHero.module.css";

export type AboutUsHeroType = {
  className?: string;
};

const AboutUsHero: FunctionComponent<AboutUsHeroType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onText5Click = useCallback(() => {
    navigate("/platform");
  }, [navigate]);

  const onText1Click = useCallback(() => {
    navigate("/resources");
  }, [navigate]);

  const onText2Click = useCallback(() => {
    // Please sync "Contact Us (Desktop)" to the project
  }, []);

  return (
    <section className={[styles.heroSectionWrapper, className].join(" ")}>
      <div className={styles.heroSection}>
        <div className={styles.topNavWrapper}>
          <TopNav2
            logoSquare="/logo-square11@2x.png"
            onTextClick1={onText5Click}
            onTextClick2={onText2Click}
            onTextClick3={onText1Click}
            onTextClick4={onText2Click}
          />
        </div>
        <div className={styles.heroHeading}>
          <div className={styles.heroTitleContent}>
            <h1 className={styles.heading}>
              <span>Health</span>
              <span className={styles.span}>.</span>
            </h1>
          </div>
          <div className={styles.heroSubtitleContentWrapper}>
            <div className={styles.heroSubtitleContent}>
              <h1 className={styles.heading1}>
                <span> Meets</span>
                <span className={styles.span}>.</span>
              </h1>
              <h1 className={styles.heading2}>
                <span>AI+</span>
                <span className={styles.span}>.</span>
              </h1>
            </div>
          </div>
          <div className={styles.heroImageContentParent}>
            <div className={styles.heroImageContent}>
              <img
                className={styles.dAssetIcon}
                alt=""
                src="/d-asset5@2x.png"
              />
              <img
                className={styles.dAssetIcon1}
                alt=""
                src="/d-asset-1@2x.png"
              />
            </div>
            <div className={styles.heroTestimonial}>
              <div className={styles.vector} />
              <div className={styles.section}>
                <div className={styles.buttonIconFab}>
                  <img
                    className={styles.monotoneAddIcon}
                    loading="lazy"
                    alt=""
                    src="/monotone-add.svg"
                  />
                </div>
                <div className={styles.frame}>
                  <div className={styles.testimonialQuote}>
                    <div className={styles.userImage}>
                      <div className={styles.monotoneAddIcon}>
                        <img
                          className={styles.userImageShape}
                          loading="lazy"
                          alt=""
                          src="/vector1.svg"
                        />
                        <div className={styles.vector1} />
                      </div>
                    </div>
                    <div className={styles.trustedByWrapper}>
                      <b className={styles.trustedBy}>
                        <p className={styles.p}>Trusted by</p>
                        <p className={styles.p}>2,000+</p>
                      </b>
                    </div>
                  </div>
                  <div className={styles.trustedByLabel}>
                    <img
                      className={styles.solidArrowRightMd}
                      loading="lazy"
                      alt=""
                      src="/monotone-add-3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
