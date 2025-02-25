import { Outlet } from "react-router-dom";
import Header from "../components/UI/organism/Header/Header";
import { useProducts } from "../context/ProductContext";

const Layout = () => {
  const { products, removeFromCart } = useProducts();
  const cartItems = products.filter((product) => product.inCart);

  return (
    <>
      <Header
        cartCount={cartItems.length}
        cartItems={cartItems}
        onRemoveFromCart={(id) => removeFromCart(id)}
      />
      <Outlet />
    </>
  );
};

export default Layout;
