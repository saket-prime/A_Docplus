import { FunctionComponent } from "react";
import PlatformAppCard from "./PlatformAppCard";
import styles from "./PlatformApp.module.css";

export type PlatformAppType = {
  className?: string;
};

const PlatformApp: FunctionComponent<PlatformAppType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.lowerCardsWrapper, className].join(" ")}>
      <div className={styles.lowerCards}>
        <div className={styles.reviewTitle}>
          <h1 className={styles.heading}>How Our App Works</h1>
        </div>
        <div className={styles.benefitCards}>
          <div className={styles.frame}>
            <div className={styles.cardRows}>
              <div className={styles.cardItems}>
                <div className={styles.buttonIconFab}>
                  <input className={styles.monotoneAdd} type="checkbox" />
                </div>
                <div className={styles.cardHeadings}>
                  <h2 className={styles.heading1}>Analyze Patient Data</h2>
                  <div className={styles.paragraph}>
                    Our platform begins by helping you discover your unique
                    healthcare journey. Whether you're seeking medical
                    information, booking appointments.
                  </div>
                </div>
                <div className={styles.cardTags}>
                  <div className={styles.tagMaster}>
                    <div className={styles.pricing}>Step 1</div>
                  </div>
                  <div className={styles.benefitCardFooters}>
                    <div className={styles.cardFooterRows}>
                      <div className={styles.atom} />
                      <div className={styles.atom1} />
                      <div className={styles.atom1} />
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={styles.largeCardColumns}
                loading="lazy"
                alt=""
                src="/frame-11@2x.png"
              />
            </div>
          </div>
          <div className={styles.frame}>
            <div className={styles.frame2}>
              <PlatformAppCard
                monotoneAdd="/monotone-add-131.svg"
                heading="Health Personalization"
                paragraph="Once you've embarked on your healthcare journey, our platform provides you with personalized care options."
                pricing="Step 2"
              />
              <div className={styles.frame3}>
                <div className={styles.profileColumn}>
                  <div className={styles.homeFitnessCard}>
                    <div className={styles.content}>
                      <div className={styles.iconContainer}>
                        <img
                          className={styles.monotoneAppleIcon}
                          loading="lazy"
                          alt=""
                          src="/monotone-apple.svg"
                        />
                      </div>
                      <div className={styles.content1}>
                        <div className={styles.fitnessTitle}>Nutrition</div>
                        <div className={styles.fitnessTags}>
                          <div className={styles.tagMaster1}>
                            <div className={styles.pricing1}>Vitamin A</div>
                          </div>
                          <div className={styles.tagMaster2}>
                            <div className={styles.pricing2}>Ibuprofen</div>
                          </div>
                          <div className={styles.tagMaster3}>
                            <div className={styles.pricing3}>2+</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.cardColumnTwo}>
                  <div className={styles.activityCard}>
                    <div className={styles.content2}>
                      <div className={styles.content3}>
                        <div className={styles.icon}>
                          <img
                            className={styles.monotoneAppleIcon}
                            alt=""
                            src="/solid-activity-hiking.svg"
                          />
                        </div>
                        <div className={styles.activityCardHeader}>
                          <div className={styles.workoutTitle}>
                            <div className={styles.cardioWorkout}>Hiking</div>
                            <input
                              className={styles.workoutTime}
                              placeholder="854 Calories"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.imageContainer}>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/vector-4.svg"
                        />
                        <div className={styles.helperWhole} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.cardColumnThree}>
                  <div className={styles.bloodPressureCard}>
                    <div className={styles.icon1}>
                      <img
                        className={styles.monotoneAppleIcon}
                        alt=""
                        src="/solid-droplet-cholesterol.svg"
                      />
                    </div>
                    <div className={styles.workoutTitle}>
                      <div className={styles.pressureTitle}>Cholesterol</div>
                      <div className={styles.text}>
                        <div className={styles.pressureNumber}>50</div>
                        <div className={styles.bpm}>mg</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.activityColumn}>
                    <div className={styles.fitnessTrackerCard}>
                      <div className={styles.content4}>
                        <div className={styles.trackerTitle}>
                          <div className={styles.trackerName}>Calorie</div>
                          <img
                            className={styles.monotoneAppleIcon}
                            alt=""
                            src="/monotone-edit.svg"
                          />
                        </div>
                        <div className={styles.text1}>
                          <div className={styles.calories}>
                            <div className={styles.calorieNumber}>2124</div>
                            <div className={styles.kcal}>kcal</div>
                          </div>
                        </div>
                        <img
                          className={styles.imageContainerIcon}
                          loading="lazy"
                          alt=""
                          src="/image-container.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.sleepScheduleCard}>
                  <div className={styles.content5}>
                    <div className={styles.col}>
                      <div className={styles.image}>
                        <img
                          className={styles.monotoneAppleIcon}
                          loading="lazy"
                          alt=""
                          src="/monotone-sleep-zzz.svg"
                        />
                      </div>
                      <div className={styles.item}>
                        <div className={styles.sleepTimeNumber}>23:15</div>
                        <div className={styles.hMFrom}>6h 25m from now</div>
                      </div>
                    </div>
                    <div className={styles.toggleButton}>
                      <div className={styles.frame4} />
                    </div>
                  </div>
                </div>
                <div className={styles.mainWrapper}>
                  <div className={styles.main}>
                    <div className={styles.item1}>
                      <div className={styles.text2}>
                        <img
                          className={styles.profilePicIcon}
                          loading="lazy"
                          alt=""
                          src="/profile-pic1@2x.png"
                        />
                        <div className={styles.text3}>
                          <div className={styles.sanaeDekomori}>
                            Sanae Dekomori
                          </div>
                          <div className={styles.dekomoriFuwaJp}>
                            dekomori@fuwa.jp
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.monotoneAppleIcon}
                        alt=""
                        src="/monotone-edit-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frame}>
            <div className={styles.cardRows}>
              <PlatformAppCard
                monotoneAdd="/monotone-add-14.svg"
                heading="Receive Health Recommendations"
                paragraph="DocPlus goes beyond the conventional patient experience. We empower you with tools, resources, and educational content to actively manage your health."
                pricing="Step 3"
                propGap="104.5px"
                propBackgroundColor="#242e49"
              />
              <img
                className={styles.largeCardColumns}
                loading="lazy"
                alt=""
                src="/frame-21@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformApp;
