import { FunctionComponent } from "react";
import ServicesCoreCards from "./ServicesCoreCards";
import styles from "./ServicesCoreFeatures.module.css";

export type ServicesCoreFeaturesType = {
  className?: string;
};

const ServicesCoreFeatures: FunctionComponent<ServicesCoreFeaturesType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.interactions, className].join(" ")}>
      <ServicesCoreCards
        monotoneAdd="/monotone-add7.svg"
        naturalInteractions="Natural Interactions"
        engageInNaturalAndInforma="Engage in natural and informative conversations with the AI Health Assistant for personalized health advice"
      />
      <ServicesCoreCards
        monotoneAdd="/monotone-add9.svg"
        naturalInteractions="Personalized Health Insights"
        engageInNaturalAndInforma="Receive personalized health insights based on the AI's analysis of your health metrics"
        interactionContainerBorderRadius="25px"
      />
      <ServicesCoreCards
        monotoneAdd="/monotone-add10.svg"
        naturalInteractions="Symptom Assessment"
        engageInNaturalAndInforma="Describe your symptoms, and the AI Health Assistant can provide initial assessments,"
        interactionContainerBorderRadius="25px"
      />
    </div>
  );
};

export default ServicesCoreFeatures;
