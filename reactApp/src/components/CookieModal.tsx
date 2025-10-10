export default function CookieModal() {
  return (
    <div className="cookie_modal" id="cookie_modal">
      <svg viewBox="0 0 24 24" width="36" height="36">
        <circle cx="18.5" cy="1.5" r="1.5" />
        <circle cx="21.5" cy="6.5" r="1.5" />
        <path d="M24,12A12,12,0,1,1,12,0c.387,0,.769.021,1.146.057l.824.077.078.824a10,10,0,0,0,8.994,8.994l.824.078.077.824C23.979,11.231,24,11.613,24,12ZM8.5,7A1.5,1.5,0,1,0,10,8.5,1.5,1.5,0,0,0,8.5,7Zm0,7A1.5,1.5,0,1,0,10,15.5,1.5,1.5,0,0,0,8.5,14Zm7-1A1.5,1.5,0,1,0,17,14.5,1.5,1.5,0,0,0,15.5,13Z" />
      </svg>
      <p>
        Stai tranquillo, la tua privacy è al sicuro con noi! Questo sito non utilizza cookie di tracciamento né
        raccoglie o memorizza dati personali degli utenti. Naviga in totale serenità: non salviamo informazioni che
        possano identificarti, e il nostro impegno è garantirti un’esperienza online trasparente e rispettosa della tua
        privacy.
      </p>
      <button>Ho capito</button>
    </div>
  );
}
