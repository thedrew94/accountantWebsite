import type { Dispatch, SetStateAction } from "react";
import Button from "./Button";

interface Props {
  sidemenuOpen: boolean;
  setSidemenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Sidemenu({ sidemenuOpen = false, setSidemenuOpen = () => {} }: Props) {
  function handleLinkClick(selector: string) {
    setSidemenuOpen(false);
    const element = document.querySelector(selector);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={`sidemenu ${sidemenuOpen ? "visible" : ""}`}>
      <div className={`sidemenu_inner ${sidemenuOpen ? "visible" : ""}`}>
        <ul>
          <li>
            <button
              type="button"
              className="menu_link_btn"
              onClick={() => handleLinkClick("body")} // or "#top" if you have an element
            >
              Home
            </button>
          </li>
          <li>
            <button type="button" className="menu_link_btn" onClick={() => handleLinkClick("#introduction")}>
              Chi siamo
            </button>
          </li>
          <li>
            <button type="button" className="menu_link_btn" onClick={() => handleLinkClick("#services")}>
              I nostri servizi
            </button>
          </li>
          <li>
            <button type="button" className="menu_link_btn" onClick={() => handleLinkClick("#consultation")}>
              Consultazione
            </button>
          </li>
          <li>
            <button type="button" className="menu_link_btn" onClick={() => handleLinkClick("#our_mission")}>
              La nostra missione
            </button>
          </li>
          <li>
            <button type="button" className="menu_link_btn" onClick={() => handleLinkClick("#footer")}>
              Contatti
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setSidemenuOpen(false)}>
              Chiudi
            </button>
          </li>
        </ul>

        <div className="sidemenu_bottom">
          <div className="sidemenu_contact_links">
            <Button
              btnType="link"
              text="Contattaci su Whatsapp"
              icon="whatsapp"
              href="https://wa.me/+393477130964?text=Ciao%2C%20vorrei%20maggiori%20informazioni%20per%20i%20vostri%20servizi%20di%20consulenza"
            />
            <Button
              btnType="link"
              text="Contattaci via E-mail"
              icon="email"
              href="mailto:your-email@example.com" // Fixed: changed from WhatsApp to proper mailto (update with real email)
            />
            <Button btnType="download" text="Scarica la Brochure" icon="pdf" href="../brochure.pdf" />
          </div>
        </div>

        {/* <img className="sidemenu_logo" src="../logoBlue.png" alt="" draggable="false" /> */}
      </div>
    </div>
  );
}
