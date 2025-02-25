import { createContext, useContext, useState, useEffect } from "react";
import data from "../../data.json";
import { Product, ProductContextType } from "./../Types/ProductTypes.ts";

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : data.trees;
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  //pridėti preke į krepšelį
  const addToCart = (id: string) => {
    setProducts(
      products.map((product) => (product.id === id ? { ...product, inCart: true } : product))
    );
  };

  //pašalinti preke iš krepšelio
  const removeFromCart = (id: string) => {
    setProducts(
      products.map((product) => (product.id === id ? { ...product, inCart: false } : product))
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error("useProducts must be used within ProductProvider");
  return context;
};
