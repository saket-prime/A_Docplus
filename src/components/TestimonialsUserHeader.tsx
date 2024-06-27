import { FunctionComponent } from "react";
import styles from "./TestimonialsUserHeader.module.css";

export type TestimonialsUserHeaderType = {
  className?: string;
};

const TestimonialsUserHeader: FunctionComponent<TestimonialsUserHeaderType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.row, className].join(" ")}>
      <div className={styles.tabGroupText}>
        <div className={styles.tabSingle}>
          <b className={styles.a}>Individuals</b>
        </div>
        <div className={styles.tabSingle1}>
          <b className={styles.a1}>Patients</b>
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
      <h1 className={styles.userTestimonials}>User Testimonials</h1>
    </div>
  );
};

export default TestimonialsUserHeader;
