import { HiHeart } from "react-icons/hi";
import "./ProductBox.css";
import Button from "../../atom/Button/Button";
import SaleBanner from "../../atom/SaleBanner/SaleBanner";

type ProductBoxProps = {
  image: string;
  title: string;
  description: string;
  price: string;
  inCart: boolean;
  onSale?: boolean;
  onAddToCart: () => void;
};

const ProductBox = ({
  image,
  title,
  description,
  price,
  inCart,
  onSale,
  onAddToCart,
}: ProductBoxProps) => {
  return (
    <div className="product-box">
      <SaleBanner show={!!onSale} />
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
        <Button text="Pridėti į krepšelį" isInCart={inCart} onClick={onAddToCart} />
      </div>
    </div>
  );
};

export default ProductBox;
