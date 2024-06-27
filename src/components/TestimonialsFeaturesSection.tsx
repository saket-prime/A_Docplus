import { FunctionComponent } from "react";
import AIHealthAssessmentBenefitsCard from "./AIHealthAssessmentBenefitsCard";
import styles from "./TestimonialsFeaturesSection.module.css";

export type TestimonialsFeaturesSectionType = {
  className?: string;
};

const TestimonialsFeaturesSection: FunctionComponent<
  TestimonialsFeaturesSectionType
> = ({ className = "" }) => {
  return (
    <section className={[styles.featuresSection, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <div className={styles.tabGroupText}>
              <div className={styles.tabSingle}>
                <b className={styles.a}>AI Health Asisstant</b>
              </div>
              <div className={styles.tabSingle1}>
                <b className={styles.a1}>Predictive Health</b>
              </div>
              <div className={styles.tabSingle}>
                <b className={styles.a2}>1 Month</b>
              </div>
              <div className={styles.tabSingle}>
                <b className={styles.a2}>1 Year</b>
              </div>
              <input
                className={styles.tabSingle4}
                placeholder="Health Analytics"
                type="text"
              />
            </div>
            <h1 className={styles.aiHealthAssistant}>
              AI Health Assistant At Your Fingertips.
            </h1>
            <div className={styles.assistantFeatures}>
              <div className={styles.personalizedWellnessFeature}>
                <div className={styles.frame}>
                  <div className={styles.buttonIconFab}>
                    <img
                      className={styles.monotoneAddIcon}
                      loading="lazy"
                      alt=""
                      src="/monotone-add-4.svg"
                    />
                  </div>
                  <div className={styles.wellnessTitle}>
                    <div className={styles.personalizedWellness}>
                      Personalized Wellness
                    </div>
                    <div className={styles.experienceAPersonalized}>
                      Experience a personalized wellness journey with tailored
                      insights and recommendations.
                    </div>
                  </div>
                  <div className={styles.button}>
                    <div className={styles.content1}>
                      <a className={styles.text}>Learn More</a>
                      <img
                        className={styles.monotoneAddIcon1}
                        loading="lazy"
                        alt=""
                        src="/monotone-add-5.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frame}>
                  <div className={styles.buttonIconFab}>
                    <img
                      className={styles.monotoneAddIcon2}
                      loading="lazy"
                      alt=""
                      src="/monotone-add-6.svg"
                    />
                  </div>
                  <div className={styles.wellnessTitle}>
                    <div className={styles.personalizedWellness}>
                      Proactive Suggestions
                    </div>
                    <div className={styles.experienceAPersonalized}>
                      Leverage the power of predictive health analytics for
                      proactive recommendations.
                    </div>
                  </div>
                  <div className={styles.button}>
                    <div className={styles.content1}>
                      <a className={styles.text}>Learn More</a>
                      <img
                        className={styles.monotoneAddIcon1}
                        alt=""
                        src="/monotone-add-5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.personalizedWellnessFeature}>
                <AIHealthAssessmentBenefitsCard
                  vector="/vector-3.svg"
                  instantAccessibility="Personalized Wellness"
                  accessHealthGuidanceAndIn="Join a thriving health community where you can connect, share experiences."
                  monotoneAdd="/monotone-add-5.svg"
                  buttonIconFABBorderRadius="unset"
                  buttonIconFABBackgroundColor="unset"
                  buttonIconFABPadding="unset"
                  buttonIconFABGap="24px"
                  buttonIconFABMinWidth="180px"
                  monotoneAddBackgroundColor="#fff"
                  monotoneAddPadding="16px"
                  vectorIconBorderRadius="unset"
                  vectorWidth="75%"
                  vectorTop="58.33%"
                  vectorRight="12.5%"
                  vectorBottom="16.67%"
                  vectorLeft="12.5%"
                  vectorHeight="25%"
                  vectorBorderRadius="3px"
                  featureLabelsHeight="41.67%"
                  featureLabelsWidth="41.67%"
                  featureLabelsTop="8.33%"
                  featureLabelsRight="29.17%"
                  featureLabelsBottom="50%"
                  featureLabelsLeft="29.17%"
                  featureLabelsBorder="2px solid var(--asklepios-gray-80)"
                  propOverflow="hidden"
                />
                <div className={styles.frame}>
                  <div className={styles.buttonIconFab}>
                    <img
                      className={styles.monotoneAddIcon2}
                      alt=""
                      src="/monotone-add-9.svg"
                    />
                  </div>
                  <div className={styles.wellnessTitle}>
                    <div className={styles.personalizedWellness}>
                      Emergency Support
                    </div>
                    <div className={styles.experienceAPersonalized}>
                      Elevate your health and wellness journey with DocPlus,
                      where personalization
                    </div>
                  </div>
                  <div className={styles.button}>
                    <div className={styles.content1}>
                      <a className={styles.text}>Learn More</a>
                      <img
                        className={styles.monotoneAddIcon1}
                        alt=""
                        src="/monotone-add-5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section1}>
            <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
            <img
              className={styles.image7Icon}
              loading="lazy"
              alt=""
              src="/image-7@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsFeaturesSection;
