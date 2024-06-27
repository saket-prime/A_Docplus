import { FunctionComponent } from "react";
import styles from "./TestimonialsUserCards.module.css";

export type TestimonialsUserCardsType = {
  className?: string;
  profilePic?: string;
  asAHealthcareProviderImIm?: string;
  solidStar?: string;
  heading?: string;
  heading1?: string;
};

const TestimonialsUserCards: FunctionComponent<TestimonialsUserCardsType> = ({
  className = "",
  profilePic,
  asAHealthcareProviderImIm,
  solidStar,
  heading,
  heading1,
}) => {
  return (
    <div className={[styles.userTestimonials, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.testimonialInnerContent}>
          <div className={styles.section}>
            <img
              className={styles.profilePicIcon}
              loading="lazy"
              alt=""
              src={profilePic}
            />
            <blockquote className={styles.asAHealthcare}>
              {asAHealthcareProviderImIm}
            </blockquote>
          </div>
          <div className={styles.stars}>
            <img
              className={styles.solidStarIcon}
              alt=""
              src="/solid-star1.svg"
            />
            <img
              className={styles.solidStarIcon}
              alt=""
              src="/solid-star1.svg"
            />
            <img
              className={styles.solidStarIcon}
              alt=""
              src="/solid-star1.svg"
            />
            <img className={styles.solidStarIcon} alt="" src={solidStar} />
            <img
              className={styles.solidStarIcon}
              alt=""
              src="/solid-star-3.svg"
            />
          </div>
        </div>
        <div className={styles.title}>
          <div className={styles.heading}>{heading}</div>
          <div className={styles.heading1}>{heading1}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsUserCards;
