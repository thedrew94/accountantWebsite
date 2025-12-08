import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

interface Props {
  setSidemenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ setSidemenuOpen = () => {} }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    // Run on mount + on every scroll
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`main_nav ${isScrolled && "main_nav_blue"}`}>
      <a href="#" className="main_nav_logo">
        {/* <img src="/logo_tras_gold_small.png" alt="" width="50px" /> */}
        <img src="./logoBlue.png" alt="" draggable="false" />
        {/* <h6>STUDIO PDM</h6> */}
      </a>
      <ul className="main_nav_ul">
        <li>
          <button
            className="dropdown_menu"
            onClick={() => {
              setSidemenuOpen(true);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
