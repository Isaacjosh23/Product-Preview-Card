const ProductDetails = () => {
  return (
    <div className="flex flex-col gap-12 bg-[var(--color-white)] rounded-tr-3xl rounded-br-3xl max-sm:rounded-t-none max-sm:rounded-b-3xl details">
      <div className="flex flex-col gap-6">
        <span className="text-[1.2rem] max-sm:text-[1rem] font-mont uppercase text-[var(--color-grey)] font-medium product-category">
          perfume
        </span>

        <div className="flex flex-col gap-10">
          <h3 className="text-5xl max-sm:text-4xl font-extrabold capitalize">
            gabrielle essence eau de parfum
          </h3>

          <p className="text-[var(--color-grey)]  font-medium font-mont text-[1.2rem]">
            A floral, solar and voluptuous interpretation composed by Oliver
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <p className="text-[var(--color-green-500)] text-5xl max-sm:text-4xl font-extrabold">
            $149.99
          </p>

          <p className="line-through font-mont text-[var(--color-grey)] font-medium text-[1.2rem]">
            $169.99
          </p>
        </div>

        <button className="flex items-center justify-center gap-4 bg-[var(--color-green-500)] text-[]var(--color-white)] rounded-2xl cursor-pointer hover:bg-[var(--color-green-700)] btn">
          <img src="/images/icon-cart.svg" alt="cart icon" />

          <span className="text-[1.2rem] font-mont font-semibold text-white">
            Add to Cart
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
