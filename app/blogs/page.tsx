import Link from "next/link";

type PropList = {
  image: string;
  date: string;
  readTime: string;
  title: string;
  heading: string;
  disc: string;
};

export default function BlogList({
  image,
  date,
  readTime,
  title,
  heading,
  disc,
}: PropList) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Read time */}
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 shadow">
          {readTime}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        
        {/* Date */}
        <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
          <span>{date}</span>
        </div>

        {/* Title */}
        <h1 className="mb-2 text-2xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-orange-500">
          {title}
        </h1>

        {/* Heading */}
        <h3 className="mb-3 text-base font-semibold text-orange-500">
          {heading}
        </h3>

        {/* Description */}
        <p className="line-clamp-3 text-sm leading-6 text-gray-600">
          {disc}
        </p>

        {/* Read More */}
        <Link className="mt-5 font-semibold text-orange-500 transition-colors hover:text-orange-600" href={"m   "}>
          Read More →
        </Link>
      </div>
    </article>
  );
}