import { useState } from "react";
import "./HomePage.css";
import Header from "../../UI/organism/Header/Header";
import ProductBox from "../../UI/organism/ProductBox/ProductBox";
import data from "../../../../data.json";

const HomePage = () => {
  const [trees, setTrees] = useState(data.trees);
  const cartCount = trees.filter((tree) => tree.inCart).length;

  const handleAddToCart = (id: string) => {
    setTrees(trees.map((tree) => (tree.id === id ? { ...tree, inCart: true } : tree)));
  };
  return (
    <section>
      <Header cartCount={cartCount} />
      <div className="products-grid">
        {trees.map((tree) => (
          <ProductBox
            key={tree.id}
            image={tree.image}
            title={tree.name}
            description={tree.description}
            price={`€${tree.price}`}
            inCart={tree.inCart}
            onAddToCart={() => handleAddToCart(tree.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
