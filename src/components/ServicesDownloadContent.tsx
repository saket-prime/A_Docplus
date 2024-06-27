import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ServicesDownloadContent.module.css";

export type ServicesDownloadContentType = {
  className?: string;
};

const ServicesDownloadContent: FunctionComponent<
  ServicesDownloadContentType
> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <div className={[styles.section, className].join(" ")}>
      <div className={styles.actionTitle}>
        <div className={styles.heading}>{`Get Your Health Personalized `}</div>
        <div className={styles.weOfferA}>
          We offer a variety of specialty care services, so you can get the care
          you need from a specialist who is an expert in their field.
        </div>
      </div>
      <div className={styles.actionButton}>
        <div className={styles.button} onClick={onButtonContainerClick}>
          <div className={styles.content}>
            <b className={styles.text}>Download The App</b>
            <img
              className={styles.monotoneAddIcon}
              alt=""
              src="/monotone-add2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDownloadContent;
