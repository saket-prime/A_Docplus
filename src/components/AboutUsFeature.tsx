import { FunctionComponent } from "react";
import styles from "./AboutUsFeature.module.css";

export type AboutUsFeatureType = {
  className?: string;
};

const AboutUsFeature: FunctionComponent<AboutUsFeatureType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.tagContentParent, className].join(" ")}>
      <div className={styles.tagContent}>
        <div className={styles.main}>
          <h1 className={styles.pricingDescription}>
            We Deliver Better Health Experience For Everyone.
          </h1>
          <div className={styles.pricingTag}>
            <button className={styles.tagMaster}>
              <div className={styles.pricing}>Wellness Feature</div>
            </button>
            <div className={styles.text}>
              We are committed to pushing the boundaries of what is possible in
              the field of healthcare, using AI to develop innovative solution.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.galleryContainer}>
        <img
          className={styles.frameIcon}
          loading="lazy"
          alt=""
          src="/frame.svg"
        />
        <img
          className={styles.aboutUsGallery}
          loading="lazy"
          alt=""
          src="/about-us-gallery.svg"
        />
        <img className={styles.aboutUsGallery} alt="" src="/frame-1.svg" />
        <img className={styles.aboutUsGallery} alt="" src="/frame-2.svg" />
      </div>
      <div className={styles.tagContent}>
        <div className={styles.main1}>
          <div className={styles.progressBars}>
            <div className={styles.progressBarList}>
              <div className={styles.progressBarAtom} />
              <div className={styles.progressBarAtom1} />
              <div className={styles.progressBarAtom1} />
              <div className={styles.progressBarAtom1} />
            </div>
          </div>
          <div className={styles.progressButtons}>
            <div className={styles.buttonIconFab}>
              <img
                className={styles.monotoneAddIcon}
                alt=""
                src="/monotone-add-2.svg"
              />
            </div>
            <div className={styles.buttonIconFab}>
              <img
                className={styles.monotoneAddIcon}
                alt=""
                src="/monotone-add-3.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsFeature;
