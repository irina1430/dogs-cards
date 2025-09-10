import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#4B0082] py-3 shadow-md z-50">
      <div className="flex items-center justify-between px-6 md:px-12">
        <p className="text-white font-bold text-xl md:text-2xl flex-shrink-0">
          Dog Breeds
        </p>

        <nav className="flex gap-6 md:gap-10 flex-shrink-0">
          <Link
            href="/"
            className="text-white text-xl md:text-2xl font-bold hover:scale-105 hover:text-[#E6E6FA] transition-transform duration-400"
          >
            Home
          </Link>
          <Link
            href="/addDog"
            className="text-white text-xl md:text-2xl font-bold hover:scale-105 hover:text-[#E6E6FA] transition-transform duration-400"
          >
            Add breed card
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
