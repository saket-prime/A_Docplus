import { FunctionComponent } from "react";
import AboutUsHero from "../components/AboutUsHero";
import AboutUsValues from "../components/AboutUsValues";
import AboutUsReputation from "../components/AboutUsReputation";
import AboutUsFeature from "../components/AboutUsFeature";
import AboutUsStory from "../components/AboutUsStory";
import AboutUsTeam from "../components/AboutUsTeam";
import AboutUsCarrer from "../components/AboutUsCarrer";
import FooterDesktop2 from "../components/FooterDesktop2";
import styles from "./AboutUsDesktop.module.css";

const AboutUsDesktop: FunctionComponent = () => {
  return (
    <div className={styles.aboutUsDesktop}>
      <AboutUsHero />
      <AboutUsValues />
      <AboutUsReputation />
      <AboutUsFeature />
      <AboutUsStory />
      <AboutUsTeam />
      <AboutUsCarrer />
      <FooterDesktop2
        logoMark="/logo-mark1.svg"
        logoSquare="/logo-square1.svg"
        asklepios="/asklepios.svg"
        iconFacebook="/icon-facebook.svg"
        iconYoutube="/icon-youtube.svg"
        iconInstagram="/icon-instagram.svg"
        iconLinkedin="/icon-linkedin.svg"
        monotoneAdd="/monotone-add11.svg"
      />
    </div>
  );
};

export default AboutUsDesktop;
