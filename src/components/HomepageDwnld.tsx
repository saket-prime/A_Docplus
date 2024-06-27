import { FunctionComponent } from "react";
import HomepageDwnldButton from "./HomepageDwnldButton";
import styles from "./HomepageDwnld.module.css";

export type HomepageDwnldType = {
  className?: string;
};

const HomepageDwnld: FunctionComponent<HomepageDwnldType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.col}>
          <div className={styles.labelMain}>
            <div className={styles.personalizeAtom}>
              <div className={styles.atom} />
            </div>
            <b className={styles.text}>Download The App</b>
          </div>
          <h1 className={styles.personalizeYourHealth}>
            Personalize Your Health With DocPlus, Now!
          </h1>
          <div className={styles.buttons}>
            <HomepageDwnldButton text="Google Play" />
            <HomepageDwnldButton text="Apple Store" />
          </div>
        </div>
        <img
          className={styles.contentChild}
          loading="lazy"
          alt=""
          src="/frame-62@2x.png"
        />
      </div>
    </div>
  );
};

export default HomepageDwnld;
