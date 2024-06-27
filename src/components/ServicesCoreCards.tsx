import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ServicesCoreCards.module.css";

export type ServicesCoreCardsType = {
  className?: string;
  monotoneAdd?: string;
  naturalInteractions?: string;
  engageInNaturalAndInforma?: string;

  /** Style props */
  interactionContainerBorderRadius?: CSSProperties["borderRadius"];
};

const ServicesCoreCards: FunctionComponent<ServicesCoreCardsType> = ({
  className = "",
  monotoneAdd,
  naturalInteractions,
  engageInNaturalAndInforma,
  interactionContainerBorderRadius,
}) => {
  const monotoneAddIcon4Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: interactionContainerBorderRadius,
    };
  }, [interactionContainerBorderRadius]);

  return (
    <div className={[styles.frame, className].join(" ")}>
      <div className={styles.buttonIconFab}>
        <img
          className={styles.monotoneAddIcon}
          alt=""
          src={monotoneAdd}
          style={monotoneAddIcon4Style}
        />
      </div>
      <div className={styles.interactionContainer}>
        <div className={styles.frame1}>
          <div className={styles.info}>
            <div className={styles.naturalInteractions}>
              {naturalInteractions}
            </div>
            <div className={styles.engageInNatural}>
              {engageInNaturalAndInforma}
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.content}>
            <b className={styles.text}>Learn More</b>
            <img
              className={styles.monotoneAddIcon}
              alt=""
              src="/monotone-add8.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCoreCards;
