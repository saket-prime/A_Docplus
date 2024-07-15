import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FooterDesktop3.module.css";

export type FooterDesktop3Type = {
  className?: string;
  logoMark?: string;
  monotoneAdd?: string;
  monotoneAdd1?: string;
  logoSquare?: string;
  asklepios?: string;
  iconFacebook?: string;
  iconYoutube?: string;
  iconInstagram?: string;
  iconLinkedin?: string;
  male?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propPadding2?: CSSProperties["padding"];
  propAlignSelf1?: CSSProperties["alignSelf"];
};

const FooterDesktop3: FunctionComponent<FooterDesktop3Type> = ({
  className = "",
  logoMark,
  monotoneAdd,
  monotoneAdd1,
  logoSquare,
  asklepios,
  iconFacebook,
  iconYoutube,
  iconInstagram,
  iconLinkedin,
  male,
  propFlex,
  propAlignSelf,
  propPadding,
  propPadding1,
  propPadding2,
  propAlignSelf1,
}) => {
  const footerContainerStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
      padding: propPadding,
    };
  }, [propFlex, propAlignSelf, propPadding]);

  const companyStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const infoCompanyStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  return (
    <div
      className={[styles.footerContainer, className].join(" ")}
      style={footerContainerStyle}
    >
      <div className={styles.footer}>
        <img className={styles.logoMarkIcon} alt="" src={logoMark} />
        <div className={styles.footerInfo}>
          <div className={styles.description}>
            <div className={styles.company} style={companyStyle}>
              <div className={styles.infoCompany} style={infoCompanyStyle}>
                <div className={styles.logoSquareHorizontal}>
                  <img
                    className={styles.logoSquareIcon}
                    alt=""
                    src={logoSquare}
                  />
                  <img
                    className={styles.asklepiosIcon}
                    alt=""
                    src={asklepios}
                  />
                </div>
                <div className={styles.ourMissionIs}>
                  Our mission is to leverage AI/ML to improve the human health
                  experience.
                </div>
              </div>
              <div className={styles.socialsLinks}>
                <img
                  className={styles.iconFacebook}
                  alt=""
                  src={iconFacebook}
                />
                <img className={styles.iconFacebook} alt="" src={iconYoutube} />
                <img
                  className={styles.iconFacebook}
                  alt=""
                  src={iconInstagram}
                />
                <img
                  className={styles.iconFacebook}
                  alt=""
                  src={iconLinkedin}
                />
              </div>
              <div className={styles.newsletter}>
                <i className={styles.subscribeToOur}>
                  Subscribe to our newsletter
                </i>
                <div className={styles.inputText}>
                  <div className={styles.name}>Name</div>
                  <div className={styles.content2}>
                    <div className={styles.text2}>
                      <div className={styles.monotoneGenderMale}>
                        <img className={styles.maleIcon} alt="" src={male} />
                        <div className={styles.vector} />
                      </div>
                      <div className={styles.loremusIpsumusD}>
                        Enter your name...
                      </div>
                    </div>
                    <div className={styles.monotoneGenderMale}>
                      <img
                        className={styles.vectorStrokeIcon}
                        alt=""
                        src="/vector-stroke.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.legalNavigation}>
              <div className={styles.navigationComponent}>
                <div className={styles.mainPage}>Main Page</div>
                <div className={styles.navigationItems}>
                  <div className={styles.pageNavigation}>
                    <div className={styles.linkIconContainer}>
                      <div className={styles.atom} />
                    </div>
                    <div className={styles.text3}>
                      <div className={styles.pageTitle}>Homepage</div>
                    </div>
                  </div>
                  <div className={styles.text3}>
                    <div className={styles.itemDetails}>Platform</div>
                  </div>
                  <div className={styles.text3} style={textStyle}>
                    <div className={styles.itemDetails}>Services</div>
                  </div>
                  <div className={styles.text3}>
                    <div className={styles.text8}>About Us</div>
                  </div>
                  <div className={styles.text3}>
                    <div className={styles.text10}>Contact Us</div>
                  </div>
                </div>
              </div>
              <div className={styles.navigationComponent}>
                <div className={styles.mainPage}>Resources</div>
                <div className={styles.containers}>
                  <div className={styles.text11}>
                    <div className={styles.subHeadings}>Blog Posts</div>
                  </div>
                  <div className={styles.text11}>
                    <div className={styles.itemsTwo}>Interviews</div>
                  </div>
                  <div className={styles.text11}>
                    <div className={styles.itemsFour}>Videos</div>
                  </div>
                  <div className={styles.text11}>
                    <div className={styles.itemsSix}>Tutorials</div>
                  </div>
                </div>
              </div>
              <div className={styles.navigationComponent}>
                <div className={styles.mainPage}>Legal</div>
                <div className={styles.frame}>
                  <div className={styles.text11}>
                    <div className={styles.text16}>Privacy Policy</div>
                  </div>
                  <div className={styles.text11}>
                    <div className={styles.text16}>{`Terms & Conditions`}</div>
                  </div>
                  <div className={styles.text11}>
                    <div className={styles.text16}>Lawyer’s Corner</div>
                  </div>
                  <div className={styles.text11}>
                    <div className={styles.text22}>Regulations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.button}>
            <div className={styles.content}>
              <b className={styles.text}>Download The App</b>
              <img
                className={styles.monotoneAddIcon}
                alt=""
                src={monotoneAdd}
              />
            </div>
          </div>
          <div className={styles.button1}>
            <div className={styles.content}>
              <b className={styles.text1}>Back To Top</b>
              <img
                className={styles.monotoneAddIcon}
                alt=""
                src={monotoneAdd1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterDesktop3;
