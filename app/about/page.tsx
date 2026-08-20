type StatProps = {
  number: string;
  title: string;
};

function StatCard({ number, title }: StatProps) {
  return (
    <div className="flex h-14 w-full flex-col items-center justify-center rounded-lg border border-orange-100 bg-white">
      <h3 className="text-lg font-bold text-orange-500">
        {number}
      </h3>

      <p className="text-[18px] text-gray-400">
        {title}
      </p>
    </div>
  );
}

type TeamProps = {
  emoji: string;
  name: string;
  role: string;
};

function TeamCard({ emoji, name, role }: TeamProps) {
  return (
    <div className="flex h-20 flex-col items-center justify-center rounded-lg border border-orange-100 bg-white">
      <div className="mb-1 flex h-7 w-7 items-center justify-center rounded-full bg-orange-100 text-sm">
        {emoji}
      </div>

      <h3 className="text-[19px] font-bold text-gray-800">
        {name}
      </h3>

      <p className="text-[17px] text-gray-400">
        {role}
      </p>
    </div>
  );
}

export default function AboutContent() {
  return (
    <main className=" bg-orange-50 px-1 py-8">
      <div className="mx-[500px] min-h-[500px] max-w-4xl">

        {/* Heading */}
        <div className="mb-1">
          <h1 className="text-4xl font-bold text-gray-900">
            About Us 👨‍🍳
          </h1>

          <p className="mt-1 text-[19px] text-gray-400">
            The story behind FoodZone
          </p>
        </div>

        {/* Story + Stats */}
        <div className="grid grid-cols-2 gap-8">

          {/* Story */}
          <div>
            <h2 className="mb-3 text-2xl font-bold text-gray-800">
              Our Story
            </h2>

            <p className="mb-3 text-[15px] leading-4 text-gray-500">
              FoodZone started in 2020 with one simple goal —
              bring the best food to your doorstep. We believe
              everyone deserves delicious, fresh, and affordable
              meals.
            </p>

            <p className="text-[15px] leading-4 text-gray-500">
              From a small kitchen in Chennai, we now serve
              thousands of happy customers every day.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-2">
            <StatCard
              number="50+"
              title="Menu Items"
            />

            <StatCard
              number="10K+"
              title="Happy Customers"
            />

            <StatCard
              number="4.9★"
              title="Average Rating"
            />

            <StatCard
              number="30 min"
              title="Avg Delivery"
            />
          </div>
        </div>

        {/* Team */}
        <div className="mt-7">
          <h2 className="mb-4 text-lg font-bold text-gray-800">
            Meet the Team
          </h2>

          <div className="grid grid-cols-3 gap-2">
            <TeamCard
              emoji="👩‍🍳"
              name="Manisha"
              role="Founder & Chef"
            />

            <TeamCard
              emoji="🛵"
              name="Rahul"
              role="Head of Delivery"
            />

            <TeamCard
              emoji="👩‍💼"
              name="Priya"
              role="Menu Designer"
            />
          </div>
        </div>

      </div>
    </main>
  );
}