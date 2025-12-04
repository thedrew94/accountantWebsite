import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CookieModal from "./components/CookieModal";
import EstimationCalculator from "./components/EstimationCalculator";
import Hero from "./components/Hero";
import InfoOverviewDesktop from "./components/InfoOverviewDesktop";
import InfoOverviewMobile from "./components/InfoOverviewMobile";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import NewsSection from "./components/NewsSection";
import OurMission from "./components/OurMission";
import OurStory from "./components/OurStory";
import Services from "./components/Services";
import Sidemenu from "./components/Sidemenu";
import "./i18n/i18n";
import "./index.css";
import "./styles/PageLoader.css";
import "./styles/Button.css";
import "./styles/Hero.css";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";

import imgtest from "./utils/low-poly-grid-haikei.svg";
import Button from "./components/Button";
import { svgSelector } from "./utils/svgSelector";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <PageLoader />
    <Hero />
    {/* <InfoOverviewMobile />
    <InfoOverviewDesktop /> */}
    <main>
      <OurStory />
      <Services />
    </main>
    <EstimationCalculator />
    <OurMission />
    <NewsSection />
    <Map />
    <Footer />

    {/* <CookieModal />
    <Sidemenu />
    <header>
      <Navbar />
      <Hero />
    </header>
 

   */}
  </BrowserRouter>
);
