import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopNav2 from "../components/TopNav2";
import TestimonialsHero from "../components/TestimonialsHero";
import TestimonialsAwards from "../components/TestimonialsAwards";
import TestimonialsUser from "../components/TestimonialsUser";
import TestimonialsDownload from "../components/TestimonialsDownload";
import TestimonialsNews from "../components/TestimonialsNews";
import TestimonialsFeaturesSection from "../components/TestimonialsFeaturesSection";
import TestimonialsDownloadFrame from "../components/TestimonialsDownloadFrame";
import FooterDesktop2 from "../components/FooterDesktop2";
import styles from "./TestimonialsDesktop.module.css";

const TestimonialsDesktop: FunctionComponent = () => {
  const navigate = useNavigate();

  const onText4Click = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onText5Click = useCallback(() => {
    navigate("/platform");
  }, [navigate]);

  const onTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onText1Click = useCallback(() => {
    navigate("/resources");
  }, [navigate]);

  const onText2Click = useCallback(() => {
    // Please sync "Contact Us (Desktop)" to the project
  }, []);

  return (
    <div className={styles.testimonialsDesktop}>
      <section className={styles.topNavWrapper}>
        <TopNav2
          logoSquare="/logo-square3@2x.png"
          frameDivTop="0"
          frameDivPosition="sticky"
          frameDivAlignSelf="stretch"
          frameDivHeight="unset"
          frameDivMarginLeft="unset"
          onTextClick={onText4Click}
          onTextClick1={onText5Click}
          onTextClick2={onTextClick}
          onTextClick3={onText1Click}
          onTextClick4={onText2Click}
        />
      </section>
      <TestimonialsHero />
      <TestimonialsAwards />
      <TestimonialsUser />
      <TestimonialsDownload
        appStoreDownloadBadge="/app-store-download-badge.svg"
        appStoreDownloadBadge1="/app-store-download-badge-1.svg"
      />
      <TestimonialsNews />
      <TestimonialsFeaturesSection />
      <TestimonialsDownloadFrame />
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
        propMargin="unset"
        propMargin1="unset"
        propMargin2="unset"
      />
    </div>
  );
};

export default TestimonialsDesktop;
