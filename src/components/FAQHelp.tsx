import { FunctionComponent } from "react";
import FAQHelpCard from "./FAQHelpCard";
import styles from "./FAQHelp.module.css";

export type FAQHelpType = {
  className?: string;
};

const FAQHelp: FunctionComponent<FAQHelpType> = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <FAQHelpCard
        monotoneAdd="/monotone-add29.svg"
        helpCenter="Help Center"
        monotoneAdd1="/monotone-add30.svg"
      />
      <FAQHelpCard
        monotoneAdd="/monotone-add31.svg"
        helpCenter="Live Chat"
        monotoneAdd1="/monotone-add32.svg"
        monotoneAddIconBackgroundColor="#d0e4ff"
        monotoneAddIconColor="#0f67fe"
      />
    </div>
  );
};

export default FAQHelp;
