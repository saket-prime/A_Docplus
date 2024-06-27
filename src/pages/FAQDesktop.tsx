import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopNav3 from "../components/TopNav3";
import FAQHero from "../components/FAQHero";
import FAQSection from "../components/FAQSection";
import FAQGuaranteeDescription from "../components/FAQGuaranteeDescription";
import FAQHelp from "../components/FAQHelp";
import FooterDesktop3 from "../components/FooterDesktop3";
import styles from "./FAQDesktop.module.css";

const FAQDesktop: FunctionComponent = () => {
  const navigate = useNavigate();

  const onText21Click = useCallback(() => {
    navigate("/careers");
  }, [navigate]);

  return (
    <div className={styles.faqDesktop}>
      <div className={styles.topNavWrapper}>
        <TopNav3
          logoSquare="/logo-square@2x.png"
          solidChevronDownMd="/solid-chevron-down-md.svg"
          monotoneAdd="/monotone-add1.svg"
          propMargin="unset"
          propPosition="unset"
          propTop="unset"
          propLeft="unset"
          onTextClick1={onText21Click}
        />
      </div>
      <FAQHero />
      <FAQSection />
      <div className={styles.guaranteeTitle}>
        <FAQGuaranteeDescription />
      </div>
      <div className={styles.footerButton}>
        <div className={styles.ctaSection}>
          <FAQHelp />
        </div>
      </div>
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
        propAlignSelf1="unset"
      />
    </div>
  );
};

export default FAQDesktop;
