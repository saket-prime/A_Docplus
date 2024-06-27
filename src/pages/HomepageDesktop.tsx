import { FunctionComponent } from "react";
import HomepageHero from "../components/HomepageHero";
import HomepagePerks from "../components/HomepagePerks";
import HomepageTestimonials from "../components/HomepageTestimonials";
import HomepageServices from "../components/HomepageServices";
import HomepageFeatureContainer from "../components/HomepageFeatureContainer";
import HomepageCommitments from "../components/HomepageCommitments";
import HomepageDwnld from "../components/HomepageDwnld";
import HomepageFeatures from "../components/HomepageFeatures";
import styles from "./HomepageDesktop.module.css";
import FooterDesktop1 from "../components/FooterDesktop1";

const HomepageDesktop: FunctionComponent = () => {
  return (
    <div className={styles.homepageDesktop2}>
      <HomepageHero />
      <HomepagePerks />
      <section className={styles.frameParent}>
        <div className={styles.containerWrapper}>
          <HomepageTestimonials />
        </div>
        <HomepageServices />
      </section>
      <section className={styles.anomalyContainer}>
        <HomepageFeatureContainer />
      </section>
      <section className={styles.docplusChoice}>
        <HomepageCommitments />
      </section>
      <section className={styles.personalizeHealth}>
        <HomepageDwnld />
      </section>
      <FooterDesktop1 />
    </div>
  );
};

export default HomepageDesktop;
