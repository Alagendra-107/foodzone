
import CartContent from "@/app/cart/page";
import Button from "@/components/Button";

const menuItems = [
    {
        img: "https://imgs.search.brave.com/4fayQ2tW-Pk2s1_-xjSWh6HUPfuN7uAuBLSfn3KDewc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzY1MjkxMTU4L3Iv/aWwvNGEyYTJkLzgx/OTg3MTY0ODcvaWxf/MzAweDMwMC44MTk4/NzE2NDg3Xzd5NWQu/anBn",
        name: "Margherita Pizza",
        para: "Classic tomato, mozzarella, basil",
        price: "299",
        badge: "Bestseller",
    },
    {
        img: "/burger.png",
        name: "Cheese Burger",
        para: "Double patty, cheddar, lettuce",
        price: "199",
        badge: "Popular",
    },
    {
        img: "/taco.png",
        name: "Chicken Taco",
        para: "Grilled chicken, salsa, guacamole",
        price: "149",
    },
    {
        img: "/noodles.png",
        name: "Noodles Bowl",
        para: "Spicy noodles with veggies",
        price: "179",
    },
    {
        img: "/chicken.png",
        name: "Crispy Chicken",
        para: "Fried chicken with dipping sauce",
        price: "249",
        badge: "New",
    },
    {
        img: "/salad.png",
        name: "Garden Salad",
        para: "Fresh greens, cherry tomatoes",
        price: "129",
    },
];

export default function MenuContainer() {
    return (
        <section className="min-[400px] bg-orange-50 px-4 py-8">

            {/* Heading */}
            <div className="mx-auto mb-5 max-w-4xl">
                <h1 className="text-4xl font-bold text-gray-900">
                    Our Menu 🍴
                </h1>

                <p className="mt-1 text-[19px] text-gray-400">
                    Fresh food made with love every day
                </p>
            </div>

            {/* Menu Grid */}
            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3">
                {menuItems.map((item) => (
                    <div
                        key={item.name}
                        className="flex  items-center justify-between rounded-xl border border-orange-100 bg-white px-4 py-3 shadow-sm"
                    >

                        <CartContent
                            img={item.img}
                            name={item.name}
                            para={item.para}
                            price={item.price}
                        //   badge={item.badge}
                        />

                        <Button
                            Btnname="Add +"
                            className="ml-3 rounded-md bg-orange-500 px-3 py-1.5 text-[15px] font-bold text-white hover:bg-orange-600"
                        />
                    </div>
                ))}
            </div>

        </section>
    );
}