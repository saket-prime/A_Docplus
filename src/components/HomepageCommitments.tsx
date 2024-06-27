import { FunctionComponent } from "react";
import HomepageBenefits from "./HomepageBenefits";
import styles from "./HomepageCommitments.module.css";

export type HomepageCommitmentsType = {
  className?: string;
};

const HomepageCommitments: FunctionComponent<HomepageCommitmentsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.choiceWrapper}>
        <div className={styles.choiceLabel}>
          <div className={styles.labelMain}>
            <div className={styles.choiceAtom}>
              <div className={styles.atom} />
            </div>
            <b className={styles.text}>Our Commitment</b>
          </div>
          <h1 className={styles.whyChooseDocplus}>Why Choose docplus?</h1>
        </div>
        <div className={styles.tagMaster}>
          <div className={styles.pricing}>6 Benefits</div>
        </div>
      </div>
      <HomepageBenefits />
      <div className={styles.viewMoreWrapper}>
        <button className={styles.button}>
          <b className={styles.text1}>View All Benefits</b>
        </button>
      </div>
    </div>
  );
};

export default HomepageCommitments;
