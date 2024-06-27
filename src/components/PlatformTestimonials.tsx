import { FunctionComponent } from "react";
import PlatformTestimonial1 from "./PlatformTestimonial1";
import PlatformTestimonial from "./PlatformTestimonial";
import styles from "./PlatformTestimonials.module.css";

export type PlatformTestimonialsType = {
  className?: string;
};

const PlatformTestimonials: FunctionComponent<PlatformTestimonialsType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.containerWrapper, className].join(" ")}>
      <div className={styles.container}>
        <PlatformTestimonial1 />
        <PlatformTestimonial />
      </div>
    </section>
  );
};

export default PlatformTestimonials;
