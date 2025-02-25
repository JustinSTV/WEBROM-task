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
      className={`${className} ${isInCart ? "in-cart" : ""}`}
      onClick={onClick}
      disabled={isInCart}
    >
      {isInCart ? <FaCheckCircle /> : <SlHandbag />}
      {isInCart ? "Prekė krepšelyje" : text}
    </button>
  );
};

export default AddToCartBtn;
