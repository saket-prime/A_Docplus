import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AIHealthAssessmentBenefitsCard.module.css";

export type AIHealthAssessmentBenefitsCardType = {
  className?: string;
  vector?: string;
  instantAccessibility?: string;
  accessHealthGuidanceAndIn?: string;
  monotoneAdd?: string;

  /** Style props */
  buttonIconFABBorderRadius?: CSSProperties["borderRadius"];
  buttonIconFABBackgroundColor?: CSSProperties["backgroundColor"];
  buttonIconFABPadding?: CSSProperties["padding"];
  buttonIconFABGap?: CSSProperties["gap"];
  buttonIconFABMinWidth?: CSSProperties["minWidth"];
  monotoneAddBackgroundColor?: CSSProperties["backgroundColor"];
  monotoneAddPadding?: CSSProperties["padding"];
  vectorIconBorderRadius?: CSSProperties["borderRadius"];
  vectorWidth?: CSSProperties["width"];
  vectorTop?: CSSProperties["top"];
  vectorRight?: CSSProperties["right"];
  vectorBottom?: CSSProperties["bottom"];
  vectorLeft?: CSSProperties["left"];
  vectorHeight?: CSSProperties["height"];
  vectorBorderRadius?: CSSProperties["borderRadius"];
  featureLabelsHeight?: CSSProperties["height"];
  featureLabelsWidth?: CSSProperties["width"];
  featureLabelsTop?: CSSProperties["top"];
  featureLabelsRight?: CSSProperties["right"];
  featureLabelsBottom?: CSSProperties["bottom"];
  featureLabelsLeft?: CSSProperties["left"];
  featureLabelsBorder?: CSSProperties["border"];
  propOverflow?: CSSProperties["overflow"];
};

const AIHealthAssessmentBenefitsCard: FunctionComponent<
  AIHealthAssessmentBenefitsCardType
> = ({
  className = "",
  vector,
  instantAccessibility,
  accessHealthGuidanceAndIn,
  monotoneAdd,
  buttonIconFABBorderRadius,
  buttonIconFABBackgroundColor,
  buttonIconFABPadding,
  buttonIconFABGap,
  buttonIconFABMinWidth,
  monotoneAddBackgroundColor,
  monotoneAddPadding,
  vectorIconBorderRadius,
  vectorWidth,
  vectorTop,
  vectorRight,
  vectorBottom,
  vectorLeft,
  vectorHeight,
  vectorBorderRadius,
  featureLabelsHeight,
  featureLabelsWidth,
  featureLabelsTop,
  featureLabelsRight,
  featureLabelsBottom,
  featureLabelsLeft,
  featureLabelsBorder,
  propOverflow,
}) => {
  const frame3Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: buttonIconFABBorderRadius,
      backgroundColor: buttonIconFABBackgroundColor,
      padding: buttonIconFABPadding,
      gap: buttonIconFABGap,
      minWidth: buttonIconFABMinWidth,
    };
  }, [
    buttonIconFABBorderRadius,
    buttonIconFABBackgroundColor,
    buttonIconFABPadding,
    buttonIconFABGap,
    buttonIconFABMinWidth,
  ]);

  const buttonIconFAB3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: monotoneAddBackgroundColor,
      padding: monotoneAddPadding,
    };
  }, [monotoneAddBackgroundColor, monotoneAddPadding]);

  const monotoneAddStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: vectorIconBorderRadius,
    };
  }, [vectorIconBorderRadius]);

  const vectorIconStyle: CSSProperties = useMemo(() => {
    return {
      width: vectorWidth,
      top: vectorTop,
      right: vectorRight,
      bottom: vectorBottom,
      left: vectorLeft,
      height: vectorHeight,
      borderRadius: vectorBorderRadius,
    };
  }, [
    vectorWidth,
    vectorTop,
    vectorRight,
    vectorBottom,
    vectorLeft,
    vectorHeight,
    vectorBorderRadius,
  ]);

  const vectorStyle: CSSProperties = useMemo(() => {
    return {
      height: featureLabelsHeight,
      width: featureLabelsWidth,
      top: featureLabelsTop,
      right: featureLabelsRight,
      bottom: featureLabelsBottom,
      left: featureLabelsLeft,
      border: featureLabelsBorder,
    };
  }, [
    featureLabelsHeight,
    featureLabelsWidth,
    featureLabelsTop,
    featureLabelsRight,
    featureLabelsBottom,
    featureLabelsLeft,
    featureLabelsBorder,
  ]);

  const monotoneAddIcon5Style: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div className={[styles.frame, className].join(" ")} style={frame3Style}>
      <div className={styles.buttonIconFab} style={buttonIconFAB3Style}>
        <div className={styles.monotoneAdd} style={monotoneAddStyle}>
          <img
            className={styles.vectorIcon}
            alt=""
            src={vector}
            style={vectorIconStyle}
          />
          <div className={styles.vector} style={vectorStyle} />
        </div>
      </div>
      <div className={styles.featureLabels}>
        <div className={styles.instantAccessibility}>
          {instantAccessibility}
        </div>
        <div className={styles.accessHealthGuidance}>
          {accessHealthGuidanceAndIn}
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.content}>
          <a className={styles.text}>Learn More</a>
          <img
            className={styles.monotoneAdd}
            loading="lazy"
            alt=""
            src={monotoneAdd}
            style={monotoneAddIcon5Style}
          />
        </div>
      </div>
    </div>
  );
};

export default AIHealthAssessmentBenefitsCard;
