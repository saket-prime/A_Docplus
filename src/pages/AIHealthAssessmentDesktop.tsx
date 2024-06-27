import { FunctionComponent } from "react";
import AIHealthAssessmentHeroSection from "../components/AIHealthAssessmentHeroSection";
import AIHealthAssessmentFeatures from "../components/AIHealthAssessmentFeatures";
import AIHealthAssessmentSection from "../components/AIHealthAssessmentSection";
import AIHealthAssessmentScore from "../components/AIHealthAssessmentScore";
import AIHealthAssessmentBenefitsSect from "../components/AIHealthAssessmentBenefitsSect";
import CallToAction from "../components/CallToAction";
import FooterDesktop2 from "../components/FooterDesktop2";
import styles from "./AIHealthAssessmentDesktop.module.css";

const AIHealthAssessmentDesktop: FunctionComponent =
  () => {
    return (
      <div className={styles.aiHealthAssessmentDesktop}>
        <AIHealthAssessmentHeroSection />
        <AIHealthAssessmentFeatures />
        <AIHealthAssessmentSection />
        <AIHealthAssessmentScore />
        <AIHealthAssessmentBenefitsSect />
        <CallToAction />
        <FooterDesktop2
          logoMark="/logo-mark1.svg"
          logoSquare="/logo-square1.svg"
          asklepios="/asklepios.svg"
          iconFacebook="/icon-facebook.svg"
          iconYoutube="/icon-youtube.svg"
          iconInstagram="/icon-instagram.svg"
          iconLinkedin="/icon-linkedin.svg"
          monotoneAdd="/monotone-add11.svg"
          propWidth="unset"
          propAlignSelf="stretch"
          propMargin="0"
          propMargin1="0"
          propMargin2="0"
        />
      </div>
    );
  };

export default AIHealthAssessmentDesktop;
