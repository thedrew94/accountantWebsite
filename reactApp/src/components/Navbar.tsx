export default function Navbar() {
  return (
    <nav className="main_nav">
      <a href="#" className="main_nav_logo">
        <img src="./assets/logo_tras_gold_small.png" alt="" width="50px" />
        <h6>STUDIO PDM</h6>
      </a>
      <ul className="main_nav_ul">
        <li>
          <button className="dropdown_menu" id="menu_btn">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
