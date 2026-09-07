
type CartProps = {
  name: string;
  description: string;
  image: string;
  price: number;
};
import pizza from "@/lib/pizza.json";
export default function CartContent({
  name,
  description,
  image,
  price,
}: CartProps) {
  return (
    <div
      key={name}
      className="flex items-center gap-3"
    >
      <img
        src={image}
        alt={name}
        className="h-12 w-12 object-contain"
      />

      {/* Food Details */}
      <div className="min-w-0">
        <h2 className="text-[20px] font-bold text-gray-800">
          {name}
        </h2>

        <p className="mt-0.5 text-[15px] text-gray-400">
          {description}
        </p>

        <p className="mt-1 text-[19px] font-bold text-orange-500">
          ₹{price}
        </p>
      </div>
    </div>
  );
}