import "./HomePage.css";
import ProductBox from "../../UI/organism/ProductBox/ProductBox";
import Hero from "../../UI/organism/Hero/Hero";
import { useProducts } from "../../../context/ProductContext";

const HomePage = () => {
  const { products, addToCart } = useProducts();
  return (
    <section>
      <Hero />
      <section className="products-grid">
        {/* loop'inam per visus medžius ir sukuriam ProductBox */}
        {products.map((product) => (
          <ProductBox
            key={product.id}
            image={`/${product.image}`}
            title={product.name}
            description={product.description}
            price={product.price}
            salePrice={product.salePrice}
            inCart={product.inCart}
            onSale={product.onSale}
            onAddToCart={() => addToCart(product.id)}
          />
        ))}
      </section>
    </section>
  );
};

export default HomePage;
