import "./CartDropdown.css";
import { FaTrash } from "react-icons/fa";

type CartDropdownProps = {
  isOpen: boolean;
  items: Array<{
    id: string;
    name: string;
    price: string;
    salePrice?: string;
    onSale?: boolean;
    image: string;
  }>;
  onRemoveItem: (id: string) => void;
};

const CartDropdown = ({ isOpen, items, onRemoveItem }: CartDropdownProps) => {
  //jai krepšelis uždarytas, nieko nerodom
  if (!isOpen) return null;

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {/* mapinam per visus krepšelio elementus */}
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h6>{item.name}</h6>
              {/* jai preke išpardavime, rodome akcijos kaina */}
              <p className="body-1">
                €{item.onSale && item.salePrice ? item.salePrice : item.price}
              </p>
            </div>
            {/* prekes pašalinimo mygtukas*/}
            <FaTrash onClick={() => onRemoveItem(item.id)} className="remove-item" />
          </div>
        ))}
      </div>
      {/* jai yra prekių - rodome apmokėjimo mygtuka */}
      {items.length > 0 ? (
        <button className="checkout-btn">Apmokėti &gt;</button>
      ) : (
        <p className="body-1 empty-cart">Jūsų pirkinų krepšelis yra tuščias</p>
      )}
    </div>
  );
};

export default CartDropdown;
