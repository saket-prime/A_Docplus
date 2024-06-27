import { FunctionComponent } from "react";
import FrameComponent12 from "../components/FrameComponent12";
import PlatformHeroContent from "../components/PlatformHeroContent";
import PlatformCallToAction from "../components/PlatformCallToAction";
import PlatformMobileIntro from "../components/PlatformMobileIntro";
import PlatformTestimonials from "../components/PlatformTestimonials";
import PlatformApp from "../components/PlatformApp";
import PlatformDownload from "../components/PlatformDownload";
import FooterDesktop1 from "../components/FooterDesktop1";
import styles from "./PlatformDesktop.module.css";

const PlatformDesktop: FunctionComponent = () => {
  return (
    <div className={styles.platformDesktop}>
      <section className={styles.heroSection}>
        <FrameComponent12 />
        <PlatformHeroContent />
      </section>
      <PlatformCallToAction />
      <PlatformMobileIntro />
      <PlatformTestimonials />
      <PlatformApp />
      <PlatformDownload />
      <FooterDesktop1 />
    </div>
  );
};

export default PlatformDesktop;
