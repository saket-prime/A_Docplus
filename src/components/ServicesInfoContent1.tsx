import { FunctionComponent } from "react";
import styles from "./ServicesInfoContent1.module.css";

export type ServicesInfoContent1Type = {
  className?: string;
};

const ServicesInfoContent1: FunctionComponent<ServicesInfoContent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.col, className].join(" ")}>
      <div className={styles.tabGroupText}>
        <div className={styles.tabSingle}>
          <b className={styles.a}>AI Analytics</b>
        </div>
        <div className={styles.tabSingle1}>
          <b className={styles.a1}>AI Chatbot</b>
        </div>
        <div className={styles.tabSingle2}>
          <b className={styles.a2}>1 Month</b>
        </div>
        <div className={styles.tabSingle2}>
          <b className={styles.a2}>1 Year</b>
        </div>
        <div className={styles.tabSingle4}>
          <b className={styles.a2}>AI Assistant</b>
        </div>
      </div>
      <div className={styles.frame}>
        <div className={styles.smartAiMeets}>
          Smart AI Meets Personalized Health Solutions For All.
        </div>
        <div className={styles.ourComprehensiveRange}>
          Our comprehensive range of services is designed to cater to every
          aspect of your healthcare needs.
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.content}>
          <b className={styles.text}>Learn More</b>
          <img
            className={styles.monotoneAddIcon}
            alt=""
            src="/monotone-add2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesInfoContent1;
