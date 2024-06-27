import { FunctionComponent } from "react";
import HomepageServicesCards from "./HomepageServicesCards";
import styles from "./HomepageServicesCard.module.css";

export type HomepageServicesCardType = {
  className?: string;
};

const HomepageServicesCard: FunctionComponent<HomepageServicesCardType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.row, className].join(" ")}>
      <div className={styles.serviceCardPair}>
        <HomepageServicesCards
          solidHeadHealth="/solid-head-health.svg"
          patients="Patients"
          atDocPlusWeEmpowerPatient="At DocPlus, we empower patients with personalized healthcare solutions, helping them make informed choices."
        />
        <HomepageServicesCards
          solidHeadHealth="/solid-perscription.svg"
          patients="Providers"
          atDocPlusWeEmpowerPatient="DocPlus supports healthcare providers with advanced tools and insights to streamline patient interactions."
        />
      </div>
      <div className={styles.serviceCardPair}>
        <HomepageServicesCards
          solidHeadHealth="/solid-stethoscope.svg"
          patients="Professionals"
          atDocPlusWeEmpowerPatient="We offerhealthcare professionals access to cutting-edge AI-driven health assessments and data analytics."
        />
        <HomepageServicesCards
          solidHeadHealth="/solid-perscription-1.svg"
          patients="Pharma"
          atDocPlusWeEmpowerPatient="We provide valuable data insights to pharmaceutical companies, aiding research and development efforts."
        />
      </div>
    </div>
  );
};

export default HomepageServicesCard;
