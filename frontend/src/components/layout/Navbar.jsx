import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar relative z-30 h-20 md:h-auto">
      <div className="fixed left-4 right-4 top-0 z-40 flex items-center justify-between gap-4 bg-[#F9F3EA]/95 py-4 shadow-sm backdrop-blur-md sm:left-6 sm:right-6 md:static md:bg-transparent md:py-7 md:shadow-none md:backdrop-blur-none">
      <Link to="/" className="flex items-center gap-2">
        <h1 className="whitespace-nowrap rounded-md bg-orange-300/30 px-3 py-2 text-xl font-bold text-[#FFA552] sm:text-3xl md:bg-transparent md:px-0 md:py-0">
          MiuMiu Shop
        </h1>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          <li><a href="/#home" className="text-base font-medium text-[#FFA552] sm:text-lg">Home</a></li>
          <li><a href="/#pets" className="text-base font-medium text-[#FFA552] sm:text-lg">Pets</a></li>
          <li><a href="/#about" className="text-base font-medium text-[#FFA552] sm:text-lg">About</a></li>
          <li><a href="/#contact" className="text-base font-medium text-[#FFA552] sm:text-lg">Contact</a></li>
          <li><a href="/#donate" className="text-base font-medium text-[#FFA552] sm:text-lg">Donate</a></li>
          <li>
            <Link
              to="/login"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#FFA552] px-6 py-3 font-medium text-white transition hover:bg-[#ff972f] sm:px-8 sm:py-4"
            >
              SIGN IN
            </Link>
          </li>
        </ul>

        <Link
          to="/login"
          className="inline-flex min-w-[104px] items-center justify-center whitespace-nowrap rounded-full bg-[#FFA552] px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-[#ff972f] sm:text-base md:hidden"
        >
          SIGN IN
        </Link>
      </div>

      <ul className={`fixed left-0 right-0 top-0 z-30 flex items-center justify-center gap-4 bg-[#F9F3EA]/95 px-4 pb-4 pt-20 shadow-sm backdrop-blur-md transition-all sm:gap-10 md:hidden ${active ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-full opacity-0'}`}>
        <li><a href="#home" className="text-base font-medium text-[#FFA552]">Home</a></li>
        <li><a href="#pets" className="text-base font-medium text-[#FFA552]">Pets</a></li>
        <li><a href="#about" className="text-base font-medium text-[#FFA552]">About</a></li>
        <li><a href="#contact" className="text-base font-medium text-[#FFA552]">Contact</a></li>
        <li><a href="#donate" className="text-base font-medium text-[#FFA552]">Donate</a></li>
      </ul>
    </div>
  );
};

export default Navbar; 