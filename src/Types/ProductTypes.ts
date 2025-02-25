export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  salePrice?: string;
  onSale?: boolean;
  inCart: boolean;
  image: string;
};

export type ProductContextType = {
  products: Product[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
};
