import { FunctionComponent } from "react";
import TestimonialsDownload from "./TestimonialsDownload";
import styles from "./CallToAction.module.css";

export type CallToActionType = {
  className?: string;
};

const CallToAction: FunctionComponent<CallToActionType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.callToAction, className].join(" ")}>
      <TestimonialsDownload
        appStoreDownloadBadge="/app-store-download-badge.svg"
        appStoreDownloadBadge1="/app-store-download-badge-1.svg"
        propAlignSelf="unset"
        propPadding="0px var(--padding-5xl)"
        propFlex="1"
        propFlexDirection="column"
        propFontSize="36px"
        propLetterSpacing="-0.02em"
        propMargin="0"
        propLineHeight="44px"
        propDisplay="inline-block"
      />
    </section>
  );
};

export default CallToAction;
