import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    // Create an Intersection Observer
    const servicesLi = document.querySelectorAll(".services_li");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the class when the element is in view
            entry.target.classList.add("appear_in");
          } else {
            // Remove the class when the element is out of view
            entry.target.classList.remove("appear_in");
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px", // Margin around the viewport
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    // Observe each .brief_card element
    servicesLi.forEach((card) => {
      observer.observe(card);
    });
  }, []);

  return (
    <>
      <div className="main_title" id="services">
        <h2>I NOSTRI SERVIZI</h2>
        <h3>Una galassia di servizi costruita a 360° per te</h3>
      </div>
      <ul className="services_ul">
        <li className="services_li">
          <span className="services_li_numb">1</span>
          <div className="services_li_body">
            <h2>Area Contabilità e Bilancio</h2>
            <p>
              L’Area Contabilità e Bilancio gestisce tutte le elaborazioni contabili no alla redazione del bilancio
              d’esercizio e consolidato, in conformità ai principi contabili nazionali OIC. Ore servizi di bilanci e
              situazioni infrannuali, calcolo del rating, gestione quotidiana dei rapporti con il cliente per la
              raccolta di documenti e informazioni.
            </p>
          </div>
        </li>
        <li className="services_li">
          <span className="services_li_numb">2</span>
          <div className="services_li_body">
            <h2>Area Fiscale</h2>
            <p>
              In sinergia con l’Area Contabilità e Bilancio, di cui rappresenta un’estensione, si occupa della gestione
              IVA, della redazione dei dichiarativi e del calcolo delle imposte. Gestisce rapporti telematici e allo
              sportello con l’Agenzia delle Entrate, cura il contenzioso tributario e ore consulenza per la pianicazione
              scale.
            </p>
          </div>
        </li>
        <li className="services_li">
          <span className="services_li_numb">3</span>
          <div className="services_li_body">
            <h2>Area Lavoro</h2>
            <p>
              Si dedica all’elaborazione di paghe e contributi, supporta i professionisti nell’analisi del costo del
              personale e nella denizione del budget. Specializzata in contrattualistica del lavoro e assunzioni,
              identica le migliori agevolazioni oerte dagli enti. Grazie alla collaborazione con avvocati giuslavoristi
              e sindacalisti, gestisce contenziosi amministrativi, vertenze, conciliazioni, contratti collettivi
              aziendali, piani di welfare e accordi di detassazione.
            </p>
          </div>
        </li>
        <li className="services_li" id="job_safety">
          <span className="services_li_numb">4</span>
          <div className="services_li_body">
            <h2>Area Sicurezza sui Luoghi di Lavoro</h2>
            <p>
              Ore servizi completi in materia di sicurezza sul lavoro, garantendo il rispetto del Decreto Legislativo
              81/08. Supportiamo le aziende nella valutazione dei rischi, assumendo direttamente il ruolo di
              Responsabili del Servizio di Prevenzione e Protezione (RSPP). Il nostro intervento è tempestivo:
              assicuriamo assistenza e un’interfaccia diretta con gli enti di controllo e le direzioni del lavoro,
              promuovendo la salute e il benessere dei lavoratori.
            </p>
          </div>
        </li>
        <li className="services_li">
          <span className="services_li_numb">5</span>
          <div className="services_li_body">
            <h2>Area Formazione</h2>
            <p>
              Progetta e realizza percorsi formativi su misura per dipendenti e professionisti, con focus su competenze
              tecniche, sicurezza sul lavoro e sviluppo personale. Oriamo corsi obbligatori (es. D.Lgs. 81/08),
              formazione nanziata e programmi personalizzati per migliorare le performance aziendali. Grazie a un team
              di esperti, garantiamo soluzioni ecaci, certicazioni riconosciute e un supporto continuo per
              l’aggiornamento professionale.
            </p>
          </div>
        </li>
      </ul>
    </>
  );
}
