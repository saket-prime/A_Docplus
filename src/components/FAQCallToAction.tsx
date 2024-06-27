import { FunctionComponent } from "react";
import styles from "./FAQCallToAction.module.css";

export type FAQCallToActionType = {
  className?: string;
};

const FAQCallToAction: FunctionComponent<FAQCallToActionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.callToAction, className].join(" ")}>
      <div
        className={styles.privacySecurityIs}
      >{`Privacy & Security is Guaranteed`}</div>
      <div className={styles.ourSystemsImplement}>
        Our systems implement stringent access controls to restrict data access
        solely to authorized personnel. These controls are regularly monitored
        and updated, guaranteeing the highest level of security for your
        information.
      </div>
    </div>
  );
};

export default FAQCallToAction;
