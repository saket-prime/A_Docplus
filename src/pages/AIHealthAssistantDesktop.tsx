import { FunctionComponent } from "react";
import AssistantHero from "../components/AssistantHero";
import AssistantHeroImage from "../components/AssistantHeroImage";
import AssistantPartners from "../components/AssistantPartners";
import AssistantFeatures from "../components/AssistantFeatures";
import AssistantDemo from "../components/AssistantDemo";
import AssistantTestimonials from "../components/AssistantTestimonials";
import AssistantBenefits from "../components/AssistantBenefits";
import AssistantLLM from "../components/AssistantLLM";
import AssistantDownload from "../components/AssistantDownload";
import FooterDesktop1 from "../components/FooterDesktop1";
import styles from "./AIHealthAssistantDesktop.module.css";

const AIHealthAssistantDesktop: FunctionComponent =
  () => {
    return (
      <div className={styles.aiHealthAssistantDesktop}>
        <AssistantHero />
        <AssistantHeroImage />
        <section className={styles.containerWrapper}>
          <AssistantPartners />
        </section>
        <AssistantFeatures />
        <AssistantDemo />
        <AssistantTestimonials />
        <AssistantBenefits />
        <AssistantLLM />
        <AssistantDownload />
        <FooterDesktop1 propPadding="0px var(--padding-mini)" />
      </div>
    );
  };

export default AIHealthAssistantDesktop;
