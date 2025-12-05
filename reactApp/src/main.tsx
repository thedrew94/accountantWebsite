import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./i18n/i18n";
import "./index.css";
import "./styles/Button.css";
import "./styles/EstimationCalculator.css";
import "./styles/Footer.css";
import "./styles/Hero.css";
import "./styles/Navbar.css";
import "./styles/NewsSection.css";
import "./styles/OurMission.css";
import "./styles/OurStory.css";
import "./styles/PageLoader.css";
import "./styles/Services.css";
import "./styles/Sidemenu.css";
import App from "./App";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
