import { FunctionComponent } from "react";
import styles from "./CareerAchievementList.module.css";

export type CareerAchievementListType = {
  className?: string;
  prop?: string;
  industryHealthAwards?: string;
  frame?: string;
};

const CareerAchievementList: FunctionComponent<CareerAchievementListType> = ({
  className = "",
  prop,
  industryHealthAwards,
  frame,
}) => {
  return (
    <div className={[styles.achievementList, className].join(" ")}>
      <div className={styles.frame}>
        <div className={styles.achievementItem}>
          <div className={styles.emptyAchievement}>
            <span>{prop}</span>
            <span className={styles.span}>+</span>
          </div>
          <div className={styles.industryHealthAwards}>
            {industryHealthAwards}
          </div>
        </div>
        <img
          className={styles.solidChevronRightMd}
          alt=""
          src="/solid-chevron-right-md.svg"
        />
      </div>
      <img className={styles.frameIcon} alt="" src={frame} />
    </div>
  );
};

export default CareerAchievementList;
