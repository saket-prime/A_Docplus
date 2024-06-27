import { FunctionComponent } from "react";
import TopNav1 from "./TopNav1";
import styles from "./FrameComponent12.module.css";

export type FrameComponent12Type = {
  className?: string;
};

const FrameComponent12: FunctionComponent<FrameComponent12Type> = ({
  className = "",
}) => {
  return (
    <header className={[styles.topNavWrapper, className].join(" ")}>
      <TopNav1 />
    </header>
  );
};

export default FrameComponent12;
