import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PlatformTestimonial1.module.css";

export type PlatformTestimonial1Type = {
  className?: string;
};

const PlatformTestimonial1: FunctionComponent<PlatformTestimonial1Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/testimonials");
  }, [navigate]);

  return (
    <div className={[styles.testimonialContent, className].join(" ")}>
      <div className={styles.col}>
        <div className={styles.details}>
          <div className={styles.tagMaster}>
            <div className={styles.pricing}>40 Total</div>
          </div>
          <h1 className={styles.detailTitle}>Trusted By Many.</h1>
          <div
            className={styles.text}
          >{`Stay one step ahead of potential health issues with our proactive monitoring and early detection capabilities. `}</div>
          <div className={styles.frame}>
            <div className={styles.cardRow}>
              <div className={styles.cardTitle}>78M</div>
              <div className={styles.cardDetail}>Total Users</div>
            </div>
            <div className={styles.cardRow}>
              <div className={styles.cardTitle}>215</div>
              <div className={styles.cardDetail}>Big Companies*</div>
            </div>
          </div>
        </div>
        <button className={styles.button} onClick={onButtonClick}>
          <div className={styles.content}>
            <b className={styles.text3}>See Testimonials</b>
            <img
              className={styles.monotoneAddIcon}
              alt=""
              src="/monotone-add-5.svg"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default PlatformTestimonial1;
