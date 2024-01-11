import { Link } from "react-router-dom";
import { navLinks } from "../constant/Navbar";

const Navbar = () => {
  return (
    <nav className="h-16 shadow-lg shadow-black/5 flex items-center pr-10 text-pink-600 bg-white">
      <h1 className="ml-10 text-3xl font-bold italic">Shift Bookee</h1>
      <ul className="flex gap-6 ml-auto">
        {navLinks.map(({ link, title }) => (
          <Link to={link}>
            <li key={title} className="cursor-pointer">
              {title}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
