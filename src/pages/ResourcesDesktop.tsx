import { FunctionComponent } from "react";
import TopNav02 from "../components/TopNav02";
import Hero from "../components/Hero";
import ResourcesContentMenu from "../components/ResourcesContentMenu";
import ResourcesMenuContent from "../components/ResourcesMenuContent";
import ResourcesDownload from "../components/ResourcesDownload";
import FooterDesktop02 from "../components/FooterDesktop02";
import styles from "./ResourcesDesktop.module.css";

const ResourcesDesktop: FunctionComponent = () => {
  return (
    <div className={styles.resourcesDesktop}>
      <TopNav02 />
      <Hero />
      <main className={styles.main}>
        <section className={styles.contentParent}>
          <ResourcesContentMenu />
          <ResourcesMenuContent />
        </section>
        <ResourcesDownload />
        <FooterDesktop02 />
      </main>
    </div>
  );
};

export default ResourcesDesktop;
