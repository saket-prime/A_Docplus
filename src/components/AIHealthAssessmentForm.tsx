import { FunctionComponent } from "react";
import styles from "./AIHealthAssessmentForm.module.css";

export type AIHealthAssessmentFormType = {
  className?: string;
};

const AIHealthAssessmentForm: FunctionComponent<AIHealthAssessmentFormType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.assessmentForm, className].join(" ")}>
      <div className={styles.frame}>
        <div className={styles.content}>
          <div className={styles.frame1}>
            <h3 className={styles.whatIsYour}>What is your gender?</h3>
            <div className={styles.inputFields}>
              <div className={styles.inputIcons}>01</div>
            </div>
          </div>
          <div className={styles.inputElements}>
            <div className={styles.button}>
              <div className={styles.content1}>
                <b className={styles.genderButtons}>Male</b>
                <img
                  className={styles.monotoneAddIcon}
                  loading="lazy"
                  alt=""
                  src="/monotone-add-32.svg"
                />
              </div>
            </div>
            <div className={styles.button1}>
              <div className={styles.content1}>
                <b className={styles.ageContent}>Female</b>
                <img
                  className={styles.monotoneAddIcon}
                  loading="lazy"
                  alt=""
                  src="/monotone-add-42.svg"
                />
              </div>
            </div>
            <button className={styles.button2}>
              <div className={styles.content3}>
                <b className={styles.medicationContent}>Other</b>
                <img
                  className={styles.monotoneAddIcon}
                  alt=""
                  src="/monotone-add-53.svg"
                />
              </div>
            </button>
          </div>
          <div className={styles.inputText}>
            <div className={styles.name}>Name</div>
            <div className={styles.content4}>
              <div className={styles.text}>
                <img
                  className={styles.monotoneAddIcon}
                  alt=""
                  src="/monotone-gender-male.svg"
                />
                <input
                  className={styles.loremusIpsumusD}
                  placeholder="Please specify your gender here..."
                  type="text"
                />
              </div>
              <img
                className={styles.solidEyeIcon}
                alt=""
                src="/solid-eye3@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frame}>
        <div className={styles.content}>
          <div className={styles.frame1}>
            <h3 className={styles.areYouTaking}>What is your age?</h3>
            <div className={styles.frame4}>
              <div className={styles.div}>02</div>
            </div>
          </div>
          <div className={styles.inputText}>
            <div className={styles.name}>Name</div>
            <div className={styles.content6}>
              <div className={styles.text}>
                <img
                  className={styles.monotoneAddIcon}
                  alt=""
                  src="/monotone-gender-male-1.svg"
                />
                <div className={styles.loremusIpsumusD1}>
                  Please enter a number from 1 - 100...
                </div>
              </div>
              <img
                className={styles.solidEyeIcon1}
                alt=""
                src="/solid-eye3@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frame}>
        <div className={styles.content}>
          <div className={styles.frame1}>
            <h3 className={styles.areYouTaking}>Are you taking medications?</h3>
            <div className={styles.inputFields}>
              <div className={styles.placeholder}>03</div>
            </div>
          </div>
          <div className={styles.frame8}>
            <button className={styles.button3}>
              <b className={styles.text2}>Yes</b>
            </button>
            <button className={styles.button4}>
              <b className={styles.text3}>No</b>
            </button>
          </div>
          <div className={styles.inputText}>
            <div className={styles.name}>Name</div>
            <div className={styles.content4}>
              <div className={styles.text}>
                <img
                  className={styles.monotoneAddIcon}
                  alt=""
                  src="/monotone-gender-male-2.svg"
                />
                <input
                  className={styles.loremusIpsumusD}
                  placeholder="Please specify your medications here..."
                  type="text"
                />
              </div>
              <img
                className={styles.solidEyeIcon}
                alt=""
                src="/solid-eye3@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frame}>
        <div className={styles.content}>
          <div className={styles.frame1}>
            <h3 className={styles.whatIsYour2}>
              What is your emotion right now?
            </h3>
            <div className={styles.frame11}>
              <div className={styles.placeholder}>04</div>
            </div>
          </div>
          <div className={styles.frame12}>
            <button className={styles.button5}>
              <div className={styles.content3}>
                <b className={styles.text5}>Sad</b>
                <img
                  className={styles.monotoneAddIcon}
                  alt=""
                  src="/monotone-add-62.svg"
                />
              </div>
            </button>
            <button className={styles.button6}>
              <div className={styles.content1}>
                <b className={styles.text6}>OK</b>
                <div className={styles.monotoneAddIcon}>
                  <div className={styles.vector} />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector4.svg"
                  />
                  <div className={styles.vector1} />
                  <div className={styles.vector2} />
                </div>
              </div>
            </button>
            <div className={styles.button7}>
              <div className={styles.content3}>
                <b className={styles.text7}>Normal</b>
                <div className={styles.monotoneAddIcon}>
                  <div className={styles.vector3} />
                  <div className={styles.vector4} />
                  <div className={styles.vector5} />
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-14.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.button8}>
              <div className={styles.content3}>
                <b className={styles.emotionContent}>Happy</b>
                <div className={styles.monotoneAddIcon}>
                  <div className={styles.vector} />
                  <div className={styles.vector1} />
                  <div className={styles.vector2} />
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector-22.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.button9}>
              <div className={styles.content3}>
                <b className={styles.exerciseContent}>Joyful</b>
                <img
                  className={styles.monotoneAddIcon}
                  loading="lazy"
                  alt=""
                  src="/monotone-add-72.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frame}>
        <div className={styles.content}>
          <div className={styles.frame1}>
            <h3 className={styles.areYouTaking}>
              How many exercise weekly do you take?
            </h3>
            <div className={styles.inputFields}>
              <div className={styles.placeholder}>05</div>
            </div>
          </div>
          <div className={styles.frame12}>
            <div className={styles.button10}>
              <b className={styles.text8}>1</b>
            </div>
            <div className={styles.button11}>
              <b className={styles.text9}>2</b>
            </div>
            <div className={styles.button12}>
              <b className={styles.text9}>3</b>
            </div>
            <div className={styles.button13}>
              <b className={styles.text11}>4</b>
            </div>
            <div className={styles.button12}>
              <b className={styles.text9}>5</b>
            </div>
            <div className={styles.button12}>
              <b className={styles.text9}>6</b>
            </div>
            <div className={styles.button12}>
              <b className={styles.text14}>7</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frame}>
        <div className={styles.content}>
          <div className={styles.frame18}>
            <div className={styles.frame19}>
              <h3 className={styles.textualAiAnalysis}>Textual AI Analysis.</h3>
              <div className={styles.pleaseWriteAny}>
                Please write any health issues that you have. Our AI will
                analyze it.
              </div>
            </div>
            <div className={styles.inputFields}>
              <div className={styles.placeholder}>06</div>
            </div>
          </div>
          <div className={styles.inputText}>
            <div className={styles.name}>Name</div>
            <div className={styles.content4}>
              <div className={styles.text}>
                <img
                  className={styles.monotoneAddIcon}
                  alt=""
                  src="/monotone-gender-male.svg"
                />
                <input
                  className={styles.loremusIpsumusD}
                  placeholder="Please write any ongoing health issues..."
                  type="text"
                />
              </div>
              <img
                className={styles.solidEyeIcon}
                alt=""
                src="/solid-eye4@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIHealthAssessmentForm;
