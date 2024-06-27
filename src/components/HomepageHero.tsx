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
    <section className={[styles.heroSectionWrapper, className].join(" ")}>
      <div className={styles.heroSection}>
        <div className={styles.dAssetParent}>
          <img className={styles.dAssetIcon} alt="" src="/d-asset@2x.png" />
          <div className={styles.colParent}>
            <HomepageHeroContentCol />
            <img className={styles.image19Icon} alt="" src="/image-19@2x.png" />
          </div>
          <TopNav1
            buttonIconFABFlex="unset"
            buttonIconFABPosition="absolute"
            buttonIconFABTop="-47px"
            buttonIconFABLeft="-118.5px"
            buttonIconFABWidth="1392px"
          />
        </div>
        <div className={styles.buttonIconFabParent}>
          <div className={styles.buttonIconFab}>
            <img
              className={styles.monotoneAddIcon}
              alt=""
              src="/monotone-add.svg"
            />
          </div>
          <div className={styles.gradient} />
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
