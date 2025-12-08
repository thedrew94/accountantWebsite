// import { useEffect, useRef } from "react";
import Button from "./Button";

export default function PageLoader() {
  // const loaderRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const loader = loaderRef.current;
  //   if (!loader) return;

  //   function handleAnimationEnd(event: AnimationEvent) {
  //     if (event.animationName === "hide") {
  //       console.log("Loader hide animation finished!");
  //     }
  //   }
  //   loader.addEventListener("animationend", handleAnimationEnd);
  //   return () => {
  //     loader.removeEventListener("animationend", handleAnimationEnd);
  //   };
  // }, []);

  return (
    <div className="page_loader">
      <div className="page_loader_component">
        <div className="page_loader_component_outter"></div>
        <div className="moving_load_square"></div>
        <div className="square_cluster">
          <div className="load_square" data-index="1"></div>
          <div className="load_square" data-index="2"></div>
          <div className="load_square" data-index="3"></div>
          <div className="load_square" data-index="4"></div>
        </div>
      </div>
      <div className="loder_contact">
        <h2>
          STUDIO PDM <br />
          PASQUALE DE MARTINO
        </h2>
        <h3>Al vostro fianco per un assistenza fiscale tributaria e del lavoro completa ed integrata</h3>
        <div className="loader_contact_links">
          <Button
            btnType="link"
            text="Whatsapp"
            icon={"whatsapp"}
            href="https://wa.me/+393477130964?text=Ciao%2C%20vorrei%20maggiori%20informazioni%20per%20i%20vostri%20servizi%20di%20consulenza"
          />
          <Button
            btnType="link"
            text="E-mail"
            icon={"email"}
            href="https://wa.me/+393477130964?text=Ciao%2C%20vorrei%20maggiori%20informazioni%20per%20i%20vostri%20servizi%20di%20consulenza"
          />
        </div>
      </div>
    </div>
  );
}
