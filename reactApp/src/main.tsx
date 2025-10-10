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
import Footer from "./components/Footer";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <CookieModal />
    <Sidemenu />
    <header>
      <Navbar />
      <Hero />
    </header>
    <InfoOverviewMobile />
    <InfoOverviewDesktop />
    <main>
      <OurStory />
      <Services />
    </main>
    <EstimationCalculator />
    <OurMission />
    <NewsSection />
    <Map />
    <Footer />
  </BrowserRouter>
);
