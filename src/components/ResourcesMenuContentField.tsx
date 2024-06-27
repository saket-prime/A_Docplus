import { FunctionComponent } from "react";
import styles from "./ResourcesMenuContentField.module.css";

export type ResourcesMenuContentFieldType = {
  className?: string;
};

const ResourcesMenuContentField: FunctionComponent<
  ResourcesMenuContentFieldType
> = ({ className = "" }) => {
  return (
    <div className={[styles.frame, className].join(" ")}>
      <div className={styles.inputText}>
        <div className={styles.name}>Search</div>
        <div className={styles.content}>
          <div className={styles.text}>
            <div className={styles.monotoneGenderMale}>
              <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
              <div className={styles.vector} />
            </div>
            <input
              className={styles.loremusIpsumusD}
              placeholder="Healthcare AI Bene|"
              type="text"
            />
          </div>
          <img
            className={styles.solidEyeIcon}
            alt=""
            src="/solid-eye1@2x.png"
          />
        </div>
      </div>
      <div className={styles.inputText}>
        <div className={styles.name}>Sort By</div>
        <div className={styles.content1}>
          <div className={styles.text1}>
            <input className={styles.monotoneGenderMale1} type="checkbox" />
            <div className={styles.loremusIpsumusD1}>
              Most Popular (All Time)
            </div>
          </div>
          <img className={styles.solidEyeIcon1} alt="" src="/solid-eye-4.svg" />
        </div>
      </div>
      <div className={styles.inputText2}>
        <div className={styles.name2}>Category</div>
        <div className={styles.content1}>
          <div className={styles.text1}>
            <img
              className={styles.monotoneGenderMale2}
              alt=""
              src="/monotone-gender-male-11.svg"
            />
            <div className={styles.loremusIpsumusD2}>Healthcare</div>
          </div>
          <img className={styles.solidEyeIcon1} alt="" src="/solid-eye-4.svg" />
        </div>
      </div>
    </div>
  );
};

export default ResourcesMenuContentField;
