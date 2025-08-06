const ProductImage = () => {
  return (
    <div className="flex justify-center overflow-hidden rounded-tl-3xl rounded-bl-3xl max-sm:rounded-b-none max-sm:rounded-tr-3xl">
      <img
        src="/images/image-product-desktop.jpg"
        alt="product image"
        className="inline-block max-sm:hidden"
      />

      <img
        src="/images/image-product-mobile.jpg"
        alt="product image"
        className="hidden max-sm:inline-block"
      />
    </div>
  );
};

export default ProductImage;
