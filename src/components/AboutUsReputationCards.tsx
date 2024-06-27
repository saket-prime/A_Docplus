import { FunctionComponent } from "react";
import styles from "./AboutUsReputationCards.module.css";

export type AboutUsReputationCardsType = {
  className?: string;
  prop?: string;
  prop1?: string;
  companiesHelped?: string;
};

const AboutUsReputationCards: FunctionComponent<AboutUsReputationCardsType> = ({
  className = "",
  prop,
  prop1,
  companiesHelped,
}) => {
  return (
    <div className={[styles.frame, className].join(" ")}>
      <div className={styles.companiesNames}>
        <div className={styles.companyName}>
          <span>{prop}</span>
          <span className={styles.span}>{prop1}</span>
        </div>
        <b className={styles.companiesHelped}>{companiesHelped}</b>
      </div>
      <div className={styles.buttonIconFab}>
        <img
          className={styles.monotoneAddIcon}
          alt=""
          src="/monotone-add-5.svg"
        />
      </div>
    </div>
  );
};

export default AboutUsReputationCards;
