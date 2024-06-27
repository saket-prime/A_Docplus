import { FunctionComponent } from "react";
import AIHealthAssessmentBenefitsCard from "./AIHealthAssessmentBenefitsCard";
import styles from "./AIHealthAssessmentBenefitCards.module.css";

export type AIHealthAssessmentBenefitCardsType = {
  className?: string;
};

const AIHealthAssessmentBenefitCards: FunctionComponent<
  AIHealthAssessmentBenefitCardsType
> = ({ className = "" }) => {
  return (
    <div className={[styles.section, className].join(" ")}>
      <AIHealthAssessmentBenefitsCard
        vector="/vector-33.svg"
        instantAccessibility="Instant Accessibility"
        accessHealthGuidanceAndIn="Access health guidance and information whenever you need it, providing instant support."
        monotoneAdd="/monotone-add-13.svg"
      />
      <div className={styles.frame}>
        <div className={styles.buttonIconFab}>
          <img
            className={styles.monotoneAddIcon}
            loading="lazy"
            alt=""
            src="/monotone-add-113.svg"
          />
        </div>
        <div className={styles.frame1}>
          <div className={styles.instantAccessibility}>
            Personalized Guidance
          </div>
          <div className={styles.accessHealthGuidance}>
            Receive personalized health insights and advice, tailored to your
            individual wellness goals and health data.
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.content}>
            <a className={styles.text}>Learn More</a>
            <img
              className={styles.monotoneAddIcon}
              loading="lazy"
              alt=""
              src="/monotone-add-13.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frame}>
        <div className={styles.buttonIconFab}>
          <img
            className={styles.monotoneAddIcon}
            loading="lazy"
            alt=""
            src="/monotone-add-133.svg"
          />
        </div>
        <div className={styles.frame1}>
          <div className={styles.instantAccessibility}>
            Conversational Interaction
          </div>
          <div className={styles.accessHealthGuidance}>
            Engage in natural and informative conversations, making wellness
            discussions approachable.
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.content}>
            <a className={styles.text}>Learn More</a>
            <img
              className={styles.monotoneAddIcon}
              loading="lazy"
              alt=""
              src="/monotone-add-13.svg"
            />
          </div>
        </div>
      </div>
      <AIHealthAssessmentBenefitsCard
        vector="/vector-42.svg"
        instantAccessibility="Continuous Learning"
        accessHealthGuidanceAndIn="The AI Health Assistant continuously learns from user interactions, adapting its responses."
        monotoneAdd="/monotone-add-13.svg"
        buttonIconFABBorderRadius="24px"
        buttonIconFABBackgroundColor="#fff"
        buttonIconFABPadding="12px 24px"
        buttonIconFABGap="32px"
        buttonIconFABMinWidth="351px"
        monotoneAddBackgroundColor="#f2f5f9"
        monotoneAddPadding="0px 20px 0px 0px"
        vectorIconBorderRadius="25px"
        vectorWidth="58.33%"
        vectorTop="12.5%"
        vectorRight="20.83%"
        vectorBottom="12.5%"
        vectorLeft="20.83%"
        vectorHeight="75%"
        vectorBorderRadius="unset"
        featureLabelsHeight="25%"
        featureLabelsWidth="25%"
        featureLabelsTop="25%"
        featureLabelsRight="37.5%"
        featureLabelsBottom="50%"
        featureLabelsLeft="37.5%"
        featureLabelsBorder="2px solid var(--asklepios-gray-60)"
        propOverflow="unset"
      />
      <div className={styles.frame}>
        <div className={styles.buttonIconFab}>
          <img
            className={styles.monotoneAddIcon}
            loading="lazy"
            alt=""
            src="/monotone-add-162.svg"
          />
        </div>
        <div className={styles.frame1}>
          <div className={styles.instantAccessibility}>
            Proactive Health Monitoring
          </div>
          <div className={styles.accessHealthGuidance}>
            Leverage the power of AI-driven predictive analytics for proactive
            health insights.
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.content}>
            <a className={styles.text}>Learn More</a>
            <img
              className={styles.monotoneAddIcon}
              loading="lazy"
              alt=""
              src="/monotone-add-13.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frame}>
        <div className={styles.buttonIconFab}>
          <img
            className={styles.monotoneAddIcon}
            loading="lazy"
            alt=""
            src="/monotone-add-18.svg"
          />
        </div>
        <div className={styles.frame1}>
          <div className={styles.instantAccessibility}>
            Empowering Self Care
          </div>
          <div className={styles.accessHealthGuidance}>
            Describe your symptoms to the AI Health Assistant for initial
            assessments, potential causes,
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.content}>
            <a className={styles.text}>Learn More</a>
            <img
              className={styles.monotoneAddIcon}
              alt=""
              src="/monotone-add-13.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIHealthAssessmentBenefitCards;
