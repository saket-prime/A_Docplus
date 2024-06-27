import { FunctionComponent } from "react";
import CareerHero from "../components/CareerHero";
import CareerInfo from "../components/CareerInfo";
import CareerAchievementsSection from "../components/CareerAchievementsSection";
import CareerBenefits from "../components/CareerBenefits";
import CareerJobOpenings from "../components/CareerJobOpenings";
import CareerCTASection from "../components/CareerCTASection";
import CareerContact from "../components/CareerContact";
import FooterDesktop3 from "../components/FooterDesktop3";
import styles from "./CareersDesktop.module.css";

const CareersDesktop: FunctionComponent = () => {
  return (
    <div className={styles.careersDesktop}>
      <CareerHero />
      <CareerInfo />
      <CareerAchievementsSection />
      <CareerBenefits />
      <CareerJobOpenings />
      <CareerCTASection />
      <CareerContact />
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
        propFlex="unset"
        propAlignSelf="stretch"
        propPadding="0px var(--padding-5xl)"
        propPadding1="unset"
        propPadding2="unset"
        propAlignSelf1="stretch"
      />
    </div>
  );
};

export default CareersDesktop;
