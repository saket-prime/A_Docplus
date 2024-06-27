import { FunctionComponent } from "react";
import PlatformMobileIntroCard1 from "./PlatformMobileIntroCard1";
import PlatformMobileIntroCard2 from "./PlatformMobileIntroCard2";
import styles from "./PlatformMobileIntro.module.css";

export type PlatformMobileIntroType = {
  className?: string;
};

const PlatformMobileIntro: FunctionComponent<PlatformMobileIntroType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.companies, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.featureList}>
          <div className={styles.row}>
            <h1 className={styles.mockupTitle}>
              Introducing your AI digital healthcare assistant.
            </h1>
            <div className={styles.tabGroupText}>
              <div className={styles.tabSingle}>
                <b className={styles.a}>For Individuals</b>
              </div>
              <div className={styles.tabSingle1}>
                <b className={styles.a1}>For Physician</b>
              </div>
              <div className={styles.tabSingle2}>
                <b className={styles.a2}>1 Month</b>
              </div>
              <div className={styles.tabSingle2}>
                <b className={styles.a2}>1 Year</b>
              </div>
              <div className={styles.tabSingle2}>
                <b className={styles.a2}>All Time</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.featureGrid}>
          <div className={styles.frame}>
            <PlatformMobileIntroCard1 heading="Predictive Health" />
            <PlatformMobileIntroCard1
              heading="Health Tracker"
              propOverflow="unset"
            />
            <div className={styles.frame1}>
              <div className={styles.frame2}>
                <div className={styles.buttonIconFab}>
                  <img
                    className={styles.monotoneAddIcon}
                    loading="lazy"
                    alt=""
                    src="/monotone-add-61.svg"
                  />
                </div>
                <b className={styles.heading}>AI Health Analytics</b>
              </div>
              <div className={styles.sixthGridItem}>
                <div className={styles.atom} />
              </div>
            </div>
            <div className={styles.gridImage}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector2.svg"
              />
              <img className={styles.vectorIcon1} alt="" src="/vector-12.svg" />
              <img className={styles.vectorIcon2} alt="" src="/vector-2.svg" />
              <img
                className={styles.mockupIcon}
                loading="lazy"
                alt=""
                src="/mockup1.svg"
              />
            </div>
          </div>
          <div className={styles.firstGridRow}>
            <PlatformMobileIntroCard2
              monotoneAdd="/monotone-add-71.svg"
              heading="Smart Notifications"
            />
            <PlatformMobileIntroCard2
              monotoneAdd="/monotone-add-8.svg"
              heading="Anomaly Detection"
            />
            <div className={styles.frameParent}>
              <div className={styles.sixthGridItem}>
                <div className={styles.atom1} />
              </div>
              <div className={styles.frame3}>
                <div className={styles.buttonIconFab1}>
                  <div className={styles.monotoneAdd}>
                    <img
                      className={styles.vectorIcon3}
                      alt=""
                      src="/vector-31.svg"
                    />
                    <input className={styles.vector} type="checkbox" />
                  </div>
                </div>
                <b className={styles.heading}>Intuitive UIUX</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformMobileIntro;
