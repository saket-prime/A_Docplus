import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AIHealthAssessmentHeroContent from "./AIHealthAssessmentHeroContent";
import TopNav2 from "./TopNav2";
import styles from "./AIHealthAssessmentHeroSection.module.css";

export type AIHealthAssessmentHeroSectionType = {
  className?: string;
};

const AIHealthAssessmentHeroSection: FunctionComponent<
  AIHealthAssessmentHeroSectionType
> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onText5Click = useCallback(() => {
    navigate("/platform");
  }, [navigate]);

  const onText1Click = useCallback(() => {
    navigate("/resources");
  }, [navigate]);

  const onText2Click = useCallback(() => {
    // Please sync "Contact Us (Desktop)" to the project
  }, []);

  return (
    <section className={[styles.heroSection, className].join(" ")}>
      <div className={styles.heroImage}>
        <img className={styles.dAssetIcon} alt="" src="/d-asset3@2x.png" />
        <div className={styles.vector} />
      </div>
      <AIHealthAssessmentHeroContent />
      <TopNav2
        logoSquare="/logo-square3@2x.png"
        frameDivTop="0"
        frameDivPosition="sticky"
        frameDivAlignSelf="unset"
        frameDivHeight="80px"
        frameDivMarginLeft="-632px"
        onTextClick1={onText5Click}
        onTextClick3={onText1Click}
        onTextClick4={onText2Click}
      />
    </section>
  );
};

export default AIHealthAssessmentHeroSection;
