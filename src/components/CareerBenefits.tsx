import { FunctionComponent } from "react";
import CareerBenefitsVector from "./CareerBenefitsVector";
import styles from "./CareerBenefits.module.css";

export type CareerBenefitsType = {
  className?: string;
};

const CareerBenefits: FunctionComponent<CareerBenefitsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.benefits, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.benefitHeader}>
          <div
            className={styles.employeePerksBenefits}
          >{`Employee Perks & Benefits`}</div>
          <div className={styles.perkTag}>
            <div className={styles.tagMaster}>
              <div className={styles.pricing}>12 Total Benefits</div>
            </div>
          </div>
        </div>
        <div className={styles.benefitList}>
          <CareerBenefitsVector
            monotoneAdd="/monotone-add6.svg"
            healthCoverage="Health Coverage"
            fullHealthBenefits="Full Health Benefits"
          />
          <CareerBenefitsVector
            monotoneAdd="/monotone-add20.svg"
            healthCoverage="Free Education"
            fullHealthBenefits="Free development for all"
            propOverflow="unset"
            propBorderRadius="unset"
          />
          <CareerBenefitsVector
            monotoneAdd="/monotone-add21.svg"
            healthCoverage="Good Salary"
            fullHealthBenefits="Starting at $250K"
            propOverflow="unset"
            propBorderRadius="25px"
          />
          <CareerBenefitsVector
            monotoneAdd="/monotone-add22@2x.png"
            healthCoverage={`Innovation & Impact`}
            fullHealthBenefits="Let’s make innovation"
            propOverflow="unset"
            propBorderRadius="unset"
          />
          <CareerBenefitsVector
            monotoneAdd="/monotone-add16.svg"
            healthCoverage="Technological"
            fullHealthBenefits="Let’s make some tech."
            propOverflow="hidden"
            propBorderRadius="unset"
          />
        </div>
        <div className={styles.benefitHeader}>
          <div className={styles.progressBar}>
            <div className={styles.frame}>
              <div className={styles.progressBarAtom} />
              <div className={styles.progressBarAtom1} />
              <div className={styles.progressBarAtom1} />
              <div className={styles.progressBarAtom1} />
            </div>
          </div>
          <div className={styles.addButtons}>
            <div className={styles.buttonIconFab}>
              <img
                className={styles.monotoneAddIcon}
                alt=""
                src="/monotone-add23.svg"
              />
            </div>
            <div className={styles.buttonIconFab}>
              <img
                className={styles.monotoneAddIcon}
                alt=""
                src="/monotone-add2.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerBenefits;
