import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FAQGuaranteeCard.module.css";

export type FAQGuaranteeCardType = {
  className?: string;
  monotoneAdd?: string;
  confidentialityAssurance?: string;
  ourRobustPrivacyAndSecuri?: string;
  footerLogo?: string;
  monotoneAdd1?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propFlexDirection?: CSSProperties["flexDirection"];
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propBorderRadius?: CSSProperties["borderRadius"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propOverflow?: CSSProperties["overflow"];
  propFlexWrap?: CSSProperties["flexWrap"];
  propBorderRadius1?: CSSProperties["borderRadius"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propOverflow1?: CSSProperties["overflow"];
  propFlexDirection1?: CSSProperties["flexDirection"];
  propPadding1?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propPosition?: CSSProperties["position"];
  propRight?: CSSProperties["right"];
  propHeight1?: CSSProperties["height"];
  propWidth1?: CSSProperties["width"];
  propPosition1?: CSSProperties["position"];
  propOverflow2?: CSSProperties["overflow"];
  propLeft?: CSSProperties["left"];
  propTop?: CSSProperties["top"];
  propTransform?: CSSProperties["transform"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propGap1?: CSSProperties["gap"];
  propWidth2?: CSSProperties["width"];
  propMinWidth1?: CSSProperties["minWidth"];
  propFontSize?: CSSProperties["fontSize"];
  propLetterSpacing?: CSSProperties["letterSpacing"];
  propTextAlign?: CSSProperties["textAlign"];
  propLineHeight?: CSSProperties["lineHeight"];
  propTextAlign1?: CSSProperties["textAlign"];
  propBorderRadius2?: CSSProperties["borderRadius"];
  propBackgroundColor2?: CSSProperties["backgroundColor"];
  propPadding2?: CSSProperties["padding"];
  propGap2?: CSSProperties["gap"];
  propLetterSpacing1?: CSSProperties["letterSpacing"];
  propDisplay?: CSSProperties["display"];
  propColor?: CSSProperties["color"];
  propMinWidth2?: CSSProperties["minWidth"];
  propFontWeight?: CSSProperties["fontWeight"];
  propFontStyle?: CSSProperties["fontStyle"];
  propMinHeight?: CSSProperties["minHeight"];

  /** Action props */
  onButtonPrimaryContainerClick?: () => void;
};

const FAQGuaranteeCard: FunctionComponent<FAQGuaranteeCardType> = ({
  className = "",
  monotoneAdd,
  confidentialityAssurance,
  ourRobustPrivacyAndSecuri,
  footerLogo,
  monotoneAdd1,
  propFlex,
  propFlexDirection,
  propPadding,
  propGap,
  propMinWidth,
  propAlignSelf,
  propBorderRadius,
  propBackgroundColor,
  propOverflow,
  propFlexWrap,
  propBorderRadius1,
  propBackgroundColor1,
  propOverflow1,
  propFlexDirection1,
  propPadding1,
  propHeight,
  propWidth,
  propPosition,
  propRight,
  propHeight1,
  propWidth1,
  propPosition1,
  propOverflow2,
  propLeft,
  propTop,
  propTransform,
  propAlignSelf1,
  propGap1,
  propWidth2,
  propMinWidth1,
  propFontSize,
  propLetterSpacing,
  propTextAlign,
  propLineHeight,
  propTextAlign1,
  propBorderRadius2,
  propBackgroundColor2,
  propPadding2,
  propGap2,
  propLetterSpacing1,
  propDisplay,
  propColor,
  propMinWidth2,
  propFontWeight,
  propFontStyle,
  propMinHeight,
  onButtonPrimaryContainerClick,
}) => {
  const groupStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      flexDirection: propFlexDirection,
      padding: propPadding,
      gap: propGap,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
      borderRadius: propBorderRadius,
      backgroundColor: propBackgroundColor,
      overflow: propOverflow,
      flexWrap: propFlexWrap,
    };
  }, [
    propFlex,
    propFlexDirection,
    propPadding,
    propGap,
    propMinWidth,
    propAlignSelf,
    propBorderRadius,
    propBackgroundColor,
    propOverflow,
    propFlexWrap,
  ]);

  const buttonIconFAB1Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius1,
      backgroundColor: propBackgroundColor1,
      overflow: propOverflow1,
      flexDirection: propFlexDirection1,
      padding: propPadding1,
      height: propHeight,
      width: propWidth,
      position: propPosition,
      right: propRight,
    };
  }, [
    propBorderRadius1,
    propBackgroundColor1,
    propOverflow1,
    propFlexDirection1,
    propPadding1,
    propHeight,
    propWidth,
    propPosition,
    propRight,
  ]);

  const monotoneAddIcon1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth1,
      position: propPosition1,
      overflow: propOverflow2,
      left: propLeft,
      top: propTop,
      transform: propTransform,
    };
  }, [
    propHeight1,
    propWidth1,
    propPosition1,
    propOverflow2,
    propLeft,
    propTop,
    propTransform,
  ]);

  const helpLinkButtonStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      gap: propGap1,
      width: propWidth2,
      minWidth: propMinWidth1,
    };
  }, [propAlignSelf1, propGap1, propWidth2, propMinWidth1]);

  const confidentialityAssuranceStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: propFontSize,
      letterSpacing: propLetterSpacing,
      textAlign: propTextAlign,
      lineHeight: propLineHeight,
    };
  }, [propFontSize, propLetterSpacing, propTextAlign, propLineHeight]);

  const ourRobustPrivacyStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign1,
    };
  }, [propTextAlign1]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius2,
      backgroundColor: propBackgroundColor2,
      padding: propPadding2,
    };
  }, [propBorderRadius2, propBackgroundColor2, propPadding2]);

  const contentStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap2,
    };
  }, [propGap2]);

  const footerLogoStyle: CSSProperties = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing1,
      display: propDisplay,
      color: propColor,
      minWidth: propMinWidth2,
      fontWeight: propFontWeight,
      fontStyle: propFontStyle,
    };
  }, [
    propLetterSpacing1,
    propDisplay,
    propColor,
    propMinWidth2,
    propFontWeight,
    propFontStyle,
  ]);

  const monotoneAddIcon2Style: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  return (
    <div className={[styles.group, className].join(" ")} style={groupStyle}>
      <div className={styles.buttonIconFab} style={buttonIconFAB1Style}>
        <img
          className={styles.monotoneAddIcon}
          alt=""
          src={monotoneAdd}
          style={monotoneAddIcon1Style}
        />
      </div>
      <div className={styles.helpLinkButton} style={helpLinkButtonStyle}>
        <div
          className={styles.confidentialityAssurance}
          style={confidentialityAssuranceStyle}
        >
          {confidentialityAssurance}
        </div>
        <div className={styles.ourRobustPrivacy} style={ourRobustPrivacyStyle}>
          {ourRobustPrivacyAndSecuri}
        </div>
      </div>
      <div
        className={styles.button}
        style={buttonStyle}
        onClick={onButtonPrimaryContainerClick}
      >
        <div className={styles.content} style={contentStyle}>
          <b className={styles.footerLogo} style={footerLogoStyle}>
            {footerLogo}
          </b>
          <img
            className={styles.monotoneAddIcon1}
            alt=""
            src={monotoneAdd1}
            style={monotoneAddIcon2Style}
          />
        </div>
      </div>
    </div>
  );
};

export default FAQGuaranteeCard;
