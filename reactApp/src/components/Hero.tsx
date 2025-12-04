import { svgSelector } from "../utils/svgSelector";
import Button from "./Button";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "+=600",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(
      ".hero_bg",
      {
        scale: 1.5,
        ease: "power2.out",
      },
      0
    )
      .to(
        ".hero_content",
        {
          y: "-30vh",
          scale: 0.9,
          ease: "none",
        },
        0
      )
      .to(
        "main",
        {
          y: "-60vh",
          ease: "none",
        },
        0
      );

    tl.to(
      hero,
      {
        opacity: 0,
        ease: "none",
      },
      0.3
    ).to(
      "body",
      {
        backgroundColor: "#f7f7f7",
      },
      0.8
    );
  }, []);

  return (
    <>
      <div ref={heroRef} className="hero">
        <div className="hero_bg"></div>
        <div className="hero_content">
          <h2>
            Al <span>vostro fianco</span> per un assistenza fiscale tributaria e del lavoro completa ed integrata
          </h2>

          <h3>
            Lo studio PDM aiuta i clienti a generare valore a lungo termine attraverso un approccio multidisciplinare.
            Forniamo, infatti, soluzioni complete e su misura supportando le aziende nella gestione efficiente e
            assistendole nel raggiungimento degli obbiettivi prefissati.
          </h3>

          <div>
            <Button btnType="link" text="Scopri subito i nostri servizi" />
          </div>

          <div className="hero_scroll">
            <p>Continua a scorrere</p>
            {svgSelector({ svgName: "mouse", svgWidth: "28px", svgHeight: "28px", svgFill: "#f7f7f7" })}
          </div>

          <div className="hero_location">
            {svgSelector({ svgName: "building", svgWidth: "32px", svgHeight: "32px", svgFill: "#c6a163" })}
            <h6>ROMA</h6>
          </div>
        </div>
      </div>
    </>
  );
}
