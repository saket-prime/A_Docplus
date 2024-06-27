import { FunctionComponent } from "react";
import HomepageHeroButton from "./HomepageHeroButton";
import styles from "./HomepageHeroContentCol.module.css";

export type HomepageHeroContentColType = {
  className?: string;
};

const HomepageHeroContentCol: FunctionComponent<HomepageHeroContentColType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.col, className].join(" ")}>
      <div className={styles.text}>
        <h1
          className={styles.heading}
        >{`Personalized AI Wellness & Healthcare`}</h1>
        <div className={styles.docplusProvidesPersonalizedContainer}>
          <p className={styles.docplusProvidesPersonalized}>
            docplus provides personalized healthcare AI analytics to help you
            empower your health.
          </p>
          <p className={styles.docplusProvidesPersonalized}>&nbsp;</p>
          <p className={styles.trustedByOver400000Users}>
            <span className={styles.trustedByOver}>{`Trusted by over `}</span>
            <span className={styles.users}>400,000 users</span>
            <span className={styles.andCounting}> and counting.</span>
          </p>
        </div>
      </div>
      <HomepageHeroButton />
    </div>
  );
};

export default HomepageHeroContentCol;
