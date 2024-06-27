import { FunctionComponent } from "react";
import AboutUsReputationCards from "./AboutUsReputationCards";
import AboutUsBtn from "./AboutUsBtn";
import styles from "./AboutUsReputation.module.css";

export type AboutUsReputationType = {
  className?: string;
};

const AboutUsReputation: FunctionComponent<AboutUsReputationType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.reputation, className].join(" ")}>
      <div className={styles.reputationSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.ourReputation}>Our Reputation</h1>
            <div className={styles.main}>
              <AboutUsReputationCards
                prop="412"
                prop1="+"
                companiesHelped="Companies Helped"
              />
              <AboutUsReputationCards
                prop="20"
                prop1="M"
                companiesHelped="Patients Healed"
              />
              <AboutUsReputationCards
                prop="7"
                prop1="~"
                companiesHelped="Years of Excellence"
              />
              <AboutUsReputationCards
                prop="97"
                prop1="%"
                companiesHelped="Patient Satisfaction"
              />
              <AboutUsReputationCards
                prop="115"
                prop1="+"
                companiesHelped="Awards Achieved"
              />
              <AboutUsReputationCards
                prop="40"
                prop1="M"
                companiesHelped="AI Data LLMs"
              />
            </div>
            <AboutUsBtn
              text="See Testimonials"
              monotoneAdd="/monotone-add1.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsReputation;
