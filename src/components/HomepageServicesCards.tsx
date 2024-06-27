import { FunctionComponent } from "react";
import styles from "./HomepageServicesCards.module.css";

export type HomepageServicesCardsType = {
  className?: string;
  solidHeadHealth?: string;
  patients?: string;
  atDocPlusWeEmpowerPatient?: string;
};

const HomepageServicesCards: FunctionComponent<HomepageServicesCardsType> = ({
  className = "",
  solidHeadHealth,
  patients,
  atDocPlusWeEmpowerPatient,
}) => {
  return (
    <div className={[styles.frame, className].join(" ")}>
      <div className={styles.firstCardContent}>
        <div className={styles.firstCardHeader}>
          <img
            className={styles.solidHeadHealth}
            alt=""
            src={solidHeadHealth}
          />
        </div>
        <div className={styles.firstCardDescription}>
          <div className={styles.patients}>{patients}</div>
          <div className={styles.atDocplusWe}>{atDocPlusWeEmpowerPatient}</div>
        </div>
      </div>
      <img
        className={styles.solidHeadHealth}
        alt=""
        src="/solid-chevron-right-md.svg"
      />
    </div>
  );
};

export default HomepageServicesCards;
