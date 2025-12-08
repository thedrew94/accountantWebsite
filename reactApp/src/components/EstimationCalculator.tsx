import { useEffect, useRef, useState, type ChangeEvent } from "react";
import Button from "./Button";

export default function EstimationCalculator() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [topOffset, setTopOffset] = useState(0);
  const [formData, setFormData] = useState([
    { expanded: false, valid: false, value: "" },
    { expanded: false, valid: false, value: "" },
    { expanded: false, valid: false, value: "" },
    { expanded: false, valid: false, value: "" },
    { expanded: false, valid: false, value: "" },
    { expanded: false, valid: false, value: "" },
    { expanded: false, valid: false, value: "" },
  ]);
  const consultationRef = useRef<HTMLElement>(null);

  function handleInputChange({
    event = null,
    inputIdx = 0,
  }: {
    event: ChangeEvent<HTMLInputElement> | null;
    inputIdx: number;
  }) {
    if (!event) return;
    setFormData((prevState) => {
      const prevData = [...prevState];
      prevData[inputIdx].expanded = true;
      prevData[inputIdx].value = event.target.value;

      return prevData;
    });
  }

  function handleToggleFullscreen() {
    if (!isFullscreen) {
      if (consultationRef.current) {
        document.querySelector(".main_nav")?.classList.remove("main_nav_blue");
        const rect = consultationRef.current.getBoundingClientRect();

        setTopOffset(rect.top);
      }
      setIsFullscreen(true);
    } else {
      document.querySelector(".main_nav")?.classList.add("main_nav_blue");
      setIsFullscreen(false);
    }
  }

  useEffect(() => {
    if (!isFullscreen) {
      setTopOffset(0);
    }
  }, [isFullscreen]);

  return (
    <aside ref={consultationRef} className="consultation" id="consultation">
      <div
        className={`consultation_inner ${isFullscreen ? "fullscreen" : ""}`}
        style={
          {
            "--top-offset": isFullscreen ? `${topOffset}px` : "0px",
          } as React.CSSProperties
        }
      >
        {!isFullscreen && (
          <div className="calculator_start_btn">
            <Button
              btnType="button"
              text="Richiedi preventivo Gratuito"
              cbFunc={() => {
                handleToggleFullscreen();
              }}
            />
          </div>
        )}

        {isFullscreen && (
          <form className="preventivo_form">
            <div className="preventivo_form_inputs">
              <fieldset className="fieldset_type1">
                <label htmlFor="full-name" className={`${formData[0].expanded && "move_up"}`}>
                  Nome e Cognome<span className="fieldset_mandatory">*</span>
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full_name"
                  placeholder=""
                  autoComplete="name"
                  value={formData[0].value}
                  onChange={(e) => {
                    handleInputChange({ event: e, inputIdx: 0 });
                  }}
                />
              </fieldset>
              <fieldset className="fieldset_type1">
                <label htmlFor="company-name" className={`${formData[1].expanded && "move_up"}`}>
                  Ragione Sociale
                </label>
                <input
                  type="text"
                  id="company-name"
                  name="company_name"
                  placeholder=""
                  autoComplete="organization"
                  value={formData[1].value}
                  onChange={(e) => {
                    handleInputChange({ event: e, inputIdx: 1 });
                  }}
                />
              </fieldset>
              <fieldset className="fieldset_type1">
                <label htmlFor="tax-regime" className={`${formData[2].expanded && "move_up"}`}>
                  Tipologio Regime
                </label>
                <input
                  type="text"
                  id="tax-regime"
                  name="tax_regime"
                  placeholder=""
                  autoComplete="off"
                  value={formData[2].value}
                  onChange={(e) => {
                    handleInputChange({ event: e, inputIdx: 2 });
                  }}
                />
              </fieldset>
              <fieldset className="fieldset_type1">
                <label htmlFor="employees" className={`${formData[3].expanded && "move_up"}`}>
                  Numero dipendenti
                </label>
                <input
                  type="text"
                  id="employees"
                  name="employees"
                  placeholder=""
                  autoComplete="off"
                  value={formData[3].value}
                  onChange={(e) => {
                    handleInputChange({ event: e, inputIdx: 3 });
                  }}
                />
              </fieldset>
              <fieldset className="fieldset_type1">
                <label htmlFor="phone" className={`${formData[4].expanded && "move_up"}`}>
                  Telefono<span className="fieldset_mandatory">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder=""
                  autoComplete="tel"
                  value={formData[4].value}
                  onChange={(e) => {
                    handleInputChange({ event: e, inputIdx: 4 });
                  }}
                />
              </fieldset>
              <fieldset className="fieldset_type1">
                <label htmlFor="email" className={`${formData[5].expanded && "move_up"}`}>
                  Email<span className="fieldset_mandatory">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=""
                  autoComplete="email"
                  value={formData[5].value}
                  onChange={(e) => {
                    handleInputChange({ event: e, inputIdx: 5 });
                  }}
                />
              </fieldset>
              <fieldset className="fieldset_type1">
                <label htmlFor="message" className={`${formData[6].expanded && "move_up"}`}>
                  Messaggio<span className="fieldset_mandatory">*</span>
                </label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  placeholder=""
                  autoComplete="off"
                  value={formData[6].value}
                  onChange={(e) => {
                    handleInputChange({ event: e, inputIdx: 6 });
                  }}
                />
              </fieldset>
              <fieldset>
                <span>CHECKBOX</span>
              </fieldset>
            </div>
            <div className="preventivo_form_actions">
              <Button
                btnType="button"
                text="TORNA INDIETRO"
                cbFunc={() => {
                  handleToggleFullscreen();
                }}
              />

              <Button
                btnType="button"
                text="INVIA RICHIESTA"
                btnStyle="inverted"
                cbFunc={() => {
                  handleToggleFullscreen();
                }}
              />
            </div>
          </form>
        )}
      </div>
    </aside>
  );
}

