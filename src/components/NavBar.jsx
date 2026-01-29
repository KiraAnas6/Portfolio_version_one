import { Link } from "react-router-dom";
const NavBar = ({containerClass = "" , links}) => {
  return (
    <nav className={`py-4 px-12 flex justify-between items-center fixed top-0 w-full z-[100] mask-fade-bottom ${containerClass}`}>
      <Link to="/" className="font-bold">
        <h3>Anas</h3>
      </Link>
      <ul className="flex gap-4 text-sm text-gray max-sm:hidden">
        {links.map((link) => {
          return (
            <li
              key={link}
              className="cursor-pointer transition-all transition-300 hover:text-white hover:scale-110 "
            >
              <a href={`${link.toLowerCase() == 'home' ? "/" : `/${link.toLowerCase()}`}`}>{link}</a>
            </li>
          );
        })}
      </ul>
      <button className="uppercase cursor-pointer hover:text-black transition-all transition-300 hover:bg-white ho border-solid border-2 border-white py-2 px-4 text-white text-xs arial">
        <Link to="/contact">get in touch</Link>
      </button>
    </nav>
  );
};

export default NavBar;
