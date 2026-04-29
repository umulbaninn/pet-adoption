import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-32 w-full bg-[#ffa552] text-[#f9f3ea]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-10 md:flex-row md:items-start md:justify-between md:px-12">
        
        <div>
          <h1 className="text-2xl text-[#f9f3ea] font-bold">MiuMiu Shop</h1>

          <ul className="mt-4 flex flex-col gap-2 font-semibold">
            <li><a href="/#home" className="transition hover:text-black/50">Home</a></li>
            <li><a href="/#pets" className="transition hover:text-black/50">Pets</a></li>
            <li><a href="/#about" className="transition hover:text-black/50">About</a></li>
            <li><a href="/#contact" className="transition hover:text-black/50">Contact</a></li>
            <li><Link to="/donate" className="transition hover:text-black/50">Donate</Link></li>
          </ul>

          <div className="flex gap-4 pt-4 text-3xl">
            <li><a href="https://www.instagram.com" className="transition hover:text-black/50"><FaInstagram /></a></li>
            <li><a href="https://www.tiktok.com" className="transition hover:text-black/50"><FaTiktok /></a></li>
            <li><a href="https://www.facebook.com" className="transition hover:text-black/50"><FaFacebook /></a></li>
          </div>
        </div>

        <div className="flex flex-col gap-2 font-semibold">
          <Link to="/privacy" className="transition hover:text-black/50">Privacy Policy</Link>
          <Link to="/terms" className="transition hover:text-black/50">Terms of Service</Link>
        </div>

        <div className="font-semibold">
          <h6>"Give them a forever home"</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;