import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductProvider } from "./context/ProductContext.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ProductProvider>
      <App />
    </ProductProvider>
  </BrowserRouter>
);
