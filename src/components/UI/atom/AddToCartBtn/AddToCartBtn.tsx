import { FaCheckCircle } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import "./AddToCartBtn.css";

type ButtonProps = {
  text: string;
  isInCart: boolean;
  onClick: () => void;
  className?: string;
};

const AddToCartBtn = ({ text, isInCart, onClick, className = "btn-2" }: ButtonProps) => {
  return (
    <button
      // jeigu prekė krepšelyje - pridedam in-cart klase šalia btn-2 klases
      className={`${className} ${isInCart ? "in-cart" : ""}`}
      onClick={onClick}
      //išjungiam mygtuka kai prekė krepšelyje
      disabled={isInCart}
    >
      {/* rodome skirtingas ikonas jeigu preke krepšelyje */}
      {isInCart ? <FaCheckCircle /> : <SlHandbag />}
      {isInCart ? "Prekė krepšelyje" : text}
    </button>
  );
};

export default AddToCartBtn;
