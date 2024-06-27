import { FunctionComponent } from "react";
import CareerJobOpeningsDropdown from "./CareerJobOpeningsDropdown";
import CereersJobListItem from "./CereersJobListItem";
import styles from "./CareerJobOpenings.module.css";

export type CareerJobOpeningsType = {
  className?: string;
};

const CareerJobOpenings: FunctionComponent<CareerJobOpeningsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.contactFormWrapper, className].join(" ")}>
      <div className={styles.contactForm}>
        <div className={styles.formWrapper}>
          <div className={styles.formFields}>
            <div className={styles.formHeading}>Job Openings</div>
            <div className={styles.privacyNotice}>
              <div className={styles.noticeContentParent}>
                <div className={styles.noticeContent}>46 Open Positions</div>
                <div className={styles.linkIcon}>
                  <div className={styles.atom} />
                </div>
                <div className={styles.noticeContent1}>Flexible Hours</div>
              </div>
            </div>
          </div>
          <div className={styles.inputFields}>
            <div className={styles.inputText}>
              <div className={styles.name}>Search</div>
              <div className={styles.content}>
                <div className={styles.text}>
                  <div className={styles.monotoneGenderMale}>
                    <img
                      className={styles.maleShapeIcon}
                      alt=""
                      src="/vector5.svg"
                    />
                    <div className={styles.vector} />
                  </div>
                  <div className={styles.loremusIpsumusDContainer}>
                    <span>Machine Learn</span>
                    <span className={styles.span}>|</span>
                  </div>
                </div>
                <img
                  className={styles.solidEyeIcon}
                  alt=""
                  src="/solid-eye2@2x.png"
                />
              </div>
            </div>
            <CareerJobOpeningsDropdown
              name1="Sort By"
              monotoneGenderMale="/monotone-gender-male1.svg"
              loremusIpsumusD="Date Added (Newest First)"
            />
            <CareerJobOpeningsDropdown
              name1="Job Position"
              monotoneGenderMale="/monotone-gender-male2.svg"
              loremusIpsumusD="Engineer"
              propOverflow="hidden"
              propDisplay="inline-block"
              propMinWidth="68px"
            />
          </div>
          <div className={styles.jobListings}>
            <CereersJobListItem
              jobPosition="Machine Learning Engineer"
              docPlusTowerNY="DocPlus Tower NY"
              fullTime="Full Time"
            />
            <CereersJobListItem
              jobPosition="Senior Marketing Lead"
              docPlusTowerNY="France Branch Office"
              fullTime="Part Time"
            />
            <CereersJobListItem
              jobPosition="Junior Product Designer"
              docPlusTowerNY="DocPlus Tower NY"
              fullTime="Freelance"
            />
            <CereersJobListItem
              jobPosition="Backend Engineer"
              docPlusTowerNY="DocPlus Tower NY"
              fullTime="Freelance"
            />
            <CereersJobListItem
              jobPosition="Senior Janitor"
              docPlusTowerNY="DocPlus Tower NY"
              fullTime="Freelance"
            />
            <CereersJobListItem
              jobPosition="Lead of Finance"
              docPlusTowerNY="DocPlus Tower NY"
              fullTime="Full Time"
            />
          </div>
        </div>
        <div className={styles.applyButton}>
          <div className={styles.buttonPrimary}>
            <div className={styles.content1}>
              <i className={styles.applyLabel}>Load More Openings</i>
              <img
                className={styles.monotoneHealthPlus}
                alt=""
                src="/monotone-add6.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerJobOpenings;
