import { FunctionComponent } from "react";
import styles from "./ResourcesContentMenu.module.css";

export type ResourcesContentMenuType = {
  className?: string;
};

const ResourcesContentMenu: FunctionComponent<ResourcesContentMenuType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.frame}>
        <img
          className={styles.solidEyeIcon}
          loading="lazy"
          alt=""
          src="/solid-eye.svg"
        />
        <b className={styles.blogPosts}>Blog Posts</b>
      </div>
      <div className={styles.frame1}>
        <img
          className={styles.solidEyeIcon}
          loading="lazy"
          alt=""
          src="/solid-eye-1.svg"
        />
        <b className={styles.blogPosts1}>Whitepaper</b>
      </div>
      <div className={styles.frame1}>
        <img
          className={styles.solidEyeIcon}
          loading="lazy"
          alt=""
          src="/solid-eye-2.svg"
        />
        <b className={styles.blogPosts2}>Video</b>
      </div>
      <div className={styles.frame1}>
        <img className={styles.solidEyeIcon} alt="" src="/solid-eye-3.svg" />
        <b className={styles.blogPosts3}>Interviews</b>
      </div>
    </div>
  );
};

export default ResourcesContentMenu;
