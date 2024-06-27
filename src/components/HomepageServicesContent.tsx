import { FunctionComponent } from "react";
import HomepageServicesTitle from "./HomepageServicesTitle";
import HomepageServicesCard from "./HomepageServicesCard";
import styles from "./HomepageServicesContent.module.css";

export type HomepageServicesContentType = {
  className?: string;
};

const HomepageServicesContent: FunctionComponent<
  HomepageServicesContentType
> = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.main}>
        <HomepageServicesTitle pricing="Our Services" heading="Who We Serve" />
        <HomepageServicesCard />
        <div className={styles.row}>
          <div className={styles.donTSeeContainer}>
            <span>{`Don’t see the above category? `}</span>
            <span className={styles.contactUs}>Contact Us!</span>
          </div>
          <button className={styles.contactButtonWrapper}>
            <div className={styles.button}>
              <div className={styles.content1}>
                <b className={styles.text}>Our Services</b>
                <img
                  className={styles.monotoneAddIcon}
                  alt=""
                  src="/monotone-add1.svg"
                />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomepageServicesContent;
