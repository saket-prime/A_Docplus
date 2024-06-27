import { FunctionComponent } from "react";
import TestimonialsUserCards from "./TestimonialsUserCards";
import styles from "./TestimonialsUserRow.module.css";

export type TestimonialsUserRowType = {
  className?: string;
};

const TestimonialsUserRow: FunctionComponent<TestimonialsUserRowType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.row, className].join(" ")}>
      <TestimonialsUserCards
        profilePic="/profile-pic@2x.png"
        asAHealthcareProviderImIm="”As a healthcare provider, I'm impressed by DocPlus' commitment to enhancing patient care. Their platform not only streamlines my full time practice with ease.”"
        solidStar="/solid-star-3.svg"
        heading="Carl Johnson"
        heading1="Physician In Training"
      />
      <TestimonialsUserCards
        profilePic="/profile-pic-1@2x.png"
        asAHealthcareProviderImIm="“Working with DocPlus has been a game-changer for our healthcare analytics team. Their platform simplifies data analysis.”"
        solidStar="/solid-star1.svg"
        heading="Makise Kurisu"
        heading1="Mercks Product Designer"
      />
      <TestimonialsUserCards
        profilePic="/profile-pic-2@2x.png"
        asAHealthcareProviderImIm="“DocPlus has truly changed the way I approach my health. Their amazing personalized AI assessments are not only accurate but also incredibly, awesomely insightful.”"
        solidStar="/solid-star1.svg"
        heading="Gerard Heart"
        heading1={`Doctor & Health Enthusiast`}
      />
      <TestimonialsUserCards
        profilePic="/profile-pic-3@2x.png"
        asAHealthcareProviderImIm="“I was skeptical about AI in healthcare, but DocPlus changed my perspective. Their AI health assessment was incredibly accurate.”"
        solidStar="/solid-star1.svg"
        heading="Kaori Miyazono"
        heading1="Biopharma CEO"
      />
      <TestimonialsUserCards
        profilePic="/profile-pic-4@2x.png"
        asAHealthcareProviderImIm="“DocPlus has transformed the way I manage my health. Their AI-driven platform provides personalized recommendations and insights that have helped me.”"
        solidStar="/solid-star1.svg"
        heading="Daniel Smoke"
        heading1="Cardiologist"
      />
    </div>
  );
};

export default TestimonialsUserRow;
