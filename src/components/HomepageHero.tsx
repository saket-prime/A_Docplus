import { FunctionComponent } from "react";
import HomepageHeroContentCol from "./HomepageHeroContentCol";
import TopNav1 from "./TopNav1";
import styles from "./HomepageHero.module.css";

export type HomepageHeroType = {
  className?: string;
};

const HomepageHero: FunctionComponent<HomepageHeroType> = ({
  className = "",
}) => {
  return (
    <div className={styles.heroSection}>
      
      <div className={styles.col}>
        <div className={styles.text}>
          <h1
            className={styles.heading}
          >{`Personalized AI Wellness & Healthcare`}</h1>
          <div className={styles.docplusProvidesPersonalizedContainer}>
            <p className={styles.docplusProvidesPersonalized}>
              docplus provides personalized healthcare AI analytics to help you
              empower your health.
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.trustedByOver400000Users}>
              <span className={styles.trustedByOver}>{`Trusted by over `}</span>
              <span className={styles.users}>400,000 users</span>
              <span className={styles.andCounting}> and counting.</span>
            </p>
          </div>
        </div>
        <button className={styles.button}>
          <div className={styles.content}>
            <b className={styles.text1}>Download App</b>
            <img
              className={styles.monotoneAddIcon}
              alt=""
              src="/monotone-add-16.svg"
            />
          </div>
        </button>
      </div>
      <main className={styles.heroImage}>
        <img className={styles.dAssetIcon} alt="" src="/d-asset@2x.png" />
        <img className={styles.image19Icon} alt="" src="/image-19@2x.png" />
      </main>
      <div className={styles.topNav}> <TopNav1 /></div> 
      <footer className={styles.buttonIconFabParent}>
        
        <div className={styles.gradient} />
      </footer>
    </div>
  );
};

export default HomepageHero;
