import { FunctionComponent } from "react";
import HomepageFeaturesRow2 from "./HomepageFeaturesRow2";
import HomepageFeaturesRow1 from "./HomepageFeaturesRow1";
import HomepageFeaturesRow from "./HomepageFeaturesRow";
import styles from "./HomepageFeatureContainer.module.css";

export type HomepageFeatureContainerType = {
  className?: string;
};

const HomepageFeatureContainer: FunctionComponent<
  HomepageFeatureContainerType
> = ({ className = "" }) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <h1 className={styles.heading}>Our Core Features</h1>
      <div className={styles.anomalyWrapper}>
        <div className={styles.rowParent}>
          <HomepageFeaturesRow2 />
          <HomepageFeaturesRow1 />
          <HomepageFeaturesRow />
        </div>
      </div>
    </div>
  );
};

export default HomepageFeatureContainer;
