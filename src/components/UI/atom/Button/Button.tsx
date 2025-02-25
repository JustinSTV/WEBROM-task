import { BsCheckLg } from "react-icons/bs";
import { SlHandbag } from "react-icons/sl";
import "./Button.css";

type ButtonProps = {
  text: string;
  isInCart: boolean;
  onClick: () => void;
  className?: string;
};

const Button = ({ text, isInCart, onClick, className = "btn-2" }: ButtonProps) => {
  return (
    <button
      className={`${className} ${isInCart ? "in-cart" : ""}`}
      onClick={onClick}
      disabled={isInCart}
    >
      {isInCart ? <BsCheckLg /> : <SlHandbag />}
      {isInCart ? "Prekė krepšelyje" : text}
    </button>
  );
};

export default Button;
