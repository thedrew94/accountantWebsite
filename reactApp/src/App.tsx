import { useState } from "react";
import EstimationCalculator from "./components/EstimationCalculator";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import NewsSection from "./components/NewsSection";
import OurMission from "./components/OurMission";
import OurStory from "./components/OurStory";
import PageLoader from "./components/PageLoader";
import Services from "./components/Services";
import Sidemenu from "./components/Sidemenu";

export default function App() {
  const [sidemenuOpen, setSidemenuOpen] = useState<boolean>(false);

  return (
    <>
      <Navbar setSidemenuOpen={setSidemenuOpen} />
      <Sidemenu sidemenuOpen={sidemenuOpen} setSidemenuOpen={setSidemenuOpen} />
      <PageLoader />
      <Hero />
      {/* <InfoOverviewMobile />
    <InfoOverviewDesktop /> */}
      <main>
        <OurStory />
        <Services />
        <OurMission />
      </main>
      <EstimationCalculator />
      <NewsSection />

      <Map />
      <Footer />
    </>
  );
}

// {
//   /* <CookieModal />
//     <Sidemenu />
//     <header>
//       <Hero />
//     </header>
//    */
// }
