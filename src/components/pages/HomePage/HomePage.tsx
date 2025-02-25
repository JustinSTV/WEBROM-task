import { useState } from "react";
import "./HomePage.css";
import Header from "../../UI/organism/Header/Header";
import ProductBox from "../../UI/molecule/ProductBox";
import data from "../../../../data.json";

const HomePage = () => {
  const [trees, setTrees] = useState(data.trees);

  const handleAddToCart = (id: string) => {
    setTrees(trees.map((tree) => (tree.id === id ? { ...tree, inCart: true } : tree)));
  };
  return (
    <section>
      <Header />
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
