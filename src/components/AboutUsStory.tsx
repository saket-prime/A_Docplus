import { FunctionComponent } from "react";
import AboutUsStoryRows from "./AboutUsStoryRows";
import AboutUsBtn2 from "./AboutUsBtn2";
import styles from "./AboutUsStory.module.css";

export type AboutUsStoryType = {
  className?: string;
};

const AboutUsStory: FunctionComponent<AboutUsStoryType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.story, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.storyTitle}>
          <h1 className={styles.heading}>Our Story</h1>
        </div>
        <div className={styles.illustrationContainerParent}>
          <div className={styles.illustrationContainer}>
            <img className={styles.vectorIcon} alt="" src="/vector-11.svg" />
            <div className={styles.frameParent}>
              <AboutUsStoryRows
                text="1998"
                milestoneTitle="Inception of a Vision"
                theJourneyOfDocPlusBegins="The journey of DocPlus begins with a vision to revolutionize healthcare design and provide innovative solutions."
              />
              <div className={styles.ourStoryTimelineWrapper}>
                <div className={styles.ourStoryTimeline}>
                  <div className={styles.milestoneContent}>
                    <div className={styles.milestoneHeading}>
                      Building The Foundations
                    </div>
                    <div className={styles.milestoneSubheading}>
                      Over the years, we laid the foundations for our healthcare
                      network, focusing on excellence in patient care and
                      medical research.
                    </div>
                  </div>
                  <div className={styles.buttonIconFab}>
                    <img
                      className={styles.monotoneAddIcon}
                      alt=""
                      src="/monotone-add-5.svg"
                    />
                  </div>
                  <div className={styles.text}>2008</div>
                </div>
              </div>
              <AboutUsStoryRows
                text="2016"
                milestoneTitle="Expanding Horizons"
                theJourneyOfDocPlusBegins="DocPlus expands its reach, opening multiple state-of-the-art hospitals and clinics, making quality healthcare accessible to more communities."
              />
              <div className={styles.ourStoryTimelineWrapper}>
                <div className={styles.ourStoryTimeline1}>
                  <div className={styles.milestoneContent}>
                    <div className={styles.milestoneHeading}>
                      Decade of Achievements
                    </div>
                    <div className={styles.nestedSubheading}>
                      <p className={styles.weCelebrateA}>
                        We celebrate a decade of remarkable achievements, from
                        groundbreaking medical research to numerous patient
                        success stories.
                      </p>
                    </div>
                  </div>
                  <div className={styles.buttonIconFab}>
                    <img
                      className={styles.monotoneAddIcon}
                      alt=""
                      src="/monotone-add-5.svg"
                    />
                  </div>
                  <div className={styles.text}>2019</div>
                </div>
              </div>
              <AboutUsStoryRows
                text="2024"
                milestoneTitle="Continuing The legacy"
                theJourneyOfDocPlusBegins="In the face of global challenges, DocPlus remains steadfast in its commitment to advancing healthcare, ensuring a healthier future for all."
              />
            </div>
          </div>
          <div className={styles.callToActionButtonWrapper}>
            <div className={styles.callToActionButton}>
              <button className={styles.frame}>
                <img
                  className={styles.solidDoubleChevronRight}
                  alt=""
                  src="/solid-double-chevron-right.svg"
                />
                <div className={styles.navigateRightTo}>
                  Navigate right to explore
                </div>
              </button>
              <AboutUsBtn2 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsStory;
