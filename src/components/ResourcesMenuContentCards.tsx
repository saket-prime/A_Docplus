import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ResourcesMenuContentCards.module.css";

export type ResourcesMenuContentCardsType = {
  className?: string;
  byMaiSakurajimaSenpai?: string;
  unlockingTheFutureOfHealt?: string;
  monotoneAdd?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propOverflow?: CSSProperties["overflow"];
  metaFlagsPadding?: CSSProperties["padding"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propColor2?: CSSProperties["color"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propBackgroundColor2?: CSSProperties["backgroundColor"];
  propColor3?: CSSProperties["color"];
  propColor4?: CSSProperties["color"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propBackgroundColor3?: CSSProperties["backgroundColor"];
  propColor5?: CSSProperties["color"];
  propBackgroundColor4?: CSSProperties["backgroundColor"];
  propColor6?: CSSProperties["color"];
  propBackgroundColor5?: CSSProperties["backgroundColor"];
  propColor7?: CSSProperties["color"];
  blogActionsHeight?: CSSProperties["height"];
  blogActionsPadding?: CSSProperties["padding"];
  propBackgroundColor6?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
};

const ResourcesMenuContentCards: FunctionComponent<
  ResourcesMenuContentCardsType
> = ({
  className = "",
  byMaiSakurajimaSenpai,
  unlockingTheFutureOfHealt,
  monotoneAdd,
  propBackgroundColor,
  propBoxShadow,
  propOverflow,
  metaFlagsPadding,
  propColor,
  propColor1,
  propBackgroundColor1,
  propColor2,
  propDisplay,
  propMinWidth,
  propBackgroundColor2,
  propColor3,
  propColor4,
  propAlignSelf,
  propBackgroundColor3,
  propColor5,
  propBackgroundColor4,
  propColor6,
  propBackgroundColor5,
  propColor7,
  blogActionsHeight,
  blogActionsPadding,
  propBackgroundColor6,
  propBorder,
}) => {
  const frame2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      boxShadow: propBoxShadow,
      overflow: propOverflow,
    };
  }, [propBackgroundColor, propBoxShadow, propOverflow]);

  const metaFlagsStyle: CSSProperties = useMemo(() => {
    return {
      padding: metaFlagsPadding,
    };
  }, [metaFlagsPadding]);

  const blogStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const janStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const atomStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const byMaiSakurajimaStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propColor2, propDisplay, propMinWidth]);

  const atom1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const minReadStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const unlockingTheFutureStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor4,
      alignSelf: propAlignSelf,
    };
  }, [propColor4, propAlignSelf]);

  const tagMasterStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor3,
    };
  }, [propBackgroundColor3]);

  const pricingStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor5,
    };
  }, [propColor5]);

  const tagMaster1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor4,
    };
  }, [propBackgroundColor4]);

  const pricing1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor6,
    };
  }, [propColor6]);

  const tagMaster2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor5,
    };
  }, [propBackgroundColor5]);

  const pricing2Style: CSSProperties = useMemo(() => {
    return {
      color: propColor7,
    };
  }, [propColor7]);

  const blogActionsStyle: CSSProperties = useMemo(() => {
    return {
      height: blogActionsHeight,
      padding: blogActionsPadding,
    };
  }, [blogActionsHeight, blogActionsPadding]);

  const buttonIconFAB2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor6,
      border: propBorder,
    };
  }, [propBackgroundColor6, propBorder]);

  return (
    <div className={[styles.frame, className].join(" ")} style={frame2Style}>
      <div className={styles.blogCardInnerItems}>
        <div className={styles.metaFlags} style={metaFlagsStyle}>
          <div className={styles.blog} style={blogStyle}>
            Blog
          </div>
        </div>
        <div className={styles.frame1}>
          <div className={styles.frame2}>
            <div className={styles.jan} style={janStyle}>
              25 Jan 2025
            </div>
            <div className={styles.metaAuthors}>
              <div className={styles.atom} style={atomStyle} />
            </div>
            <div
              className={styles.byMaiSakurajima}
              style={byMaiSakurajimaStyle}
            >
              {byMaiSakurajimaSenpai}
            </div>
            <div className={styles.metaAuthors}>
              <div className={styles.atom} style={atom1Style} />
            </div>
            <div className={styles.minRead} style={minReadStyle}>
              3min Read
            </div>
          </div>
          <h2
            className={styles.unlockingTheFuture}
            style={unlockingTheFutureStyle}
          >
            {unlockingTheFutureOfHealt}
          </h2>
          <div className={styles.frame3}>
            <div className={styles.tagMaster} style={tagMasterStyle}>
              <div className={styles.pricing} style={pricingStyle}>
                Future
              </div>
            </div>
            <div className={styles.tagMaster} style={tagMaster1Style}>
              <div className={styles.pricing1} style={pricing1Style}>
                Healthcare
              </div>
            </div>
            <div className={styles.tagMaster} style={tagMaster2Style}>
              <div className={styles.pricing2} style={pricing2Style}>
                Wellness
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.blogActions} style={blogActionsStyle}>
        <div className={styles.buttonIconFab} style={buttonIconFAB2Style}>
          <img
            className={styles.monotoneAddIcon}
            loading="lazy"
            alt=""
            src={monotoneAdd}
          />
        </div>
      </div>
    </div>
  );
};

export default ResourcesMenuContentCards;
