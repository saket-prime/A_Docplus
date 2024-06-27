import { FunctionComponent } from "react";
import AssistantBenefitsCards from "./AssistantBenefitsCards";
import AssistantImage from "./AssistantImage";
import styles from "./AssistantRow.module.css";

export type AssistantRowType = {
  className?: string;
};

const AssistantRow: FunctionComponent<AssistantRowType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.featureContentParent, className].join(" ")}>
      <div className={styles.featureContent}>
        <AssistantBenefitsCards
          voiceCommands="Voice Commands"
          useVoiceCommandsForHandsf="Connect with experienced healthcare professionals through secure and convenient virtual consultations."
        />
        <AssistantBenefitsCards
          voiceCommands="Wearables Integration"
          useVoiceCommandsForHandsf="Seamlessly integrate data from your health wearables. Monitor your daily health metrics in real-time."
          propBorderLeft="4px solid var(--asklepios-gray-10)"
          propGap="24px"
        />
        <AssistantBenefitsCards
          voiceCommands="Predictive Health Analytics"
          useVoiceCommandsForHandsf="Leverage the power of AI to predict potential health issues. Receive proactive recommendations."
          propBorderLeft="4px solid var(--asklepios-gray-10)"
          propGap="24px"
        />
      </div>
      <div className={styles.separatorWrapper}>
        <AssistantImage />
      </div>
    </div>
  );
};

export default AssistantRow;
