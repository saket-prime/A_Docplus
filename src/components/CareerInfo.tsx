import { FunctionComponent } from "react";
import styles from "./CareerInfo.module.css";

export type CareerInfoType = {
  className?: string;
};

const CareerInfo: FunctionComponent<CareerInfoType> = ({ className = "" }) => {
  return (
    <div className={[styles.containerWrapper, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            className={styles.beautifulYoungBlackWomanHo}
            alt=""
            src="/beautiful-young-black-woman-hospital-setting-generative-ai@2x.png"
          />
          <div className={styles.imageOverlay}>
            <div className={styles.overlayContent}>
              <img
                className={styles.monotoneAddIcon}
                alt=""
                src="/monotone-add181.svg"
              />
              <div className={styles.overlayButton}>
                <div className={styles.buttonIconFab}>
                  <img
                    className={styles.monotoneUser}
                    alt=""
                    src="/monotone-add19.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.caption}>
            <div className={styles.vector} />
            <div className={styles.empty}>15:00</div>
            <div className={styles.emptyContainerWrapper}>
              <img
                className={styles.emptyContainerIcon}
                alt=""
                src="/empty-container.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.featureListWrapper}>
          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <b
                className={styles.featureTitle}
              >{`We Improve Patient Experience Through   ML&AI.`}</b>
              <div className={styles.featureDescription}>
                Our work helps bend the cost curve and make healthcare more
                affordable, one of the biggest socio-economic problems and
                opportunities of our time.
              </div>
            </div>
            <div className={styles.featureIcons}>
              <div className={styles.iconPair}>
                <div className={styles.frame}>
                  <div className={styles.monotoneUser}>
                    <img
                      className={styles.userIcon}
                      alt=""
                      src="/user-icon.svg"
                    />
                    <div className={styles.vector1} />
                  </div>
                  <i className={styles.patientFirst}>Patient First</i>
                </div>
                <div className={styles.frame1}>
                  <img
                    className={styles.monotoneEnergyIcon}
                    alt=""
                    src="/monotone-energy.svg"
                  />
                  <i className={styles.empowerment}>Empowerment</i>
                </div>
              </div>
              <div className={styles.iconPair}>
                <div className={styles.frame2}>
                  <img
                    className={styles.monotoneEnergyIcon}
                    alt=""
                    src="/monotone-light-bulb.svg"
                  />
                  <i className={styles.innovation}>Innovation</i>
                </div>
                <div className={styles.frame3}>
                  <img
                    className={styles.monotoneEnergyIcon}
                    alt=""
                    src="/monotone-test-tube.svg"
                  />
                  <i className={styles.experimentation}>Experimentation</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerInfo;
