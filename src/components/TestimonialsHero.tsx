import { FunctionComponent, useCallback } from "react";
import styles from "./TestimonialsHero.module.css";

export type TestimonialsHeroType = {
  className?: string;
};

const TestimonialsHero: FunctionComponent<TestimonialsHeroType> = ({
  className = "",
}) => {
  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='button']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className={[styles.containerWrapper, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.col}>
          <h1 className={styles.whatPeopleSay}>What People Say About Us</h1>
          <div className={styles.frame}>
            <div className={styles.frame1}>
              <div className={styles.k}>78K+</div>
              <b className={styles.totalAwards}>Total Awards</b>
            </div>
            <div className={styles.frame1}>
              <div className={styles.k1}>500K+</div>
              <b className={styles.totalAwards1}>User Reviews</b>
            </div>
            <div className={styles.frame1}>
              <div className={styles.k2}>112+</div>
              <b className={styles.totalAwards2}>News Cover</b>
            </div>
          </div>
        </div>
        <div className={styles.col1}>
          <button className={styles.tagMaster}>
            <div className={styles.pricing}>JustTrust Us</div>
          </button>
          <div className={styles.frame4}>
            <div
              className={styles.atDocplusWere}
            >{`At DocPlus, we're dedicated to harnessing the power of artificial intelligence to transform healthcare for everyone. `}</div>
            <button className={styles.button} onClick={onButtonClick}>
              <div className={styles.content}>
                <a className={styles.text}>Learn More</a>
                <img
                  className={styles.monotoneAddIcon}
                  alt=""
                  src="/monotone-add13.svg"
                />
              </div>
              <div className={styles.anchorButton} data-scroll-to="button" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsHero;
