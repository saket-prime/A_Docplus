import { FunctionComponent } from "react";
import styles from "./HomepageBenefitsCards.module.css";

export type HomepageBenefitsCardsType = {
  className?: string;
  monotoneAdd?: string;
  actionableInsights?: string;
  asklepiosLeveragesCutting?: string;
};

const HomepageBenefitsCards: FunctionComponent<HomepageBenefitsCardsType> = ({
  className = "",
  monotoneAdd,
  actionableInsights,
  asklepiosLeveragesCutting,
}) => {
  return (
    <div className={[styles.frame, className].join(" ")}>
      <div className={styles.chooseCardSecond}>
        <div className={styles.buttonIconFab}>
          <img
            className={styles.monotoneAddIcon}
            loading="lazy"
            alt=""
            src={monotoneAdd}
          />
        </div>
        <div className={styles.frame1}>
          <div className={styles.frame2}>
            <b className={styles.actionableInsights}>{actionableInsights}</b>
            <div className={styles.asklepiosLeveragesCutting}>
              {asklepiosLeveragesCutting}
            </div>
          </div>
          <div className={styles.frame3}>
            <div className={styles.learnMore}>Learn More</div>
            <img
              className={styles.monotoneAddIcon}
              loading="lazy"
              alt=""
              src="/monotone-add2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageBenefitsCards;
