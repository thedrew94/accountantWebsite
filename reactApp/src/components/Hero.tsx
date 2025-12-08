import { svgSelector } from "../utils/svgSelector";
import Button from "./Button";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
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
        end: "+=1000",
        scrub: 1,
        pin: true,
        pinSpacing: false,
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
          yPercent: "-100vh",
          ease: "none",
          scale: 1,
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
        <div className="hero_bg">
          <svg viewBox="0 0 900 600">
            <g strokeWidth="1" strokeLinejoin="bevel">
              <path d="M407 249.4L360 234.1L369 294.1Z" fill="#081a28" stroke="#081a28"></path>
              <path d="M249 271.9L337 368.6L369 294.1Z" fill="#0c2435" stroke="#0c2435"></path>
              <path d="M461 378.9L511 296.1L407 249.4Z" fill="#15384f" stroke="#15384f"></path>
              <path d="M360 234.1L249 271.9L369 294.1Z" fill="#081a28" stroke="#081a28"></path>
              <path d="M461 378.9L407 249.4L369 294.1Z" fill="#19435d" stroke="#19435d"></path>
              <path d="M337 368.6L461 378.9L369 294.1Z" fill="#297ea6" stroke="#297ea6"></path>
              <path d="M439 86.7L258 165.4L360 234.1Z" fill="#00101c" stroke="#00101c"></path>
              <path d="M360 234.1L258 165.4L249 271.9Z" fill="#297ea6" stroke="#297ea6"></path>
              <path d="M439 86.7L360 234.1L407 249.4Z" fill="#246688" stroke="#246688"></path>
              <path d="M511 296.1L531 248.4L407 249.4Z" fill="#0c2435" stroke="#0c2435"></path>
              <path d="M337 368.6L427 421.3L461 378.9Z" fill="#205a7a" stroke="#205a7a"></path>
              <path d="M531 248.4L485 123.4L407 249.4Z" fill="#1d4e6b" stroke="#1d4e6b"></path>
              <path d="M298 430.9L307 424.9L337 368.6Z" fill="#112e42" stroke="#112e42"></path>
              <path d="M337 368.6L307 424.9L427 421.3Z" fill="#15384f" stroke="#15384f"></path>
              <path d="M479 422.3L516 382.6L461 378.9Z" fill="#297ea6" stroke="#297ea6"></path>
              <path d="M461 378.9L516 382.6L511 296.1Z" fill="#112e42" stroke="#112e42"></path>
              <path d="M622 357.9L556 219.4L531 248.4Z" fill="#1d4e6b" stroke="#1d4e6b"></path>
              <path d="M622 357.9L531 248.4L511 296.1Z" fill="#297ea6" stroke="#297ea6"></path>
              <path d="M531 248.4L556 219.4L485 123.4Z" fill="#19435d" stroke="#19435d"></path>
              <path d="M177 390.9L298 430.9L337 368.6Z" fill="#15384f" stroke="#15384f"></path>
              <path d="M307 424.9L366 502.6L427 421.3Z" fill="#297ea6" stroke="#297ea6"></path>
              <path d="M485 123.4L439 86.7L407 249.4Z" fill="#0c2435" stroke="#0c2435"></path>
              <path d="M516 382.6L539 360.9L511 296.1Z" fill="#112e42" stroke="#112e42"></path>
              <path d="M427 421.3L479 422.3L461 378.9Z" fill="#15384f" stroke="#15384f"></path>
              <path d="M516 382.6L523 468.6L539 360.9Z" fill="#081a28" stroke="#081a28"></path>
              <path d="M479 441.9L479 422.3L427 421.3Z" fill="#0c2435" stroke="#0c2435"></path>
              <path d="M258 165.4L186 254.1L249 271.9Z" fill="#277297" stroke="#277297"></path>
              <path d="M249 271.9L177 390.9L337 368.6Z" fill="#0c2435" stroke="#0c2435"></path>
              <path d="M556 219.4L536 131.7L485 123.4Z" fill="#19435d" stroke="#19435d"></path>
              <path d="M465 0L448 0L439 86.7Z" fill="#00101c" stroke="#00101c"></path>
              <path d="M385 522.3L479 441.9L427 421.3Z" fill="#1d4e6b" stroke="#1d4e6b"></path>
              <path d="M479 422.3L523 468.6L516 382.6Z" fill="#112e42" stroke="#112e42"></path>
              <path d="M258 165.4L181 157.1L186 254.1Z" fill="#00101c" stroke="#00101c"></path>
              <path d="M177 154.7L181 157.1L228 87.4Z" fill="#1d4e6b" stroke="#1d4e6b"></path>
              <path d="M228 87.4L181 157.1L258 165.4Z" fill="#0c2435" stroke="#0c2435"></path>
              <path d="M181 157.1L110 249.1L186 254.1Z" fill="#277297" stroke="#277297"></path>
              <path d="M281 51.7L228 87.4L258 165.4Z" fill="#081a28" stroke="#081a28"></path>
              <path d="M439 86.7L281 51.7L258 165.4Z" fill="#246688" stroke="#246688"></path>
              <path d="M110 249.1L177 390.9L186 254.1Z" fill="#297ea6" stroke="#297ea6"></path>
              <path d="M186 254.1L177 390.9L249 271.9Z" fill="#0c2435" stroke="#0c2435"></path>
              <path d="M212 474.3L366 502.6L298 430.9Z" fill="#112e42" stroke="#112e42"></path>
              <path d="M298 430.9L366 502.6L307 424.9Z" fill="#0c2435" stroke="#0c2435"></path>
              <path d="M532 499.6L523 468.6L479 441.9Z" fill="#0c2435" stroke="#0c2435"></path>
              <path d="M479 441.9L523 468.6L479 422.3Z" fill="#19435d" stroke="#19435d"></path>
              <path d="M239 32.7L202 75.7L228 87.4Z" fill="#00101c" stroke="#00101c"></path>
              <path d="M228 87.4L202 75.7L177 154.7Z" fill="#297ea6" stroke="#297ea6"></path>
              <path d="M388 600L385 522.3L366 502.6Z" fill="#0c2435" stroke="#0c2435"></path>
              <path d="M366 502.6L385 522.3L427 421.3Z" fill="#0c2435" stroke="#0c2435"></path>
              <path d="M654 413.6L622 357.9L539 360.9Z" fill="#081a28" stroke="#081a28"></path>
              <path d="M539 360.9L622 357.9L511 296.1Z" fill="#112e42" stroke="#112e42"></path>
              <path d="M556 219.4L701 168.7L536 131.7Z" fill="#277297" stroke="#277297"></path>
              <path d="M448 0L331 0L439 86.7Z" fill="#15384f" stroke="#15384f"></path>
              <path d="M439 86.7L331 0L281 51.7Z" fill="#297ea6" stroke="#297ea6"></path>
              <path d="M281 51.7L239 32.7L228 87.4Z" fill="#19435d" stroke="#19435d"></path>
              <path d="M82 260.4L110 249.1L0 199.4Z" fill="#081a28" stroke="#081a28"></path>
              <path d="M177 154.7L110 249.1L181 157.1Z" fill="#297ea6" stroke="#297ea6"></path>
              <path d="M287 0L239 32.7L281 51.7Z" fill="#246688" stroke="#246688"></path>
              <path d="M134 417.6L212 474.3L177 390.9Z" fill="#081a28" stroke="#081a28"></path>
              <path d="M177 390.9L212 474.3L298 430.9Z" fill="#081a28" stroke="#081a28"></path>
              <path d="M465 0L439 86.7L485 123.4Z" fill="#00101c" stroke="#00101c"></path>
              <path d="M536 131.7L465 0L485 123.4Z" fill="#112e42" stroke="#112e42"></path>
              <path d="M331 0L287 0L281 51.7Z" fill="#1d4e6b" stroke="#1d4e6b"></path>
              <path d="M385 522.3L532 499.6L479 441.9Z" fill="#297ea6" stroke="#297ea6"></path>
              <path d="M523 468.6L654 413.6L539 360.9Z" fill="#081a28" stroke="#081a28"></path>
              <path d="M82 260.4L134 417.6L177 390.9Z" fill="#0c2435" stroke="#0c2435"></path>
              <path d="M0 199.4L110 249.1L177 154.7Z" fill="#00101c" stroke="#00101c"></path>
              <path d="M110 249.1L82 260.4L177 390.9Z" fill="#297ea6" stroke="#297ea6"></path>
              <path d="M239 32.7L218 0L202 75.7Z" fill="#081a28" stroke="#081a28"></path>
              <path d="M39 0L0 199.4L177 154.7Z" fill="#112e42" stroke="#112e42"></path>
              <path d="M287 0L218 0L239 32.7Z" fill="#297ea6" stroke="#297ea6"></path>
              <path d="M644 489.3L654 413.6L523 468.6Z" fill="#1d4e6b" stroke="#1d4e6b"></path>
              <path d="M622 357.9L701 223.1L556 219.4Z" fill="#205a7a" stroke="#205a7a"></path>
              <path d="M716 318.1L701 223.1L622 357.9Z" fill="#19435d" stroke="#19435d"></path>
              <path d="M536 131.7L642 0L465 0Z" fill="#297ea6" stroke="#297ea6"></path>
              <path d="M701 223.1L701 168.7L556 219.4Z" fill="#297ea6" stroke="#297ea6"></path>
              <path d="M232 600L388 600L366 502.6Z" fill="#00101c" stroke="#00101c"></path>
              <path d="M385 522.3L433 600L532 499.6Z" fill="#00101c" stroke="#00101c"></path>
              <path d="M388 600L433 600L385 522.3Z" fill="#1d4e6b" stroke="#1d4e6b"></path>
              <path d="M532 499.6L644 489.3L523 468.6Z" fill="#246688" stroke="#246688"></path>
              <path d="M654 413.6L716 318.1L622 357.9Z" fill="#277297" stroke="#277297"></path>
              <path d="M701 223.1L805 106.7L701 168.7Z" fill="#277297" stroke="#277297"></path>
              <path d="M134 417.6L174 542.3L212 474.3Z" fill="#19435d" stroke="#19435d"></path>
              <path d="M212 474.3L232 600L366 502.6Z" fill="#246688" stroke="#246688"></path>
              <path d="M112 600L174 542.3L12 521.6Z" fill="#00101c" stroke="#00101c"></path>
              <path d="M710 75.4L701 132.7L805 106.7Z" fill="#277297" stroke="#277297"></path>
              <path d="M701 168.7L701 132.7L536 131.7Z" fill="#297ea6" stroke="#297ea6"></path>
              <path d="M650 526.3L644 489.3L532 499.6Z" fill="#277297" stroke="#277297"></path>
              <path d="M819 422.9L811 329.1L716 318.1Z" fill="#00101c" stroke="#00101c"></path>
              <path d="M174 542.3L232 600L212 474.3Z" fill="#15384f" stroke="#15384f"></path>
              <path d="M174 542.3L224 600L232 600Z" fill="#0c2435" stroke="#0c2435"></path>
              <path d="M710 75.4L642 0L536 131.7Z" fill="#277297" stroke="#277297"></path>
              <path d="M637 600L650 526.3L532 499.6Z" fill="#205a7a" stroke="#205a7a"></path>
              <path d="M819 422.9L716 318.1L654 413.6Z" fill="#0c2435" stroke="#0c2435"></path>
              <path d="M0 199.4L0 318.9L82 260.4Z" fill="#277297" stroke="#277297"></path>
              <path d="M82 260.4L0 327.1L134 417.6Z" fill="#246688" stroke="#246688"></path>
              <path d="M805 106.7L701 132.7L701 168.7Z" fill="#1d4e6b" stroke="#1d4e6b"></path>
              <path d="M701 132.7L710 75.4L536 131.7Z" fill="#277297" stroke="#277297"></path>
              <path d="M39 0L177 154.7L202 75.7Z" fill="#297ea6" stroke="#297ea6"></path>
              <path d="M0 318.9L0 327.1L82 260.4Z" fill="#19435d" stroke="#19435d"></path>
              <path d="M0 327.1L0 397.6L134 417.6Z" fill="#277297" stroke="#277297"></path>
              <path d="M174 542.3L112 600L224 600Z" fill="#277297" stroke="#277297"></path>
              <path d="M433 600L637 600L532 499.6Z" fill="#205a7a" stroke="#205a7a"></path>
              <path d="M819 422.9L654 413.6L644 489.3Z" fill="#0c2435" stroke="#0c2435"></path>
              <path d="M218 0L39 0L202 75.7Z" fill="#1d4e6b" stroke="#1d4e6b"></path>
              <path d="M710 75.4L715 0L642 0Z" fill="#1d4e6b" stroke="#1d4e6b"></path>
              <path d="M805 106.7L715 0L710 75.4Z" fill="#1d4e6b" stroke="#1d4e6b"></path>
              <path d="M12 521.6L174 542.3L134 417.6Z" fill="#112e42" stroke="#112e42"></path>
              <path d="M819 422.9L644 489.3L650 526.3Z" fill="#0c2435" stroke="#0c2435"></path>
              <path d="M716 318.1L811 329.1L701 223.1Z" fill="#297ea6" stroke="#297ea6"></path>
              <path d="M0 327.1L-7 491.3L0 397.6Z" fill="#1d4e6b" stroke="#1d4e6b"></path>
              <path d="M0 397.6L-7 491.3L134 417.6Z" fill="#297ea6" stroke="#297ea6"></path>
              <path d="M0 318.9L-7 491.3L0 327.1Z" fill="#15384f" stroke="#15384f"></path>
              <path d="M0 199.4L-7 491.3L0 318.9Z" fill="#1d4e6b" stroke="#1d4e6b"></path>
              <path d="M-7 491.3L12 521.6L134 417.6Z" fill="#246688" stroke="#246688"></path>
              <path d="M637 600L676 600L650 526.3Z" fill="#19435d" stroke="#19435d"></path>
              <path d="M877 225.4L805 106.7L701 223.1Z" fill="#081a28" stroke="#081a28"></path>
              <path d="M39 0L0 0L0 199.4Z" fill="#112e42" stroke="#112e42"></path>
              <path d="M0 199.4L0 0L-7 491.3Z" fill="#112e42" stroke="#112e42"></path>
              <path d="M218 0L0 -12.3L39 0Z" fill="#277297" stroke="#277297"></path>
              <path d="M39 0L0 -12.3L0 0Z" fill="#297ea6" stroke="#297ea6"></path>
              <path d="M0 0L0 -12.3L-7 491.3Z" fill="#00101c" stroke="#00101c"></path>
              <path d="M287 0L0 -12.3L218 0Z" fill="#00101c" stroke="#00101c"></path>
              <path d="M331 0L0 -12.3L287 0Z" fill="#15384f" stroke="#15384f"></path>
              <path d="M448 0L0 -12.3L331 0Z" fill="#1d4e6b" stroke="#1d4e6b"></path>
              <path d="M465 0L0 -12.3L448 0Z" fill="#205a7a" stroke="#205a7a"></path>
              <path d="M642 0L0 -12.3L465 0Z" fill="#00101c" stroke="#00101c"></path>
              <path d="M715 0L0 -12.3L642 0Z" fill="#15384f" stroke="#15384f"></path>
              <path d="M742 600L819 422.9L650 526.3Z" fill="#0c2435" stroke="#0c2435"></path>
              <path d="M811 329.1L877 225.4L701 223.1Z" fill="#15384f" stroke="#15384f"></path>
              <path d="M-7 491.3L0 554.3L12 521.6Z" fill="#246688" stroke="#246688"></path>
              <path d="M12 521.6L0 554.3L112 600Z" fill="#19435d" stroke="#19435d"></path>
              <path d="M676 600L742 600L650 526.3Z" fill="#19435d" stroke="#19435d"></path>
              <path d="M900 269.4L877 225.4L811 329.1Z" fill="#15384f" stroke="#15384f"></path>
              <path d="M-7 491.3L0 600L0 554.3Z" fill="#277297" stroke="#277297"></path>
              <path d="M0 554.3L0 600L112 600Z" fill="#00101c" stroke="#00101c"></path>
              <path d="M900 326.1L811 329.1L900 350.6Z" fill="#081a28" stroke="#081a28"></path>
              <path d="M900 326.1L900 269.4L811 329.1Z" fill="#205a7a" stroke="#205a7a"></path>
              <path d="M900 269.4L900 253.9L877 225.4Z" fill="#1d4e6b" stroke="#1d4e6b"></path>
              <path d="M900 0L835 0L805 106.7Z" fill="#277297" stroke="#277297"></path>
              <path d="M900 350.6L811 329.1L819 422.9Z" fill="#112e42" stroke="#112e42"></path>
              <path d="M900 183.7L805 106.7L877 225.4Z" fill="#205a7a" stroke="#205a7a"></path>
              <path d="M805 106.7L835 0L715 0Z" fill="#1d4e6b" stroke="#1d4e6b"></path>
              <path d="M715 0L835 0L0 -12.3Z" fill="#277297" stroke="#277297"></path>
              <path d="M900 253.9L900 183.7L877 225.4Z" fill="#277297" stroke="#277297"></path>
              <path d="M870 503.6L900 350.6L819 422.9Z" fill="#0c2435" stroke="#0c2435"></path>
              <path d="M866 522.3L870 503.6L819 422.9Z" fill="#297ea6" stroke="#297ea6"></path>
              <path d="M866 522.3L819 422.9L742 600Z" fill="#205a7a" stroke="#205a7a"></path>
              <path d="M809 600L866 522.3L742 600Z" fill="#297ea6" stroke="#297ea6"></path>
              <path d="M900 600L900 521.3L866 522.3Z" fill="#0c2435" stroke="#0c2435"></path>
              <path d="M866 522.3L900 521.3L870 503.6Z" fill="#00101c" stroke="#00101c"></path>
              <path d="M870 503.6L900 521.3L900 350.6Z" fill="#15384f" stroke="#15384f"></path>
              <path d="M900 183.7L900 0L805 106.7Z" fill="#19435d" stroke="#19435d"></path>
              <path d="M835 0L900 0L0 -12.3Z" fill="#15384f" stroke="#15384f"></path>
              <path d="M809 600L900 600L866 522.3Z" fill="#19435d" stroke="#19435d"></path>
            </g>
          </svg>
        </div>
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
            <Button btnType="link" text="Scopri subito i nostri servizi" href={"#services"} />
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
