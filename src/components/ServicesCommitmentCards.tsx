import { FunctionComponent } from "react";
import styles from "./ServicesCommitmentCards.module.css";

export type ServicesCommitmentCardsType = {
  className?: string;
};

const ServicesCommitmentCards: FunctionComponent<
  ServicesCommitmentCardsType
> = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.frame}>
        <div className={styles.clientImage}>
          <div className={styles.clientAvatar}>
            <img
              className={styles.monotoneAddIcon}
              alt=""
              src="/monotone-add3.svg"
            />
          </div>
          <div className={styles.clientDetails}>
            <div className={styles.clientName}>
              <div className={styles.patients}>Patients</div>
              <div className={styles.atDocplusHealth}>
                At docplus health, we serve all patients without discrimination.
              </div>
            </div>
            <div className={styles.buttonIconFab}>
              <img
                className={styles.monotoneAddIcon1}
                alt=""
                src="/monotone-add2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frame}>
        <div className={styles.clientImage}>
          <div className={styles.frame2}>
            <img
              className={styles.monotoneAddIcon}
              alt=""
              src="/monotone-add4.svg"
            />
          </div>
          <div className={styles.clientDetails}>
            <div className={styles.clientName}>
              <div className={styles.patients}>Professionals</div>
              <div className={styles.atDocplusHealth}>
                We empower healthcare professionals using AI technology.
              </div>
            </div>
            <div className={styles.buttonIconFab}>
              <img
                className={styles.monotoneAddIcon1}
                alt=""
                src="/monotone-add2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frame}>
        <div className={styles.clientImage}>
          <div className={styles.frame6}>
            <img
              className={styles.monotoneAddIcon}
              alt=""
              src="/monotone-add5.svg"
            />
          </div>
          <div className={styles.clientDetails}>
            <div className={styles.clientName}>
              <div className={styles.patients}>Providers</div>
              <div className={styles.atDocplusHealth}>
                We help providers get their health priority straight with AI
                Tech.
              </div>
            </div>
            <div className={styles.buttonIconFab}>
              <img
                className={styles.monotoneAddIcon1}
                alt=""
                src="/monotone-add2.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCommitmentCards;
