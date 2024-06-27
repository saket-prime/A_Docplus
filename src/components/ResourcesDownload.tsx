import { FunctionComponent } from "react";
import ResourcesDownload2 from "./ResourcesDownload2";
import ResourcesDownload1 from "./ResourcesDownload1";
import styles from "./ResourcesDownload.module.css";

export type ResourcesDownloadType = {
  className?: string;
};

const ResourcesDownload: FunctionComponent<ResourcesDownloadType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.container, className].join(" ")}>
      <ResourcesDownload2 />
      <ResourcesDownload1 />
    </section>
  );
};

export default ResourcesDownload;
