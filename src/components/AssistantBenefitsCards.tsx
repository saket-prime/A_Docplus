import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AssistantBenefitsCards.module.css";

export type AssistantBenefitsCardsType = {
  className?: string;
  voiceCommands?: string;
  useVoiceCommandsForHandsf?: string;

  /** Style props */
  propBorderLeft?: CSSProperties["borderLeft"];
  propGap?: CSSProperties["gap"];
};

const AssistantBenefitsCards: FunctionComponent<AssistantBenefitsCardsType> = ({
  className = "",
  voiceCommands,
  useVoiceCommandsForHandsf,
  propBorderLeft,
  propGap,
}) => {
  const frame5Style: CSSProperties = useMemo(() => {
    return {
      borderLeft: propBorderLeft,
      gap: propGap,
    };
  }, [propBorderLeft, propGap]);

  return (
    <div className={[styles.frame, className].join(" ")} style={frame5Style}>
      <div className={styles.voiceCommandItems}>
        <div className={styles.voiceCommands}>{voiceCommands}</div>
        <div className={styles.useVoiceCommands}>
          {useVoiceCommandsForHandsf}
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.content}>
          <a className={styles.text}>Learn More</a>
          <img
            className={styles.monotoneAddIcon}
            loading="lazy"
            alt=""
            src="/monotone-add-13.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default AssistantBenefitsCards;
