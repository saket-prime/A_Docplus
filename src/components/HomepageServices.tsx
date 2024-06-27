import { FunctionComponent } from "react";
import HomepageServicesContent from "./HomepageServicesContent";
import styles from "./HomepageServices.module.css";

export type HomepageServicesType = {
  className?: string;
};

const HomepageServices: FunctionComponent<HomepageServicesType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.servicesSection, className].join(" ")}>
      <div className={styles.container}>
        <HomepageServicesContent />
      </div>
    </div>
  );
};

export default HomepageServices;
