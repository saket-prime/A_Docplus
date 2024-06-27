import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AssistantFeaturesCards.module.css";

export type AssistantFeaturesCardsType = {
  className?: string;
  monotoneAdd?: string;
  empatheticInteraction?: string;
  engageInNaturalAndInforma?: string;

  /** Style props */
  propOverflow?: CSSProperties["overflow"];
};

const AssistantFeaturesCards: FunctionComponent<AssistantFeaturesCardsType> = ({
  className = "",
  monotoneAdd,
  empatheticInteraction,
  engageInNaturalAndInforma,
  propOverflow,
}) => {
  const monotoneAddIcon6Style: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div className={[styles.frame, className].join(" ")}>
      <div className={styles.buttonIconFab}>
        <img
          className={styles.monotoneAddIcon}
          loading="lazy"
          alt=""
          src={monotoneAdd}
          style={monotoneAddIcon6Style}
        />
      </div>
      <div className={styles.frame1}>
        <div className={styles.empatheticInteraction}>
          {empatheticInteraction}
        </div>
        <div className={styles.engageInNatural}>
          {engageInNaturalAndInforma}
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.content}>
          <a className={styles.text}>Learn More</a>
          <img
            className={styles.monotoneAddIcon}
            loading="lazy"
            alt=""
            src="/monotone-add1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default AssistantFeaturesCards;
