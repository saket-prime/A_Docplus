import { FunctionComponent } from "react";
import CareerAchievementList from "./CareerAchievementList";
import styles from "./CareerAchievementsSection.module.css";

export type CareerAchievementsSectionType = {
  className?: string;
};

const CareerAchievementsSection: FunctionComponent<
  CareerAchievementsSectionType
> = ({ className = "" }) => {
  return (
    <div className={[styles.achievementsSection, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.col}>
          <div className={styles.descriptionContainer}>
            <b className={styles.ourTeamS}>Our Team’s Achievements</b>
            <div className={styles.weOfferA}>
              We offer a variety of specialty care services, so you can get the
              care you need from a specialist who is an expert in their field.
            </div>
          </div>
          <div className={styles.button}>
            <div className={styles.content1}>
              <b className={styles.text}>Learn More</b>
              <img
                className={styles.monotoneAddIcon}
                alt=""
                src="/monotone-add1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.col1}>
          <CareerAchievementList
            prop="251"
            industryHealthAwards="Industry Health Awards"
            frame="/frame4.svg"
          />
          <div className={styles.achievementList}>
            <img className={styles.frameIcon} alt="" src="/frame5.svg" />
            <div className={styles.frame}>
              <div className={styles.lastAchievement}>
                <div className={styles.k}>
                  <span>400</span>
                  <span className={styles.k1}>K</span>
                </div>
                <div className={styles.industryHealthAwards}>Users Saved</div>
              </div>
              <img
                className={styles.solidChevronRightMd}
                alt=""
                src="/solid-chevron-right-md.svg"
              />
            </div>
          </div>
          <CareerAchievementList
            prop="5M"
            industryHealthAwards="AI LLM Data"
            frame="/frame6.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default CareerAchievementsSection;
