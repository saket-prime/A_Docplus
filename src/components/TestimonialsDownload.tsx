import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TestimonialsDownload.module.css";

export type TestimonialsDownloadType = {
  className?: string;
  appStoreDownloadBadge?: string;
  appStoreDownloadBadge1?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
  propFlex?: CSSProperties["flex"];
  propFlexDirection?: CSSProperties["flexDirection"];
  propFontSize?: CSSProperties["fontSize"];
  propLetterSpacing?: CSSProperties["letterSpacing"];
  propMargin?: CSSProperties["margin"];
  propLineHeight?: CSSProperties["lineHeight"];
  propDisplay?: CSSProperties["display"];
};

const TestimonialsDownload: FunctionComponent<TestimonialsDownloadType> = ({
  className = "",
  appStoreDownloadBadge,
  appStoreDownloadBadge1,
  propAlignSelf,
  propPadding,
  propFlex,
  propFlexDirection,
  propFontSize,
  propLetterSpacing,
  propMargin,
  propLineHeight,
  propDisplay,
}) => {
  const cTASectionStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      flex: propFlex,
    };
  }, [propAlignSelf, propPadding, propFlex]);

  const content1Style: CSSProperties = useMemo(() => {
    return {
      flexDirection: propFlexDirection,
    };
  }, [propFlexDirection]);

  const getStartedTodayStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: propFontSize,
      letterSpacing: propLetterSpacing,
      margin: propMargin,
      lineHeight: propLineHeight,
      display: propDisplay,
    };
  }, [
    propFontSize,
    propLetterSpacing,
    propMargin,
    propLineHeight,
    propDisplay,
  ]);

  return (
    <section
      className={[styles.ctaSection, className].join(" ")}
      style={cTASectionStyle}
    >
      <div className={styles.container}>
        <div className={styles.content} style={content1Style}>
          <div className={styles.getStartedToday} style={getStartedTodayStyle}>
            Get Started Today!
          </div>
          <div className={styles.frame}>
            <img
              className={styles.appStoreDownloadBadge}
              loading="lazy"
              alt=""
              src={appStoreDownloadBadge}
            />
            <img
              className={styles.appStoreDownloadBadge1}
              loading="lazy"
              alt=""
              src={appStoreDownloadBadge1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsDownload;
