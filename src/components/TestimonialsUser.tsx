import { FunctionComponent } from "react";
import TestimonialsUserHeader from "./TestimonialsUserHeader";
import TestimonialsUserRow from "./TestimonialsUserRow";
import styles from "./TestimonialsUser.module.css";

export type TestimonialsUserType = {
  className?: string;
};

const TestimonialsUser: FunctionComponent<TestimonialsUserType> = ({
  className = "",
}) => {
  return (
    <section
      className={[styles.testimonialContainerWrapper, className].join(" ")}
    >
      <div className={styles.testimonialContainer}>
        <TestimonialsUserHeader />
        <TestimonialsUserRow />
        <div className={styles.row}>
          <div className={styles.testimonialPaginationDotsWrapper}>
            <div className={styles.testimonialPaginationDots}>
              <div className={styles.progressBarAtom} />
              <div className={styles.progressBarAtom1} />
              <div className={styles.progressBarAtom1} />
              <div className={styles.progressBarAtom1} />
            </div>
          </div>
          <div className={styles.buttonIconFabParent}>
            <div className={styles.buttonIconFab}>
              <img
                className={styles.monotoneAddIcon}
                alt=""
                src="/monotone-add-2.svg"
              />
            </div>
            <div className={styles.buttonIconFab}>
              <img
                className={styles.monotoneAddIcon}
                alt=""
                src="/monotone-add-3.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsUser;
