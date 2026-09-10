import pizzablogdetails from "@/lib/pizzablogdetails.json";
import BlogView from "../page";

export default function Review() {
  return (
    <main className="min-h-screen bg-orange-50 px-4 py-12 sm:px-6 lg:px-8">

      {/* Heading */}
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-orange-500">
          FoodZone
        </p>

        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Pizza Stories
        </h1>

        <p className="mt-3 text-gray-600">
          Discover delicious pizza combinations and food stories.
        </p>
      </div>

      {/* Cards */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {pizzablogdetails[0].sections.map((item) => (
          <BlogView
            key={item.id}
            image={item.image}
            title={item.title}
            heading={item.heading}
            description={item.description}
            author={item.author}
            date={item.date}
            rating={item.rating}
            reviews={item.reviews}
            cookingTime={item.cookingTime}
            calories={item.calories}
            servings={item.servings}
            difficulty={item.difficulty}
            cuisine={item.cuisine}
            dishType={item.dishType}
            ingredients={item.ingredients}
            equipment={item.equipment}
            preparationTime={item.preparationTime}
            bakingTemperature={item.bakingTemperature}
            recipeSteps={item.recipeSteps}
            nutrition={item.nutrition}
            aboutDish={item.aboutDish}
          />
        ))}

      </section>
    </main>
  );
}