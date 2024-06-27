import { FunctionComponent } from "react";
import FAQTab from "./FAQTab";
import FAQCallToAction from "./FAQCallToAction";
import FAQGuaranteeCard from "./FAQGuaranteeCard";
import styles from "./FAQGuaranteeDescription.module.css";

export type FAQGuaranteeDescriptionType = {
  className?: string;
};

const FAQGuaranteeDescription: FunctionComponent<
  FAQGuaranteeDescriptionType
> = ({ className = "" }) => {
  return (
    <div className={[styles.guaranteeDescription, className].join(" ")}>
      <FAQTab />
      <FAQCallToAction />
      <div className={styles.helpLinks}>
        <FAQGuaranteeCard
          monotoneAdd="/monotone-add26.svg"
          confidentialityAssurance="Confidentiality Assurance"
          ourRobustPrivacyAndSecuri="Our robust privacy and security measures ensure that your sensitive health data is handled"
          footerLogo="Learn More"
          monotoneAdd1="/monotone-add-13.svg"
        />
        <FAQGuaranteeCard
          monotoneAdd="/monotone-add27.svg"
          confidentialityAssurance=" User Trust and Confidence"
          ourRobustPrivacyAndSecuri="Transparent data handling practices and compliance with regulations build trust among users"
          footerLogo="Learn More"
          monotoneAdd1="/monotone-add-13.svg"
          propFlex="1"
          propFlexDirection="column"
          propPadding="0px var(--padding-6xl)"
          propGap="32px"
          propMinWidth="281px"
          propAlignSelf="unset"
          propBorderRadius="unset"
          propBackgroundColor="unset"
          propOverflow="unset"
          propFlexWrap="unset"
          propBorderRadius1="11px"
          propBackgroundColor1="#f2f5f9"
          propOverflow1="hidden"
          propFlexDirection1="row"
          propPadding1="16px"
          propHeight="unset"
          propWidth="unset"
          propPosition="unset"
          propRight="unset"
          propHeight1="24px"
          propWidth1="24px"
          propPosition1="relative"
          propOverflow2="unset"
          propLeft="unset"
          propTop="unset"
          propTransform="unset"
          propAlignSelf1="stretch"
          propGap1="8px"
          propWidth2="unset"
          propMinWidth1="unset"
          propFontSize="20px"
          propLetterSpacing="-0.01em"
          propTextAlign="center"
          propLineHeight="unset"
          propTextAlign1="center"
          propBorderRadius2="unset"
          propBackgroundColor2="unset"
          propPadding2="unset"
          propGap2="12px"
          propLetterSpacing1="-0.01em"
          propDisplay="inline-block"
          propColor="#0f67fe"
          propMinWidth2="86px"
          propFontWeight="unset"
          propFontStyle="unset"
          propMinHeight="unset"
        />
        <FAQGuaranteeCard
          monotoneAdd="/monotone-add28.svg"
          confidentialityAssurance="Continuous Vigilance"
          ourRobustPrivacyAndSecuri="Regular security audits and assessments, coupled with continuous improvement practices."
          footerLogo="Learn More"
          monotoneAdd1="/monotone-add-13.svg"
          propFlex="1"
          propFlexDirection="column"
          propPadding="0px var(--padding-6xl)"
          propGap="32px"
          propMinWidth="281px"
          propAlignSelf="unset"
          propBorderRadius="unset"
          propBackgroundColor="unset"
          propOverflow="unset"
          propFlexWrap="unset"
          propBorderRadius1="11px"
          propBackgroundColor1="#f2f5f9"
          propOverflow1="hidden"
          propFlexDirection1="row"
          propPadding1="16px"
          propHeight="unset"
          propWidth="unset"
          propPosition="unset"
          propRight="unset"
          propHeight1="24px"
          propWidth1="24px"
          propPosition1="relative"
          propOverflow2="unset"
          propLeft="unset"
          propTop="unset"
          propTransform="unset"
          propAlignSelf1="stretch"
          propGap1="8px"
          propWidth2="unset"
          propMinWidth1="unset"
          propFontSize="20px"
          propLetterSpacing="-0.01em"
          propTextAlign="center"
          propLineHeight="unset"
          propTextAlign1="center"
          propBorderRadius2="unset"
          propBackgroundColor2="unset"
          propPadding2="unset"
          propGap2="12px"
          propLetterSpacing1="-0.01em"
          propDisplay="inline-block"
          propColor="#0f67fe"
          propMinWidth2="86px"
          propFontWeight="unset"
          propFontStyle="unset"
          propMinHeight="unset"
        />
      </div>
    </div>
  );
};

export default FAQGuaranteeDescription;
