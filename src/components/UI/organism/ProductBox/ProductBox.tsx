import { HiHeart } from "react-icons/hi";
import "./ProductBox.css";
import { SlHandbag } from "react-icons/sl";
import Button from "../../atom/Button/Button";

type ProductBoxProps = {
  image: string;
  title: string;
  description: string;
  price: string;
  inCart: boolean;
  onAddToCart: () => void;
};

const ProductBox = ({ image, title, description, price, inCart, onAddToCart }: ProductBoxProps) => {
  return (
    <div className="product-box">
      <div className="content">
        <div className="imageBox">
          <img src={image} alt={title} />
        </div>
        <div className="infoBox">
          <div className="titleAndHeart">
            <h3>{title}</h3>
            <HiHeart />
          </div>
          <div className="disc">
            <p className="body-1">{description}</p>
            <p className="body-2">{price}</p>
          </div>
        </div>
        <Button text="Pridėti į krepšelį" isInCart={inCart} />
      </div>
    </div>
  );
};

export default ProductBox;