// <div className="consultation_steps">
//   <button className="cnslt_step_btn" data-numb="1">
//     1
//   </button>

//   <button className="cnslt_step_btn" data-numb="2">
//     2
//   </button>

//   <button className="cnslt_step_btn" data-numb="3">
//     3
//   </button>
// </div>

// <div className="first_step step_visible">
//   <h2>Calcola il tuo preventivo personalizzato in pochi step</h2>
//   <button className="consultation_btn_start" id="step1" onClick={() => setIsFullscreen((prev) => !prev)}>
//     CALCOLA PREVENTIVO
//   </button>
// </div>

// <div className="second_step">
//   <div className="second_step_inner">
//     <div className="select-container">
//       <label htmlFor="regime-select">Selezione tipologia regime</label>
//       <select name="regime" id="regime-select">
//         <option value="" disabled>
//           Seleziona un'opzione
//         </option>
//         <option value="ordinario" selected>
//           Regime Ordinario
//         </option>
//         <option value="semplificato">Regime Semplificato</option>
//         <option value="forfettario">Regime Forfettario</option>
//       </select>
//     </div>
//     <div className="select-container">
//       <label htmlFor="regime-number">Numero dipendendi</label>
//       <input
//         type="number"
//         name="regime-number"
//         id="regime-number"
//         placeholder="10"
//         inputMode="numeric"
//         pattern="[0-9]*"
//         className="input_number"
//         min="0"
//         step="10"
//       />
//     </div>
//   </div>
//   <button className="consultation_btn_start" id="step2">
//     AVANTI
//   </button>
// </div>

// <div className="third_step">
//   <div className="fieldset_number">
//     <label htmlFor="regime-select">Numero fatture</label>
//     <input type="text" name="" id="" placeholder="10" className="input_number" />
//   </div>
//   <div className="fieldset_number">
//     <label htmlFor="regime-select">Fatturato</label>
//     <input type="text" name="" id="" placeholder="10000" className="input_number" />
//   </div>
//   <button className="consultation_btn_start" id="step3">
//     CALCOLA
//   </button>
// </div>

// <div className="fourth_step">
//   <h2>Costo annuo: 400.00$</h2>
//   <h2>Costo mensile: 29$</h2>
//   <a
//     href="https://wa.me/+393477130964?text=Ciao%2C%20vorrei%20maggiori%20informazioni%20per%20i%20vostri%20servizi%20di%20consulenza"
//     className="contact_wa_btn"
//   >
//     <svg viewBox="0 0 24 24" width="18px" height="18px">
//       <path
//         d="M20.463,3.488C18.217,1.24,15.231,0.001,12.05,0    C5.495,0,0.16,5.334,0.157,11.892c-0.001,2.096,0.547,4.142,1.588,5.946L0.057,24l6.304-1.654    c1.737,0.948,3.693,1.447,5.683,1.448h0.005c6.554,0,11.89-5.335,11.893-11.893C23.944,8.724,22.708,5.735,20.463,3.488z     M12.05,21.785h-0.004c-1.774,0-3.513-0.477-5.031-1.378l-0.361-0.214l-3.741,0.981l0.999-3.648l-0.235-0.374    c-0.99-1.574-1.512-3.393-1.511-5.26c0.002-5.45,4.437-9.884,9.889-9.884c2.64,0,5.122,1.03,6.988,2.898    c1.866,1.869,2.893,4.352,2.892,6.993C21.932,17.351,17.498,21.785,12.05,21.785z M17.472,14.382    c-0.297-0.149-1.758-0.868-2.031-0.967c-0.272-0.099-0.47-0.149-0.669,0.148s-0.767,0.967-0.941,1.166    c-0.173,0.198-0.347,0.223-0.644,0.074c-0.297-0.149-1.255-0.462-2.39-1.475c-0.883-0.788-1.48-1.761-1.653-2.059    s-0.018-0.458,0.13-0.606c0.134-0.133,0.297-0.347,0.446-0.521C9.87,9.97,9.919,9.846,10.019,9.647    c0.099-0.198,0.05-0.372-0.025-0.521C9.919,8.978,9.325,7.515,9.078,6.92c-0.241-0.58-0.486-0.501-0.669-0.51    C8.236,6.401,8.038,6.4,7.839,6.4c-0.198,0-0.52,0.074-0.792,0.372c-0.272,0.298-1.04,1.017-1.04,2.479    c0,1.463,1.065,2.876,1.213,3.074c0.148,0.198,2.095,3.2,5.076,4.487c0.709,0.306,1.263,0.489,1.694,0.626    c0.712,0.226,1.36,0.194,1.872,0.118c0.571-0.085,1.758-0.719,2.006-1.413c0.248-0.694,0.248-1.29,0.173-1.413    C17.967,14.605,17.769,14.531,17.472,14.382z"
//         fill="#222633"
//       />
//     </svg>
//     <p>Contattaci su Whatsapp</p>
//   </a>
// </div>
