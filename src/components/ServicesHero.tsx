import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ServicesHeroContent from "./ServicesHeroContent";
import TopNav3 from "./TopNav3";
import styles from "./ServicesHero.module.css";

export type ServicesHeroType = {
  className?: string;
};

const ServicesHero: FunctionComponent<ServicesHeroType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onText26Click = useCallback(() => {
    navigate("/careers");
  }, [navigate]);

  return (
    <div className={[styles.heroSection, className].join(" ")}>
      <div className={styles.heroImage}>
        <img className={styles.dAssetIcon} alt="" src="/d-asset2@2x.png" />
        <div className={styles.rectangle} />
      </div>
      <ServicesHeroContent />
      <TopNav3
        logoSquare="/logo-square@2x.png"
        solidChevronDownMd="/solid-chevron-down-md.svg"
        monotoneAdd="/monotone-add1.svg"
        onTextClick1={onText26Click}
      />
    </div>
  );
};

export default ServicesHero;
