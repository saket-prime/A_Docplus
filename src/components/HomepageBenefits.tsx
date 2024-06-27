import { FunctionComponent } from "react";
import HomepageBenefitsCards from "./HomepageBenefitsCards";
import styles from "./HomepageBenefits.module.css";

export type HomepageBenefitsType = {
  className?: string;
};

const HomepageBenefits: FunctionComponent<HomepageBenefitsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.row, className].join(" ")}>
      <div className={styles.frame}>
        <div className={styles.chooseCardFirst}>
          <div className={styles.buttonIconFab}>
            <div className={styles.monotoneAdd}>
              <div className={styles.vector} />
              <div className={styles.vector1} />
              <img
                className={styles.insightIconThree}
                alt=""
                src="/vector-18.svg"
              />
            </div>
          </div>
          <div className={styles.cardFirstBody}>
            <div className={styles.frame1}>
              <b className={styles.actionableInsights}>Actionable Insights</b>
              <div className={styles.docplusLeveragesCuttingEdge}>
                DocPlus leverages cutting-edge AI technology to offer
                personalized health assessments.
              </div>
            </div>
            <div className={styles.cardFirstButtonArea}>
              <div className={styles.learnMore}>Learn More</div>
              <img
                className={styles.monotoneAdd}
                loading="lazy"
                alt=""
                src="/monotone-add2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <HomepageBenefitsCards
        monotoneAdd="/monotone-add-112.svg"
        actionableInsights="Personalized AI Healthcare"
        asklepiosLeveragesCutting="Our platform simplifies the healthcare journey. From booking appointments to accessing your health records,"
      />
      <HomepageBenefitsCards
        monotoneAdd="/monotone-add-121@2x.png"
        actionableInsights="Streamlined Experience"
        asklepiosLeveragesCutting="We believe in the power of data. DocPlus provides data-driven insights that help you."
      />
      <HomepageBenefitsCards
        monotoneAdd="/monotone-add-132.svg"
        actionableInsights="Seamless Communication"
        asklepiosLeveragesCutting="We bridge the gap between patients and healthcare providers. Our platform enables."
      />
      <HomepageBenefitsCards
        monotoneAdd="/monotone-add15.svg"
        actionableInsights="Trusted by Professionals"
        asklepiosLeveragesCutting="DocPlus is trusted by both healthcare professionals and pharmaceutical companies."
      />
      <HomepageBenefitsCards
        monotoneAdd="/monotone-add16.svg"
        actionableInsights="Inovation in Healthcare"
        asklepiosLeveragesCutting="At DocPlus, we're committed to advancing healthcare through innovation."
      />
    </div>
  );
};

export default HomepageBenefits;
