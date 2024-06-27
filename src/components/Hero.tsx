import { FunctionComponent, useCallback } from "react";
import styles from "./Hero.module.css";

export type HeroType = {
  className?: string;
};

const Hero: FunctionComponent<HeroType> = ({ className = "" }) => {
  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='button']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={[styles.hero, className].join(" ")}>
      <div className={styles.text}>
        <h1 className={styles.docplusResources}>DocPlus Resources</h1>
        <div className={styles.frame}>
          <div
            className={styles.weAreCommitted}
          >{`We are committed to making cutting-edge AI healthcare solutions accessible to everyone. `}</div>
          <button className={styles.button} onClick={onButtonClick}>
            <div className={styles.content}>
              <b className={styles.text1}>See All Resources</b>
              <img
                className={styles.monotoneAddIcon}
                alt=""
                src="/monotone-add17.svg"
              />
            </div>
            <div className={styles.anchorButton} data-scroll-to="button" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
