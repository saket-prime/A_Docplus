import { FunctionComponent } from "react";
import styles from "./FAQHero.module.css";

export type FAQHeroType = {
  className?: string;
};

const FAQHero: FunctionComponent<FAQHeroType> = ({ className = "" }) => {
  return (
    <div className={[styles.heroDescription, className].join(" ")}>
      <div className={styles.learnMoreButton}>
        <div className={styles.frequentlyAskedQuestions}>
          Frequently Asked Questions
        </div>
        <div className={styles.learnMoreIcon}>
          <div className={styles.haveAnyQuestions}>
            Have any questions or still unsure about our proudct? We have all of
            the answers covered.
          </div>
          <div className={styles.button}>
            <div className={styles.content}>
              <b className={styles.contactButton}>See All FAQs</b>
              <img
                className={styles.monotoneAddIcon}
                alt=""
                src="/monotone-add13.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQHero;
