import "./Button.css";
import { SlHandbag } from "react-icons/sl";

type ButtonProps = {
  text: string;
  isInCart: boolean;
  className?: string;
};

const Button = ({ text, isInCart, className = "btn-2" }: ButtonProps) => {
  return (
    <button className={`${className} ${isInCart ? "in-cart" : ""}`}>
      <SlHandbag />
      {isInCart ? "Prekė krepšelyje" : text}
    </button>
  );
};

export default Button;
