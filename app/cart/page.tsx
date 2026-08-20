type CartProps = {
  name: string;
  para: string;
  img: string;
  price: string;
  badge?: string;
};

export default function CartContent({
  img,
  name,
  para,
  price,
  badge,
}: CartProps) {
  return (
    <div className="flex items-center gap-3">
      {/* Food Image */}
      <img
        src={img}
        alt={name}
        className="h-12 w-12 object-contain"
      />

      {/* Food Details */}
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <h2 className="text-[20px] font-bold text-gray-800">
            {name}
          </h2>

          {badge && (
            <span className="rounded-full bg-red-100 px-1.5 py-0.5 text-[17px] font-medium text-red-500">
              {badge}
            </span>
          )}
        </div>

        <p className="mt-0.5 text-[15px] text-gray-400">
          {para}
        </p>

        <p className="mt-1 text-[19px] font-bold text-orange-500">
          ₹{price}
        </p>
      </div>
    </div>
  );
}