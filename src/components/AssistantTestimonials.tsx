import { FunctionComponent } from "react";
import styles from "./AssistantTestimonials.module.css";

export type AssistantTestimonialsType = {
  className?: string;
};

const AssistantTestimonials: FunctionComponent<AssistantTestimonialsType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.containerWrapper, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.starRating}>
          <img
            className={styles.solidStarIcon}
            loading="lazy"
            alt=""
            src="/solid-star.svg"
          />
          <img
            className={styles.solidStarIcon}
            loading="lazy"
            alt=""
            src="/solid-star.svg"
          />
          <img
            className={styles.solidStarIcon}
            loading="lazy"
            alt=""
            src="/solid-star.svg"
          />
          <img
            className={styles.solidStarIcon}
            loading="lazy"
            alt=""
            src="/solid-star-31.svg"
          />
          <img
            className={styles.solidStarIcon}
            loading="lazy"
            alt=""
            src="/solid-star-31.svg"
          />
        </div>
        <h1 className={styles.iveBeenUsing}>
          I’ve been using docplus AI for 7 days, and I see lots of health
          improvements! Very Amazing!
        </h1>
        <div className={styles.reviewButtons}>
          <div className={styles.profileDetails}>
            <div className={styles.profileContent}>
              <img
                className={styles.profilePicIcon}
                loading="lazy"
                alt=""
                src="/profile-pic1@2x.png"
              />
              <div className={styles.nameAndTitle}>
                <div className={styles.dekomoriSanae}>Dekomori Sanae</div>
                <div className={styles.seniorProductManager}>
                  Senior Product Manager
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttonIconFab}>
            <img
              className={styles.monotoneAddIcon}
              alt=""
              src="/monotone-add-11.svg"
            />
          </div>
          <div className={styles.reviewProgressBar}>
            <div className={styles.starRating}>
              <div className={styles.progressBarAtom} />
              <div className={styles.atom} />
              <div className={styles.atom} />
              <div className={styles.atom} />
              <div className={styles.atom} />
            </div>
          </div>
          <div className={styles.buttonIconFab}>
            <img
              className={styles.monotoneAddIcon}
              alt=""
              src="/monotone-add-12.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssistantTestimonials;
