import { useState } from "react";
import { Logo, MenuIcon, CloseIcon } from "../assets";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <a href="#" className="Logo" aria-label="insure">
        <img src={Logo} alt="insure" />
      </a>

      <div className="Menu">
        {isMenuOpen ? (
          <button
            aria-label="close menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <img src={CloseIcon} alt="" />
          </button>
        ) : (
          <button
            aria-label="menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <img src={MenuIcon} alt="" />
          </button>
        )}
      </div>

      <ul className={isMenuOpen ? "NavLinks open" : "NavLinks"}>
        <li className="NavLinks-Link">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            how we work
          </a>
        </li>
        <li className="NavLinks-Link">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            blog
          </a>
        </li>
        <li className="NavLinks-Link">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            account
          </a>
        </li>
        <li className="NavLinks-Link plans">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            view plans
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
