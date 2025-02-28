import { HiHeart } from "react-icons/hi";
import "./ProductBox.css";
import AddToCartBtn from "../../atom/AddToCartBtn/AddToCartBtn";
import SaleBanner from "../../atom/SaleBanner/SaleBanner";

type ProductBoxProps = {
  image: string;
  title: string;
  description: string;
  price: string;
  salePrice?: string;
  inCart: boolean;
  onSale?: boolean;
  onAddToCart: () => void;
};

const ProductBox = ({
  image,
  title,
  description,
  price,
  salePrice,
  inCart,
  onSale,
  onAddToCart,
}: ProductBoxProps) => {
  return (
    <div className="product-box">
      {/* akcijos banner, jeigu preke onSale=true */}
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
            {/* rodome kaina su akcija jai tokia yra */}
            <div className="price-container">
              {salePrice && <span className="body-2">{salePrice}€</span>}
              <span className={`body-2 ${onSale ? "linebreak body-3" : ""}`}>{price}</span>
            </div>
          </div>
        </div>
        <AddToCartBtn text="Pridėti į krepšelį" isInCart={inCart} onClick={onAddToCart} />
      </div>
    </div>
  );
};

export default ProductBox;
