import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-[#180d09] px-8 py-3 text-white">
      {/* Logo */}
      <Link href="/" className="text-4xl font-bold">
        FoodZone 🍕
      </Link>

      {/* Navigation */}
      <div className="flex items-center gap-7 text-[10px]">
        <Link
          href="/"
          className="text-gray-400 text-lg hover:text-white"
        >
          Home
        </Link>

        <Link
          href="/menu"
          className="text-gray-400 text-lg hover:text-white"
        >
          Menu
        </Link>

        <Link
          href="/about"
          className="text-gray-400 text-lg hover:text-white  "
        >
          About
        </Link>

        <Link
          href="/contacts"
          className="text-gray-400 text-lg hover:text-white"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}