import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomepageDesktop from "./pages/HomepageDesktop";
import FAQDesktop from "./pages/FAQDesktop";
import CareersDesktop from "./pages/CareersDesktop";
import ServicesDesktop from "./pages/ServicesDesktop";
import ResourcesDesktop from "./pages/ResourcesDesktop";
import AIHealthAssessmentDesktop from "./pages/AIHealthAssessmentDesktop";
import PlatformDesktop from "./pages/PlatformDesktop";
import AIHealthAssistantDesktop from "./pages/AIHealthAssistantDesktop";
import AboutUsDesktop from "./pages/AboutUsDesktop";
import TestimonialsDesktop from "./pages/TestimonialsDesktop";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/faq-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/careers":
        title = "";
        metaDescription = "";
        break;
      case "/services":
        title = "";
        metaDescription = "";
        break;
      case "/resources":
        title = "";
        metaDescription = "";
        break;
      case "/ai-health-assessment":
        title = "";
        metaDescription = "";
        break;
      case "/platform":
        title = "";
        metaDescription = "";
        break;
      case "/ai-health-assistant":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/testimonials":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomepageDesktop />} />
      <Route path="/faq-desktop" element={<FAQDesktop />} />
      <Route path="/careers" element={<CareersDesktop />} />
      <Route path="/services" element={<ServicesDesktop />} />
      <Route path="/resources" element={<ResourcesDesktop />} />
      <Route
        path="/ai-health-assessment"
        element={<AIHealthAssessmentDesktop />}
      />
      <Route path="/platform" element={<PlatformDesktop />} />
      <Route
        path="/ai-health-assistant"
        element={<AIHealthAssistantDesktop />}
      />
      <Route path="/about-us" element={<AboutUsDesktop />} />
      <Route path="/testimonials" element={<TestimonialsDesktop />} />
    </Routes>
  );
}
export default App;
