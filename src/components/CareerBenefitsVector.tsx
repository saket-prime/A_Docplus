import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CareerBenefitsVector.module.css";

export type CareerBenefitsVectorType = {
  className?: string;
  monotoneAdd?: string;
  healthCoverage?: string;
  fullHealthBenefits?: string;

  /** Style props */
  propOverflow?: CSSProperties["overflow"];
  propBorderRadius?: CSSProperties["borderRadius"];
};

const CareerBenefitsVector: FunctionComponent<CareerBenefitsVectorType> = ({
  className = "",
  monotoneAdd,
  healthCoverage,
  fullHealthBenefits,
  propOverflow,
  propBorderRadius,
}) => {
  const monotoneAddIcon3Style: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
      borderRadius: propBorderRadius,
    };
  }, [propOverflow, propBorderRadius]);

  return (
    <div className={[styles.vector, className].join(" ")}>
      <div className={styles.benefitItem}>
        <div className={styles.buttonIconFab}>
          <img
            className={styles.monotoneAddIcon}
            alt=""
            src={monotoneAdd}
            style={monotoneAddIcon3Style}
          />
        </div>
        <div className={styles.benefitDetails}>
          <div className={styles.healthCoverage}>{healthCoverage}</div>
          <div className={styles.fullHealthBenefits}>{fullHealthBenefits}</div>
        </div>
      </div>
    </div>
  );
};

export default CareerBenefitsVector;
