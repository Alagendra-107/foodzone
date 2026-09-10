import productview from "@/lib/productview.json";
import ProductNotFoundPage from "./not-found";

export default async function ProductView({
  params,
}: {
  params: Promise<{ productviewid: string }>;
}) {
  const { productviewid } = await params;
  const product = productview.find((item) => item.id === Number(productviewid));

  if (!product) {
    return <ProductNotFoundPage />;
  }   

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-white shadow-lg md:flex">
        {/* Product Image */}
        <div className="flex w-full items-center justify-center bg-orange-50 p-8 md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="h-80 w-full object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div className="flex w-full flex-col justify-center p-8 md:w-1/2">
          <span className="mb-3 w-fit rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">
            {product.category}
          </span>

          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            {product.name}
          </h1>

          <p className="mt-4 text-base leading-7 text-gray-500">
            {product.description}
          </p>

          {/* Rating */}
          <div className="mt-5 flex items-center gap-2">
            <span className="text-lg">⭐</span>
            <span className="font-semibold text-gray-800">
              {product.rating}
            </span>
            <span className="text-sm text-gray-400">
              ({product.likes} likes)
            </span>
          </div>

          {/* Price */}
          <p className="mt-5 text-3xl font-bold text-orange-500">
            ₹{product.price}
          </p>

          {/* Button */}
          <button className="mt-7 w-full rounded-xl bg-orange-500 px-6 py-3 text-lg font-semibold text-white transition hover:bg-orange-600 md:w-fit">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
