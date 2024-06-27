import { FunctionComponent } from "react";
import FAQAccordionCard from "./FAQAccordionCard";
import styles from "./ServicesBenefits.module.css";

export type ServicesBenefitsType = {
  className?: string;
};

const ServicesBenefits: FunctionComponent<ServicesBenefitsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.benefitCards, className].join(" ")}>
      <div className={styles.benefitItem}>
        <div className={styles.vector}>
          <div className={styles.benefitImage}>
            <div className={styles.streamlinedProcess}>Streamlined Process</div>
            <img
              className={styles.solidClockIcon}
              alt=""
              src="/solid-clock.svg"
            />
          </div>
        </div>
        <div className={styles.vector1}>
          <img className={styles.solidAddIcon} alt="" src="/solid-add.svg" />
        </div>
      </div>
      <div className={styles.benefitCardItems}>
        <div className={styles.vector2}>
          <div className={styles.benefitTwoImage}>99%</div>
          <div className={styles.benefitTwoImage1}>98%</div>
          <div className={styles.benefitThreeImage}>97%</div>
          <div className={styles.benefitFourImage}>96%</div>
          <div className={styles.benefitFiveImage}>95%</div>
        </div>
        <div className={styles.vector3}>
          <FAQAccordionCard
            howDoesDocplusWork="Hi Accuracy"
            monotoneAdd="/monotone-focus.svg"
            howDoesDocplusAlignSelf="unset"
            howDoesDocplusBorderRadius="unset"
            howDoesDocplusBackgroundColor="unset"
            howDoesDocplusOverflow="unset"
            howDoesDocplusFlexDirection="column"
            howDoesDocplusFlexWrap="unset"
            howDoesDocplusPadding="unset"
            howDoesDocplusGap="75px"
            howDoesDocplusFlex="1"
            buttonIconFABFlex="unset"
            buttonIconFABDisplay="unset"
            buttonIconFABColor="#fff"
            buttonIconFABMinWidth="unset"
            buttonIconFABAlignSelf="stretch"
            buttonIconFABFontWeight="800"
            buttonIconFABFontSize="20px"
            buttonIconFABLineHeight="unset"
            monotoneAddIconBorderRadius="unset"
            monotoneAddIconBackgroundColor="unset"
            monotoneAddIconOverflow="unset"
            monotoneAddIconPadding="unset"
            monotoneAddIconAlignSelf="stretch"
            propHeight="48px"
            propWidth="48px"
          />
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </div>
      <div className={styles.benefitItem1}>
        <div className={styles.vector4}>
          <img
            className={styles.solidDescriptionIcon}
            alt=""
            src="/solid-description.svg"
          />
        </div>
        <div className={styles.vector5}>
          <div className={styles.frame}>
            <div className={styles.streamlinedProcess}>AI/ML Technology</div>
            <img
              className={styles.solidProcessorIcon}
              alt=""
              src="/solid-processor.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBenefits;
