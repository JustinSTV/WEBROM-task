import "./Header.css";

import { TfiWorld } from "react-icons/tfi";
import { CiUser } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";

const Header = () => {
  return (
    <header>
      <div className="logo-nav">
        <img src="/public/logo-8 2.svg" alt="logo" />
        <nav>
          <ul>
            <li className="btn-1">Produktų kategorijos</li>
            <li className="btn-1">Kolekcijos</li>
            <li className="btn-1">Priežiūra</li>
            <li className="btn-1">Kontaktai</li>
          </ul>
        </nav>
      </div>
      <div className="icons">
        <TfiWorld />
        <CiUser />
        <SlHandbag />
      </div>
    </header>
  );
};

export default Header;
