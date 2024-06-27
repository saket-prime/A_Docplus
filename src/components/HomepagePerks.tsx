import { FunctionComponent } from "react";
import HomepagePerk2 from "./HomepageApp";
import styles from "./HomepagePerks.module.css";

export type HomepagePerksType = {
  className?: string;
};

const HomepagePerks: FunctionComponent<HomepagePerksType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.containerWrapper, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.featuresRow}>
          <div className={styles.features}>
            <div className={styles.frame}>
              <div className={styles.personalizedHealthcare}>
                <div className={styles.buttonIconFab}>
                  <img
                    className={styles.monotoneAddIcon}
                    loading="lazy"
                    alt=""
                    src="/monotone-add-52.svg"
                  />
                </div>
                <b className={styles.personalized}>Personalized.</b>
              </div>
            </div>
            <div className={styles.features1}>
              <div className={styles.featureList}>
                <b className={styles.fitness}>Fitness</b>
                <div className={styles.nutritionFeature}>
                  <input className={styles.atom} type="checkbox" />
                </div>
                <b className={styles.nutrition}>Nutrition</b>
                <div className={styles.nutritionFeature}>
                  <input className={styles.atom} type="checkbox" />
                </div>
                <b className={styles.personalized}>Mindfulness</b>
                <div className={styles.nutritionFeature}>
                  <input className={styles.atom} type="checkbox" />
                </div>
                <b className={styles.wellness}>Wellness</b>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <img
              className={styles.logoMarkIcon}
              loading="lazy"
              alt=""
              src="/logo-mark.svg"
            />
            <div className={styles.healthcareWrapper}>
              <b className={styles.healthcare}>Healthcare</b>
            </div>
            <img
              className={styles.logoMarkIcon}
              loading="lazy"
              alt=""
              src="/logo-mark.svg"
            />
          </div>
          <div className={styles.aIDescription}>
            <div className={styles.aiDescription}>
              <img className={styles.groupIcon} alt="" src="/group2.svg" />
              <b className={styles.artificialIntelligence}>
                Artificial Intelligence
              </b>
            </div>
            <div className={styles.aiImage}>
              <div className={styles.beautyAbstractFormsTexturesParent}>
                <img
                  className={styles.beautyAbstractFormsTextures}
                  alt=""
                  src="/beauty-abstract-forms-textures-generative-ai@2x.png"
                />
                <div className={styles.vectorParent}>
                  <div className={styles.vector} />
                  <b className={styles.machineLearning}>Machine Learning</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HomepagePerk2 />
      </div>
    </section>
  );
};

export default HomepagePerks;
