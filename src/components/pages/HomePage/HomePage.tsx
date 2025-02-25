import { useState } from "react";
import "./HomePage.css";
import Header from "../../UI/organism/Header/Header";
import ProductBox from "../../UI/organism/ProductBox/ProductBox";
import data from "../../../../data.json";
import Hero from "../../UI/organism/Hero/Hero";

const HomePage = () => {
  //sukuriamas duomenų state
  const [trees, setTrees] = useState(data.trees);
  //filtruojamos prekes kurios yra krepšelyje
  const cartItems = trees.filter((tree) => tree.inCart);

  //pridėti preke į krepšelį
  const handleAddToCart = (id: string) => {
    setTrees(trees.map((tree) => (tree.id === id ? { ...tree, inCart: true } : tree)));
  };

  //pašalinti preke iš krepšelio
  const handleRemoveFromCart = (id: string) => {
    setTrees(trees.map((tree) => (tree.id === id ? { ...tree, inCart: false } : tree)));
  };

  return (
    <section>
      <Header
        cartCount={cartItems.length}
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
      />
      <Hero />
      <section className="products-grid">
        {/* loop'inam per visus medžius ir sukuriam ProductBox */}
        {trees.map((tree) => (
          <ProductBox
            key={tree.id}
            image={tree.image}
            title={tree.name}
            description={tree.description}
            price={`${tree.price}€`}
            salePrice={tree.salePrice}
            inCart={tree.inCart}
            onSale={tree.onSale}
            onAddToCart={() => handleAddToCart(tree.id)}
          />
        ))}
      </section>
    </section>
  );
};

export default HomePage;
