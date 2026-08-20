import Link from "next/link";
import Button from "../../components/Button";
import CartContent from "../cart/page";

export default function FoodzoneHome() {
  return (
    <section className="bg-orange-500 px-8 py-20 text-center">
      <img
        className="mx-auto mb-8 w-64 rounded-xl"
        src="https://imgs.search.brave.com/Q7DOWwOtKPHd0OYdhAwTFAOgdceIrttLFiM5ymkd160/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jb2xv/cmZ1bC1jYXJ0b29u/LXBpenphLXNsaWNl/LWZsb2F0cy1hZ2Fp/bnN0LXNvbGlkLXJl/ZC1iYWNrZ3JvdW5k/LWhhcy10aGljay1j/dXJsZWQtY3J1c3Qt/dG9wcGVkLXNtaWxp/bmctcGVwcGVyb25p/LTM4Mzg2NDc2Ny5q/cGc"
        alt="Delicious pizza"
      />

      <div>
        <h1 className="text-4xl font-bold text-white">
          Welcome to FoodZone
        </h1>

        <p className="mt-4 text-lg text-white">
          Delicious Food, Delivered Fresh and Fast to Your Door
        </p>

        <Link href="/menu">
          <Button
            Btnname="View Menu"
            className="mt-6 bg-white text-orange-500"
          />
        </Link>
      </div>
      <div className="bg-orange-50 px-[50px] py-16 text-center my-10">
        <h2 className="mb-10 text-3xl font-bold text-orange-600">
          Why Choose FoodZone
        </h2>

        <div className="mx-auto grid max-w-5xl text-2xl gap-6 md:grid-cols-3 ">
          <CartContent
            img="/delivery.png"
            name="Fast Delivery"
            para="Get Your Food in Under 30 Mins"
            price=""
          />

          <CartContent
            img="/fresh-food.png"
            name="Fresh Food"
            para="Fresh and Delicious Food Every Day"
            price=""
          />

          <CartContent
            img="/price.png"
            name="Best Price"
            para="Delicious Food at Affordable Prices"
            price=""
          />
        </div>
      </div>
    </section>
  );
}