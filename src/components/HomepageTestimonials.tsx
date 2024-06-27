import { FunctionComponent } from "react";
import HomepageServicesTitle from "./HomepageServicesTitle";
import styles from "./HomepageTestimonials.module.css";

export type HomepageTestimonialsType = {
  className?: string;
};

const HomepageTestimonials: FunctionComponent<HomepageTestimonialsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.containerInner}>
        <HomepageServicesTitle
          pricing="Testimonials"
          heading="Trusted by Many"
          propAlignSelf="stretch"
          propAlignSelf1="stretch"
        />
      </div>
      <div className={styles.companyLogos}>
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector-13.svg"
        />
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector-21.svg"
        />
        <img
          className={styles.vectorIcon2}
          loading="lazy"
          alt=""
          src="/vector-32@2x.png"
        />
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector-41.svg"
        />
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector-5.svg"
        />
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector-13.svg"
        />
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector-5.svg"
        />
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector-41.svg"
        />
        <img
          className={styles.vectorIcon7}
          loading="lazy"
          alt=""
          src="/vector-8@2x.png"
        />
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector-21.svg"
        />
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector-13.svg"
        />
        <img className={styles.vectorIcon} alt="" src="/vector-5.svg" />
        <div className={styles.companyLogoGeneral1}>
          <img className={styles.firstLogoIcon} alt="" src="/vector-121.svg" />
        </div>
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector-41.svg"
        />
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector-13.svg"
        />
        <img
          className={styles.vectorIcon2}
          loading="lazy"
          alt=""
          src="/vector-32@2x.png"
        />
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector-21.svg"
        />
        <img className={styles.vectorIcon} alt="" src="/vector-13.svg" />
      </div>
    </div>
  );
};

export default HomepageTestimonials;
