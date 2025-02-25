import "./Header.css";

import { useState } from "react";

import { TfiWorld } from "react-icons/tfi";
import { CiUser } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
import CartDropdown from "../../molecule/CartDropdown/CartDropdown";

type HeaderProps = {
  cartCount: number;
  cartItems: Array<{
    id: string;
    name: string;
    price: string;
    image: string;
  }>;
  onRemoveFromCart: (id: string) => void;
};

const Header = ({ cartCount, cartItems, onRemoveFromCart }: HeaderProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

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
        <div className="cart-icon">
          <SlHandbag onClick={() => setIsCartOpen(!isCartOpen)} />
          {cartCount > 0 && <span className="caption-1 cart-count">{cartCount}</span>}
          <CartDropdown isOpen={isCartOpen} items={cartItems} onRemoveItem={onRemoveFromCart} />
        </div>
      </div>
    </header>
  );
};

export default Header;
