import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FAQAccordionCard from "./FAQAccordionCard";
import TopNav3 from "./TopNav3";
import styles from "./CareerHero.module.css";

export type CareerHeroType = {
  className?: string;
};

const CareerHero: FunctionComponent<CareerHeroType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onText51Click = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onTextClick = useCallback(() => {
    navigate("/resources");
  }, [navigate]);

  return (
    <div className={[styles.page, className].join(" ")}>
      <div className={styles.heroSection}>
        <img className={styles.dAssetIcon} alt="" src="/d-asset1@2x.png" />
        <div className={styles.callToAction}>
          <div className={styles.tagMasterParent}>
            <div className={styles.tagMaster}>
              <div className={styles.pricing}>Join Us</div>
            </div>
            <div
              className={styles.joinDocplus}
            >{`Join DocPlus & Shape The Future of Health`}</div>
            <FAQAccordionCard
              howDoesDocplusWork="25 Job Openings"
              monotoneAdd="/monotone-add17.svg"
              howDoesDocplusAlignSelf="unset"
              howDoesDocplusBorderRadius="unset"
              howDoesDocplusBackgroundColor="unset"
              howDoesDocplusOverflow="unset"
              howDoesDocplusFlexDirection="row"
              howDoesDocplusFlexWrap="unset"
              howDoesDocplusPadding="unset"
              howDoesDocplusGap="16px"
              howDoesDocplusFlex="unset"
              buttonIconFABFlex="unset"
              buttonIconFABDisplay="unset"
              buttonIconFABColor="#242e49"
              buttonIconFABMinWidth="unset"
              buttonIconFABAlignSelf="unset"
              buttonIconFABFontWeight="600"
              buttonIconFABFontSize="24px"
              buttonIconFABLineHeight="32px"
              monotoneAddIconBorderRadius="12px"
              monotoneAddIconBackgroundColor="#0f67fe"
              monotoneAddIconOverflow="hidden"
              monotoneAddIconPadding="0px 20px 0px 0px"
              monotoneAddIconAlignSelf="unset"
              propHeight="24px"
              propWidth="24px"
            />
          </div>
          <div className={styles.navigation}>
            <div className={styles.scroller}>
              <b className={styles.scrollDown}>Scroll Down</b>
              <img
                className={styles.solidDoubleChevronDown}
                alt=""
                src="/solid-double-chevron-down.svg"
              />
            </div>
            <div className={styles.player}>
              <div className={styles.video}>
                <div className={styles.buttonIconFab}>
                  <img
                    className={styles.monotoneAddIcon}
                    alt=""
                    src="/monotone-add18.svg"
                  />
                </div>
                <b className={styles.playVideo}>Play Video</b>
              </div>
            </div>
          </div>
        </div>
        <TopNav3
          logoSquare="/logo-square@2x.png"
          solidChevronDownMd="/solid-chevron-down-md.svg"
          monotoneAdd="/monotone-add1.svg"
          propMargin="0 !important"
          propPosition="absolute"
          propTop="24px"
          propLeft="calc(50% - 696px)"
          onTextClick={onText51Click}
          onDropdownContainerClick={onTextClick}
        />
      </div>
    </div>
  );
};

export default CareerHero;
