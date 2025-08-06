import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";

const ProductCard = () => {
  return (
    <div className="grid grid-cols-[25rem_25rem] max-sm:grid-cols-[25rem] product-card">
      <ProductImage />

      <ProductDetails />
    </div>
  );
};

export default ProductCard;
