import { FunctionComponent } from "react";
import styles from "./HomepageApp.module.css";

export type HomepagePerk2Type = {
  className?: string;
};

const HomepagePerk2: FunctionComponent<HomepagePerk2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.section, className].join(" ")}>
      <h1 className={styles.col}>
        We create better health experience through AI/ML technology.
      </h1>
      <div className={styles.col1}>
        <div className={styles.docplusProvidesPersonalized}>
          docplus provides personalized healthcare AI analytics to help you
          empower your health. Trusted by over 400,000 users.
        </div>
        <button className={styles.button}>
          <div className={styles.content}>
            <b className={styles.text}>Learn More</b>
            <img
              className={styles.monotoneAddIcon}
              alt=""
              src="/monotone-add1.svg"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default HomepagePerk2;
