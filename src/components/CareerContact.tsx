import { FunctionComponent, useCallback } from "react";
import FAQGuaranteeCard from "./FAQGuaranteeCard";
import styles from "./CareerContact.module.css";

export type CareerContactType = {
  className?: string;
};

const CareerContact: FunctionComponent<CareerContactType> = ({
  className = "",
}) => {
  const onButtonPrimaryContainerClick = useCallback(() => {
    // Please sync "Contact Us (Desktop)" to the project
  }, []);

  return (
    <div className={[styles.jobAlert, className].join(" ")}>
      <div className={styles.ctaSection}>
        <FAQGuaranteeCard
          monotoneAdd="/empty-placeholder@2x.png"
          confidentialityAssurance="Don’t See a Job You Look For?"
          ourRobustPrivacyAndSecuri="Don’t worry! If you’re not seeing the job, let’s get in touch to discuss possibilities to enhance life with AI."
          footerLogo="Reach out to Us"
          monotoneAdd1="/monotone-health-plus1.svg"
          propFlex="unset"
          propFlexDirection="row"
          propPadding="var(--padding-71xl) var(--padding-99xl) var(--padding-71xl) 0px"
          propGap="20px"
          propMinWidth="unset"
          propAlignSelf="stretch"
          propBorderRadius="24px"
          propBackgroundColor="#d0e4ff"
          propOverflow="hidden"
          propFlexWrap="wrap"
          propHeight1="360px"
          propWidth1="418.5px"
          propPosition1="relative"
          propOverflow2="unset"
          propLeft="unset"
          propTop="unset"
          propTransform="unset"
          propAlignSelf1="unset"
          propGap1="42px"
          propWidth2="418.5px"
          propMinWidth1="300px"
          propFontSize="48px"
          propLetterSpacing="-0.02em"
          propTextAlign="left"
          propLineHeight="56px"
          propTextAlign1="left"
          propBorderRadius2="12px"
          propBackgroundColor2="#0f67fe"
          propPadding2="var(--padding-xl) var(--padding-45xl)"
          propGap2="8px"
          propLetterSpacing1="-0.02em"
          propDisplay="unset"
          propColor="#fff"
          propMinWidth2="unset"
          propFontWeight="700"
          propFontStyle="italic"
          propMinHeight="24px"
          onButtonPrimaryContainerClick={onButtonPrimaryContainerClick}
        />
      </div>
    </div>
  );
};

export default CareerContact;
