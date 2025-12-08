import type { Dispatch, SetStateAction } from "react";
import Button from "./Button";

interface Props {
  sidemenuOpen: boolean;
  setSidemenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Sidemenu({ sidemenuOpen = false, setSidemenuOpen = () => {} }: Props) {
  return (
    <div className={`sidemenu ${sidemenuOpen ? "visible" : ""}`}>
      <div className={`sidemenu_inner ${sidemenuOpen ? "visible" : ""}`}>
        <ul>
          <li>
            <a href="#" className="menu_link_btn">
              Home
            </a>
          </li>
          <li>
            <a href="#introduction" className="menu_link_btn">
              Chi siamo
            </a>
          </li>
          <li>
            <a href="#services" className="menu_link_btn">
              I nostri servizi
            </a>
          </li>
          <li>
            <a href="#consultation" className="menu_link_btn">
              Consultazione
            </a>
          </li>
          <li>
            <a href="#our_mission" className="menu_link_btn">
              La nostra missione
            </a>
          </li>
          <li>
            <a href="#footer" className="menu_link_btn">
              Contatti
            </a>
          </li>
          <li>
            <button
              onClick={() => {
                setSidemenuOpen(false);
              }}
            >
              Chiudi
            </button>
          </li>
        </ul>
        <div className="sidemenu_bottom">
          <div className="sidemenu_contact_links">
            <Button
              btnType="link"
              text="Contattaci su Whatsapp"
              icon={"whatsapp"}
              href="https://wa.me/+393477130964?text=Ciao%2C%20vorrei%20maggiori%20informazioni%20per%20i%20vostri%20servizi%20di%20consulenza"
            />
            <Button
              btnType="link"
              text="Contattaci via E-mail"
              icon={"email"}
              href="https://wa.me/+393477130964?text=Ciao%2C%20vorrei%20maggiori%20informazioni%20per%20i%20vostri%20servizi%20di%20consulenza"
            />
            <Button
              btnType="link"
              text="Scarica la Brochure"
              icon={"pdf"}
              href="https://wa.me/+393477130964?text=Ciao%2C%20vorrei%20maggiori%20informazioni%20per%20i%20vostri%20servizi%20di%20consulenza"
            />
          </div>
        </div>
        {/* <img className="sidemenu_logo" src="../logoBlue.png" alt="" draggable="false" /> */}
      </div>
    </div>
  );
}
