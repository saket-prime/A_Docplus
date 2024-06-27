import { FunctionComponent } from "react";
import TopNav01 from "./TopNav01";
import styles from "./AssistantHero.module.css";

export type AssistantHeroType = {
  className?: string;
};

const AssistantHero: FunctionComponent<AssistantHeroType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.main, className].join(" ")}>
      <div className={styles.topNavParent}>
        <TopNav01 />
        <div className={styles.body}>
          <div className={styles.hero}>
            <img className={styles.sectionIcon} alt="" src="/section1.svg" />
            <div className={styles.content}>
              <h1
                className={styles.aiHealthWellness}
              >{`AI Health & Wellness Assistant For All.`}</h1>
              <div className={styles.content1}>
                <div className={styles.frame}>
                  <div className={styles.welcomeToAsclepios}>
                    Welcome to Asclepios, where cutting-edge AI meets your
                    unique health and wellness journey. Our AI Health Assistant
                    is here to guide, support, and empower you on your path to
                    well-being.
                  </div>
                  <div className={styles.downloadBadgeContainer}>
                    <img
                      className={styles.appStoreDownloadBadge}
                      loading="lazy"
                      alt=""
                      src="/app-store-download-badge.svg"
                    />
                    <img
                      className={styles.appStoreDownloadBadge1}
                      alt=""
                      src="/app-store-download-badge-1.svg"
                    />
                  </div>
                </div>
                <div className={styles.featureContainer}>
                  <div className={styles.frame1}>
                    <div className={styles.buttonIconFab}>
                      <img
                        className={styles.monotoneAddIcon}
                        alt=""
                        src="/monotone-add-5.svg"
                      />
                    </div>
                    <div className={styles.advancedLlmData}>
                      Advanced LLM Data Silo
                    </div>
                  </div>
                  <div className={styles.frame1}>
                    <div className={styles.buttonIconFab}>
                      <img
                        className={styles.monotoneAddIcon}
                        alt=""
                        src="/monotone-add-5.svg"
                      />
                    </div>
                    <div className={styles.personalizedHealthFor}>
                      Personalized Health For You
                    </div>
                  </div>
                  <div className={styles.frame1}>
                    <div className={styles.buttonIconFab}>
                      <img
                        className={styles.monotoneAddIcon}
                        alt=""
                        src="/monotone-add-5.svg"
                      />
                    </div>
                    <div className={styles.personalizedHealthFor}>
                      More than 300K Active Users
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssistantHero;
