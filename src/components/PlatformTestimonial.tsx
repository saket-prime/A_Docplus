import { FunctionComponent } from "react";
import styles from "./PlatformTestimonial.module.css";

export type PlatformTestimonialType = {
  className?: string;
};

const PlatformTestimonial: FunctionComponent<PlatformTestimonialType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.col, className].join(" ")}>
      <div className={styles.companyInfo}>
        <h3 className={styles.cvsHealth}>CVS Health</h3>
        <div className={styles.clientDetails}>
          <div className={styles.bWorth}>5.2B Worth</div>
          <div className={styles.clientIcon}>
            <div className={styles.atom} />
          </div>
          <div className={styles.biopharma}>BioPharma</div>
        </div>
      </div>
      <img
        className={styles.clientLogoIcon}
        loading="lazy"
        alt=""
        src="/frame1.svg"
      />
      <div className={styles.testimonial}>
        <div className={styles.quote}>01/15</div>
        <div className={styles.testimonialButtons}>
          <div className={styles.buttonIconFab}>
            <img
              className={styles.monotoneAddIcon}
              loading="lazy"
              alt=""
              src="/monotone-add-10.svg"
            />
          </div>
          <div className={styles.buttonIconFab}>
            <img
              className={styles.monotoneAddIcon}
              loading="lazy"
              alt=""
              src="/monotone-add-111.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformTestimonial;
