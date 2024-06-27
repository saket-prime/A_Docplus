import { FunctionComponent } from "react";
import ResourcesMenuContentField from "./ResourcesMenuContentField";
import ResourcesMenuContentCollection from "./ResourcesMenuContentCollection";
import styles from "./ResourcesMenuContent.module.css";

export type ResourcesMenuContentType = {
  className?: string;
};

const ResourcesMenuContent: FunctionComponent<ResourcesMenuContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.blogItems}>
        <ResourcesMenuContentField />
        <ResourcesMenuContentCollection />
      </div>
      <div className={styles.paginationContainer}>
        <div className={styles.pagination}>
          <div className={styles.buttonIconFab}>
            <img
              className={styles.monotoneAddIcon}
              loading="lazy"
              alt=""
              src="/monotone-add-2.svg"
            />
          </div>
          <div className={styles.frame}>
            <div className={styles.paginationNumber}>
              <b className={styles.number}>1</b>
            </div>
            <div className={styles.paginationNumber1}>
              <b className={styles.number1}>2</b>
            </div>
            <div className={styles.paginationNumber2}>
              <b className={styles.number1}>3</b>
            </div>
            <div className={styles.paginationNumber3}>
              <b className={styles.number3}>...</b>
            </div>
            <div className={styles.paginationNumber4}>
              <b className={styles.number4}>97</b>
            </div>
            <div className={styles.paginationNumber4}>
              <b className={styles.number5}>98</b>
            </div>
            <div className={styles.paginationNumber4}>
              <b className={styles.number6}>99</b>
            </div>
          </div>
          <div className={styles.buttonIconFab}>
            <img
              className={styles.monotoneAddIcon}
              loading="lazy"
              alt=""
              src="/monotone-add-3.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesMenuContent;
