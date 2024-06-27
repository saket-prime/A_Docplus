import { FunctionComponent } from "react";
import AboutUsValuesCard from "./AboutUsValuesCard";
import styles from "./AboutUsValues.module.css";

export type AboutUsValuesType = {
  className?: string;
};

const AboutUsValues: FunctionComponent<AboutUsValuesType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.containerWrapper, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.col}>
            <div className={styles.valuesTitle}>
              <h1 className={styles.ourCoreValues}>Our Core Values</h1>
              <div className={styles.atDocplusWe}>
                At docplus, we stand behind our main 4 pillars:
              </div>
            </div>
            <button className={styles.button}>
              <div className={styles.content1}>
                <a className={styles.text}>Learn More</a>
                <img
                  className={styles.monotoneAddIcon}
                  alt=""
                  src="/monotone-add2.svg"
                />
              </div>
            </button>
          </div>
          <div className={styles.col1}>
            <AboutUsValuesCard
              monotoneAdd="/monotone-add-21.svg"
              heading="Empowerment"
              text="We believe in treating our customers with compassion, understanding, "
            />
            <AboutUsValuesCard
              monotoneAdd="/monotone-add-31.svg"
              heading="Excellence"
              text="We are committed to the highest standards of medical excellence. Our dedicated professionals."
              propOverflow="unset"
            />
            <AboutUsValuesCard
              monotoneAdd="/monotone-add-41.svg"
              heading="Integrity"
              text="Integrity is the foundation of everything we do. We uphold the highest ethical standards."
              propOverflow="unset"
            />
            <AboutUsValuesCard
              monotoneAdd="/solid-processor.svg"
              heading="Innovation"
              text="We embrace innovation as a means to improve healthcare. We actively seek out technologies."
              propOverflow="hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsValues;
