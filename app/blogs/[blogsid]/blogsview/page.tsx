type PropsView = {
  image: string;
  title: string;
  heading: string;
  description: string;
  author: string;
  date: string;

  rating: number;
  reviews: number;
  cookingTime: string;
  calories: string;
  servings: number;
  difficulty: string;
  cuisine: string;
  dishType: string;

  ingredients: string[];
  equipment: string[];

  preparationTime: string;
  bakingTemperature: string;
  recipeSteps: string[];

  nutrition: {
    calories: string;
    protein: string;
    carbohydrates: string;
    fat: string;
    fiber: string;
  };

  aboutDish: string;
};
// import pizzablogdetails from "@/lib/pizzablogdetails.json"

export default function BlogView({
  image,
  title,
  heading,
  description,
  author,
  date,
  rating,
  reviews,
  cookingTime,
  calories,
  servings,
  difficulty,
  cuisine,
  dishType,
  ingredients,
  equipment,
  preparationTime,
  bakingTemperature,
  recipeSteps,
  nutrition,
  aboutDish,
}: PropsView) {
  return (
    <main className="min-h-screen bg-orange-50">

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <div className="overflow-hidden rounded-3xl bg-white shadow-lg">

          {/* Hero Image */}
          <div className="h-72 w-full overflow-hidden sm:h-96 lg:h-[500px]">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Hero Content */}
          <div className="p-6 sm:p-8 lg:p-10">

            {/* Category */}
            <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600">
              {dishType}
            </span>

            {/* Title */}
            <h1 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {title}
            </h1>

            {/* Heading */}
            <h2 className="mt-3 text-xl font-semibold text-orange-500 sm:text-2xl">
              {heading}
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-4xl text-base leading-7 text-gray-600 sm:text-lg">
              {description}
            </p>

            {/* Author / Date / Rating */}
            <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-gray-100 pt-6">

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                  {author.charAt(0)}
                </div>

                <div>
                  <p className="font-semibold text-gray-800">
                    {author}
                  </p>

                  <p className="text-sm text-gray-400">
                    {date}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 rounded-full bg-yellow-50 px-4 py-2">
                <span className="text-lg text-yellow-500">★</span>

                <span className="font-bold text-gray-800">
                  {rating}
                </span>

                <span className="text-sm text-gray-500">
                  ({reviews} reviews)
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* Quick Information */}
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

          <InfoCard
            title="Cooking Time"
            value={cookingTime}
          />

          <InfoCard
            title="Preparation"
            value={preparationTime}
          />

          <InfoCard
            title="Calories"
            value={calories}
          />

          <InfoCard
            title="Servings"
            value={String(servings)}
          />

          <InfoCard
            title="Difficulty"
            value={difficulty}
          />

          <InfoCard
            title="Cuisine"
            value={cuisine}
          />

        </div>
      </section>


      {/* Main Recipe Content */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Left Content */}
          <div className="space-y-8 lg:col-span-2">

            {/* About Dish */}
            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">

              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                About This Dish
              </h2>

              <p className="leading-7 text-gray-600">
                {aboutDish}
              </p>

            </div>


            {/* Ingredients */}
            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">

              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Ingredients
              </h2>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                {ingredients.map((ingredient, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl bg-orange-50 p-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                      {index + 1}
                    </span>

                    <span className="text-sm text-gray-700">
                      {ingredient}
                    </span>
                  </div>
                ))}

              </div>
            </div>


            {/* Equipment */}
            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">

              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Equipment
              </h2>

              <div className="flex flex-wrap gap-3">

                {equipment.map((item, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>


            {/* Recipe Steps */}
            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">

              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Recipe Steps
              </h2>

              <div className="space-y-5">

                {recipeSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex gap-4"
                  >

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                      {index + 1}
                    </div>

                    <div className="rounded-xl bg-gray-50 p-4">
                      <p className="text-sm leading-6 text-gray-700">
                        {step}
                      </p>
                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>


          {/* Right Sidebar */}
          <aside className="space-y-6">

            {/* Baking Information */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">

              <h2 className="mb-5 text-xl font-bold text-gray-900">
                Baking Information
              </h2>

              <div className="space-y-4">

                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="text-sm text-gray-500">
                    Temperature
                  </span>

                  <span className="font-semibold text-gray-800">
                    {bakingTemperature}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="text-sm text-gray-500">
                    Cooking Time
                  </span>

                  <span className="font-semibold text-gray-800">
                    {cookingTime}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Difficulty
                  </span>

                  <span className="font-semibold text-orange-600">
                    {difficulty}
                  </span>
                </div>

              </div>

            </div>


            {/* Nutrition */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">

              <h2 className="mb-5 text-xl font-bold text-gray-900">
                Nutrition
              </h2>

              <div className="space-y-3">

                <NutritionRow
                  label="Calories"
                  value={nutrition.calories}
                />

                <NutritionRow
                  label="Protein"
                  value={nutrition.protein}
                />

                <NutritionRow
                  label="Carbohydrates"
                  value={nutrition.carbohydrates}
                />

                <NutritionRow
                  label="Fat"
                  value={nutrition.fat}
                />

                <NutritionRow
                  label="Fiber"
                  value={nutrition.fiber}
                />

              </div>

            </div>


            {/* Dish Type */}
            <div className="rounded-2xl bg-orange-500 p-6 text-white shadow-sm">

              <p className="text-sm opacity-80">
                Dish Type
              </p>

              <p className="mt-1 text-xl font-bold">
                {dishType}
              </p>

              <p className="mt-4 text-sm opacity-80">
                Cuisine
              </p>

              <p className="mt-1 font-semibold">
                {cuisine}
              </p>

            </div>

          </aside>

        </div>

      </section>

    </main>
  );
}


/* Information Card */

function InfoCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-4 text-center shadow-sm">

      <p className="text-xs font-medium text-gray-400">
        {title}
      </p>

      <p className="mt-1 text-sm font-bold text-gray-800">
        {value}
      </p>

    </div>
  );
}


/* Nutrition Row */

function NutritionRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 pb-3">

      <span className="text-sm text-gray-500">
        {label}
      </span>

      <span className="font-semibold text-gray-800">
        {value}
      </span>

    </div>
  );
}