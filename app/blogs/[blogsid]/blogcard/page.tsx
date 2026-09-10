import pizzablogdetails from "@/lib/pizzablogdetails.json";
import BlogList from "../../page";

export default function BlogCard() {
  return (
    <main className="min-h-screen bg-orange-50 px-4 py-12 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-orange-500">
          FoodZone Blog
        </p>

        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Delicious Stories & Food Tips
        </h1>

        <p className="mt-3 text-gray-600">
          Discover tasty recipes, pizza combinations, cooking tips and more.
        </p>
      </div>

      {/* Blog Grid */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {pizzablogdetails.map((item) => (
          <BlogList
            key={item.id}
            image={item.image}
            date={item.date}
            readTime={item.readTime}
            title={item.title}
            // heading={item.heading}
            disc={item.content}
          />
        ))}
      </section>
    </main>
  );
}