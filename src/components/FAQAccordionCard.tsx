import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FAQAccordionCard.module.css";

export type FAQAccordionCardType = {
  className?: string;
  howDoesDocplusWork?: string;
  monotoneAdd?: string;

  /** Style props */
  howDoesDocplusAlignSelf?: CSSProperties["alignSelf"];
  howDoesDocplusBorderRadius?: CSSProperties["borderRadius"];
  howDoesDocplusBackgroundColor?: CSSProperties["backgroundColor"];
  howDoesDocplusOverflow?: CSSProperties["overflow"];
  howDoesDocplusFlexDirection?: CSSProperties["flexDirection"];
  howDoesDocplusFlexWrap?: CSSProperties["flexWrap"];
  howDoesDocplusPadding?: CSSProperties["padding"];
  howDoesDocplusGap?: CSSProperties["gap"];
  howDoesDocplusFlex?: CSSProperties["flex"];
  buttonIconFABFlex?: CSSProperties["flex"];
  buttonIconFABDisplay?: CSSProperties["display"];
  buttonIconFABColor?: CSSProperties["color"];
  buttonIconFABMinWidth?: CSSProperties["minWidth"];
  buttonIconFABAlignSelf?: CSSProperties["alignSelf"];
  buttonIconFABFontWeight?: CSSProperties["fontWeight"];
  buttonIconFABFontSize?: CSSProperties["fontSize"];
  buttonIconFABLineHeight?: CSSProperties["lineHeight"];
  monotoneAddIconBorderRadius?: CSSProperties["borderRadius"];
  monotoneAddIconBackgroundColor?: CSSProperties["backgroundColor"];
  monotoneAddIconOverflow?: CSSProperties["overflow"];
  monotoneAddIconPadding?: CSSProperties["padding"];
  monotoneAddIconAlignSelf?: CSSProperties["alignSelf"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
};

const FAQAccordionCard: FunctionComponent<FAQAccordionCardType> = ({
  className = "",
  howDoesDocplusWork,
  monotoneAdd,
  howDoesDocplusAlignSelf,
  howDoesDocplusBorderRadius,
  howDoesDocplusBackgroundColor,
  howDoesDocplusOverflow,
  howDoesDocplusFlexDirection,
  howDoesDocplusFlexWrap,
  howDoesDocplusPadding,
  howDoesDocplusGap,
  howDoesDocplusFlex,
  buttonIconFABFlex,
  buttonIconFABDisplay,
  buttonIconFABColor,
  buttonIconFABMinWidth,
  buttonIconFABAlignSelf,
  buttonIconFABFontWeight,
  buttonIconFABFontSize,
  buttonIconFABLineHeight,
  monotoneAddIconBorderRadius,
  monotoneAddIconBackgroundColor,
  monotoneAddIconOverflow,
  monotoneAddIconPadding,
  monotoneAddIconAlignSelf,
  propHeight,
  propWidth,
}) => {
  const frameStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: howDoesDocplusAlignSelf,
      borderRadius: howDoesDocplusBorderRadius,
      backgroundColor: howDoesDocplusBackgroundColor,
      overflow: howDoesDocplusOverflow,
      flexDirection: howDoesDocplusFlexDirection,
      flexWrap: howDoesDocplusFlexWrap,
      padding: howDoesDocplusPadding,
      gap: howDoesDocplusGap,
      flex: howDoesDocplusFlex,
    };
  }, [
    howDoesDocplusAlignSelf,
    howDoesDocplusBorderRadius,
    howDoesDocplusBackgroundColor,
    howDoesDocplusOverflow,
    howDoesDocplusFlexDirection,
    howDoesDocplusFlexWrap,
    howDoesDocplusPadding,
    howDoesDocplusGap,
    howDoesDocplusFlex,
  ]);

  const howDoesDocplusStyle: CSSProperties = useMemo(() => {
    return {
      flex: buttonIconFABFlex,
      display: buttonIconFABDisplay,
      color: buttonIconFABColor,
      minWidth: buttonIconFABMinWidth,
      alignSelf: buttonIconFABAlignSelf,
      fontWeight: buttonIconFABFontWeight,
      fontSize: buttonIconFABFontSize,
      lineHeight: buttonIconFABLineHeight,
    };
  }, [
    buttonIconFABFlex,
    buttonIconFABDisplay,
    buttonIconFABColor,
    buttonIconFABMinWidth,
    buttonIconFABAlignSelf,
    buttonIconFABFontWeight,
    buttonIconFABFontSize,
    buttonIconFABLineHeight,
  ]);

  const buttonIconFABStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: monotoneAddIconBorderRadius,
      backgroundColor: monotoneAddIconBackgroundColor,
      overflow: monotoneAddIconOverflow,
      padding: monotoneAddIconPadding,
      alignSelf: monotoneAddIconAlignSelf,
    };
  }, [
    monotoneAddIconBorderRadius,
    monotoneAddIconBackgroundColor,
    monotoneAddIconOverflow,
    monotoneAddIconPadding,
    monotoneAddIconAlignSelf,
  ]);

  const monotoneAddIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  return (
    <div className={[styles.frame, className].join(" ")} style={frameStyle}>
      <b className={styles.howDoesDocplus} style={howDoesDocplusStyle}>
        {howDoesDocplusWork}
      </b>
      <div className={styles.buttonIconFab} style={buttonIconFABStyle}>
        <img
          className={styles.monotoneAddIcon}
          alt=""
          src={monotoneAdd}
          style={monotoneAddIconStyle}
        />
      </div>
    </div>
  );
};

export default FAQAccordionCard;
