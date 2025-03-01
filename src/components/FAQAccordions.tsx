import { FunctionComponent } from "react";
import FAQAccordionCard from "./FAQAccordionCard";
import styles from "./FAQAccordions.module.css";

export type FAQAccordionsType = {
  className?: string;
};

const FAQAccordions: FunctionComponent<FAQAccordionsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.fAQAccordions, className].join(" ")}>
      <FAQAccordionCard
        howDoesDocplusWork="How does docplus work?"
        monotoneAdd="/solid-eye-4.svg"
      />
      <div className={styles.faqAccordion}>
        <FAQAccordionCard
          howDoesDocplusWork="What is DocPlus?"
          monotoneAdd="/monotone-add25.svg"
          howDoesDocplusAlignSelf="stretch"
          howDoesDocplusBorderRadius="unset"
          howDoesDocplusBackgroundColor="unset"
          howDoesDocplusOverflow="unset"
          howDoesDocplusFlexDirection="row"
          howDoesDocplusFlexWrap="wrap"
          howDoesDocplusPadding="unset"
          howDoesDocplusGap="16px"
          howDoesDocplusFlex="unset"
          buttonIconFABFlex="1"
          buttonIconFABDisplay="inline-block"
          buttonIconFABColor="#fff"
          buttonIconFABMinWidth="116px"
          buttonIconFABAlignSelf="unset"
          buttonIconFABFontWeight="unset"
          buttonIconFABFontSize="18px"
          buttonIconFABLineHeight="unset"
          monotoneAddIconBorderRadius="10px"
          monotoneAddIconBackgroundColor="#3d4966"
          monotoneAddIconOverflow="hidden"
          monotoneAddIconPadding="12px 24px"
          monotoneAddIconAlignSelf="unset"
          propHeight="24px"
          propWidth="24px"
        />
        <div className={styles.docplusIsAn}>
          DocPlus is an AI-driven personalized healthcare platform that utilizes
          cutting-edge technology to provide tailored health assessments and
          recommendations.
        </div>
      </div>
      <FAQAccordionCard
        howDoesDocplusWork="What are docplus benefits?"
        monotoneAdd="/solid-eye-4.svg"
        howDoesDocplusAlignSelf="stretch"
        howDoesDocplusBorderRadius="16px"
        howDoesDocplusBackgroundColor="#fff"
        howDoesDocplusOverflow="hidden"
        howDoesDocplusFlexDirection="row"
        howDoesDocplusFlexWrap="wrap"
        howDoesDocplusPadding="16px"
        howDoesDocplusGap="16px"
        howDoesDocplusFlex="unset"
        buttonIconFABFlex="1"
        buttonIconFABDisplay="inline-block"
        buttonIconFABColor="#242e49"
        buttonIconFABMinWidth="187px"
        buttonIconFABAlignSelf="unset"
        buttonIconFABFontWeight="unset"
        buttonIconFABFontSize="18px"
        buttonIconFABLineHeight="unset"
        monotoneAddIconBorderRadius="10px"
        monotoneAddIconBackgroundColor="#f2f5f9"
        monotoneAddIconOverflow="hidden"
        monotoneAddIconPadding="12px 24px"
        monotoneAddIconAlignSelf="unset"
        propHeight="24px"
        propWidth="24px"
      />
      <FAQAccordionCard
        howDoesDocplusWork="How much does it cost?"
        monotoneAdd="/solid-eye-4.svg"
        howDoesDocplusAlignSelf="stretch"
        howDoesDocplusBorderRadius="16px"
        howDoesDocplusBackgroundColor="#fff"
        howDoesDocplusOverflow="hidden"
        howDoesDocplusFlexDirection="row"
        howDoesDocplusFlexWrap="wrap"
        howDoesDocplusPadding="16px"
        howDoesDocplusGap="16px"
        howDoesDocplusFlex="unset"
        buttonIconFABFlex="1"
        buttonIconFABDisplay="inline-block"
        buttonIconFABColor="#242e49"
        buttonIconFABMinWidth="162px"
        buttonIconFABAlignSelf="unset"
        buttonIconFABFontWeight="unset"
        buttonIconFABFontSize="18px"
        buttonIconFABLineHeight="unset"
        monotoneAddIconBorderRadius="10px"
        monotoneAddIconBackgroundColor="#f2f5f9"
        monotoneAddIconOverflow="hidden"
        monotoneAddIconPadding="12px 24px"
        monotoneAddIconAlignSelf="unset"
        propHeight="24px"
        propWidth="24px"
      />
      <FAQAccordionCard
        howDoesDocplusWork="How can I get started with docplus?"
        monotoneAdd="/solid-eye-4.svg"
        howDoesDocplusAlignSelf="stretch"
        howDoesDocplusBorderRadius="16px"
        howDoesDocplusBackgroundColor="#fff"
        howDoesDocplusOverflow="hidden"
        howDoesDocplusFlexDirection="row"
        howDoesDocplusFlexWrap="wrap"
        howDoesDocplusPadding="16px"
        howDoesDocplusGap="16px"
        howDoesDocplusFlex="unset"
        buttonIconFABFlex="1"
        buttonIconFABDisplay="inline-block"
        buttonIconFABColor="#242e49"
        buttonIconFABMinWidth="243px"
        buttonIconFABAlignSelf="unset"
        buttonIconFABFontWeight="unset"
        buttonIconFABFontSize="18px"
        buttonIconFABLineHeight="unset"
        monotoneAddIconBorderRadius="10px"
        monotoneAddIconBackgroundColor="#f2f5f9"
        monotoneAddIconOverflow="hidden"
        monotoneAddIconPadding="12px 24px"
        monotoneAddIconAlignSelf="unset"
        propHeight="24px"
        propWidth="24px"
      />
      <FAQAccordionCard
        howDoesDocplusWork="Is docplus a substitute for medical advice?"
        monotoneAdd="/solid-eye-4.svg"
        howDoesDocplusAlignSelf="stretch"
        howDoesDocplusBorderRadius="16px"
        howDoesDocplusBackgroundColor="#fff"
        howDoesDocplusOverflow="hidden"
        howDoesDocplusFlexDirection="row"
        howDoesDocplusFlexWrap="wrap"
        howDoesDocplusPadding="16px"
        howDoesDocplusGap="16px"
        howDoesDocplusFlex="unset"
        buttonIconFABFlex="1"
        buttonIconFABDisplay="inline-block"
        buttonIconFABColor="#242e49"
        buttonIconFABMinWidth="288px"
        buttonIconFABAlignSelf="unset"
        buttonIconFABFontWeight="unset"
        buttonIconFABFontSize="18px"
        buttonIconFABLineHeight="unset"
        monotoneAddIconBorderRadius="10px"
        monotoneAddIconBackgroundColor="#f2f5f9"
        monotoneAddIconOverflow="hidden"
        monotoneAddIconPadding="12px 24px"
        monotoneAddIconAlignSelf="unset"
        propHeight="24px"
        propWidth="24px"
      />
      <FAQAccordionCard
        howDoesDocplusWork="How does docplus protect my privacy?"
        monotoneAdd="/solid-eye-4.svg"
        howDoesDocplusAlignSelf="stretch"
        howDoesDocplusBorderRadius="16px"
        howDoesDocplusBackgroundColor="#fff"
        howDoesDocplusOverflow="hidden"
        howDoesDocplusFlexDirection="row"
        howDoesDocplusFlexWrap="wrap"
        howDoesDocplusPadding="16px"
        howDoesDocplusGap="16px"
        howDoesDocplusFlex="unset"
        buttonIconFABFlex="1"
        buttonIconFABDisplay="inline-block"
        buttonIconFABColor="#242e49"
        buttonIconFABMinWidth="266px"
        buttonIconFABAlignSelf="unset"
        buttonIconFABFontWeight="unset"
        buttonIconFABFontSize="18px"
        buttonIconFABLineHeight="unset"
        monotoneAddIconBorderRadius="10px"
        monotoneAddIconBackgroundColor="#f2f5f9"
        monotoneAddIconOverflow="hidden"
        monotoneAddIconPadding="12px 24px"
        monotoneAddIconAlignSelf="unset"
        propHeight="24px"
        propWidth="24px"
      />
      <FAQAccordionCard
        howDoesDocplusWork="What is DocPlus?"
        monotoneAdd="/solid-eye-4.svg"
        howDoesDocplusAlignSelf="stretch"
        howDoesDocplusBorderRadius="16px"
        howDoesDocplusBackgroundColor="#fff"
        howDoesDocplusOverflow="hidden"
        howDoesDocplusFlexDirection="row"
        howDoesDocplusFlexWrap="wrap"
        howDoesDocplusPadding="16px"
        howDoesDocplusGap="16px"
        howDoesDocplusFlex="unset"
        buttonIconFABFlex="1"
        buttonIconFABDisplay="inline-block"
        buttonIconFABColor="#242e49"
        buttonIconFABMinWidth="116px"
        buttonIconFABAlignSelf="unset"
        buttonIconFABFontWeight="unset"
        buttonIconFABFontSize="18px"
        buttonIconFABLineHeight="unset"
        monotoneAddIconBorderRadius="10px"
        monotoneAddIconBackgroundColor="#f2f5f9"
        monotoneAddIconOverflow="hidden"
        monotoneAddIconPadding="12px 24px"
        monotoneAddIconAlignSelf="unset"
        propHeight="24px"
        propWidth="24px"
      />
    </div>
  );
};

export default FAQAccordions;
