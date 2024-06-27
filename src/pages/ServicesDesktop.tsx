import { FunctionComponent } from "react";
import ServicesHero from "../components/ServicesHero";
import ServicesInfo from "../components/ServicesInfo";
import ServicesCommitment from "../components/ServicesCommitment";
import ServiceBenefits from "../components/ServiceBenefits";
import ServicesCore from "../components/ServicesCore";
import ServicesDownloads from "../components/ServicesDownloads";
import FooterDesktop3 from "../components/FooterDesktop3";
import styles from "./ServicesDesktop.module.css";

const ServicesDesktop: FunctionComponent = () => {
  return (
    <div className={styles.servicesDesktop}>
      <ServicesHero />
      <ServicesInfo />
      <ServicesCommitment />
      <ServiceBenefits />
      <ServicesCore />
      <ServicesDownloads />
      <div className={styles.footerContainerWrapper}>
        <FooterDesktop3
          logoMark="/logo-mark1.svg"
          monotoneAdd="/monotone-add11.svg"
          monotoneAdd1="/monotone-add12.svg"
          logoSquare="/logo-square1.svg"
          asklepios="/asklepios.svg"
          iconFacebook="/icon-facebook1.svg"
          iconYoutube="/icon-youtube1.svg"
          iconInstagram="/icon-instagram1.svg"
          iconLinkedin="/icon-linkedin1.svg"
          male="/male.svg"
        />
      </div>
    </div>
  );
};

export default ServicesDesktop;
