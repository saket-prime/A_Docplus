import { FunctionComponent } from "react";
import styles from "./HomepageHeroButton.module.css";

export type HomepageHeroButtonType = {
  className?: string;
};

const HomepageHeroButton: FunctionComponent<HomepageHeroButtonType> = ({
  className = "",
}) => {
  return (
    <button className={[styles.button, className].join(" ")}>
      <div className={styles.content}>
        <b className={styles.text}>Download App</b>
        <img
          className={styles.monotoneAddIcon}
          alt=""
          src="/monotone-add-16.svg"
        />
      </div>
    </button>
  );
};

export default HomepageHeroButton;
